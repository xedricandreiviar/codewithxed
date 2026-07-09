"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useGate } from "@/components/ui/GateContext";

export function DungeonGate() {
  const [phase, setPhase] = useState<"idle" | "fight" | "impact" | "shatter" | "done">("idle");
  const { setGateOpen } = useGate();

  function handleBeginQuest() {
    setPhase("fight");
    setTimeout(() => setPhase("impact"), 1400);
    setTimeout(() => setPhase("shatter"), 1800);
    setTimeout(() => {
      setPhase("done");
      setGateOpen(true);
    }, 2800);
  }

  if (phase === "done") return null;

  return (
    <motion.div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 50%, #1a1510 0%, #0d0a07 100%)" }}
      />

      {/* Stone texture */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(60,45,25,0.3) 40px, rgba(60,45,25,0.3) 42px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(50,35,20,0.2) 60px, rgba(50,35,20,0.2) 62px)
          `,
        }}
      />

      {/* Top door */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2"
        initial={{ y: "-100%" }}
        animate={phase === "shatter" ? { y: "-110%", rotate: -3, opacity: 0 } : { y: 0 }}
        transition={phase === "shatter" ? { duration: 0.8, ease: [0.4, 0, 1, 1] } : { type: "spring", stiffness: 120, damping: 20 }}
      >
        <div className="relative h-full w-full overflow-hidden" style={{ background: "linear-gradient(180deg, #2c1e0f 0%, #3d2a14 30%, #4a3218 60%, #352410 100%)" }}>
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`gt-${i}`} className="absolute left-0 right-0 h-px" style={{ top: `${8 + i * 8}%`, background: `linear-gradient(90deg, transparent 0%, #1a0f05 ${20 + (i % 3) * 15}%, transparent ${60 + (i % 4) * 10}%, #1a0f05 85%, transparent 100%)` }} />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-[#2a2520] to-[#1c1815] border-t-2 border-[#4a4035]">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={`rt-${i}`} className="absolute top-2 h-4 w-4 rounded-full" style={{ left: `${7 + i * 14}%`, background: "radial-gradient(circle at 35% 35%, #6b5d4f, #2a2218)", boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1), 0 1px 3px rgba(0,0,0,0.5)" }} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom door */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        initial={{ y: "100%" }}
        animate={phase === "shatter" ? { y: "110%", rotate: 2, opacity: 0 } : { y: 0 }}
        transition={phase === "shatter" ? { duration: 0.8, ease: [0.4, 0, 1, 1] } : { type: "spring", stiffness: 120, damping: 20 }}
      >
        <div className="relative h-full w-full overflow-hidden" style={{ background: "linear-gradient(0deg, #2c1e0f 0%, #3d2a14 30%, #4a3218 60%, #352410 100%)" }}>
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`gb-${i}`} className="absolute left-0 right-0 h-px" style={{ top: `${8 + i * 8}%`, background: `linear-gradient(90deg, transparent 0%, #1a0f05 ${15 + (i % 3) * 20}%, transparent ${55 + (i % 4) * 12}%, #1a0f05 80%, transparent 100%)` }} />
            ))}
          </div>
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-t from-[#2a2520] to-[#1c1815] border-b-2 border-[#4a4035]">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={`rb-${i}`} className="absolute bottom-2 h-4 w-4 rounded-full" style={{ left: `${7 + i * 14}%`, background: "radial-gradient(circle at 35% 35%, #6b5d4f, #2a2218)", boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1), 0 1px 3px rgba(0,0,0,0.5)" }} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Shatter debris */}
      {phase === "shatter" && (
        <div className="absolute inset-0 z-40 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => {
            const angle = (i / 30) * Math.PI * 2;
            const distance = 200 + Math.random() * 400;
            const size = 4 + Math.random() * 12;
            return (
              <motion.div
                key={`debris-${i}`}
                className="absolute left-1/2 top-1/2 rounded-sm"
                style={{ width: size, height: size, background: `hsl(${25 + Math.random() * 15}, ${40 + Math.random() * 20}%, ${15 + Math.random() * 20}%)`, boxShadow: "0 0 4px rgba(0,0,0,0.5)" }}
                initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                animate={{ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance, opacity: 0, rotate: Math.random() * 720 - 360 }}
                transition={{ duration: 0.8 + Math.random() * 0.4, ease: "easeOut" }}
              />
            );
          })}
        </div>
      )}

      {/* Left mage */}
      {(phase === "fight" || phase === "impact") && (
        <motion.div
          className="absolute left-[8%] top-1/2 -translate-y-1/2 z-30 text-4xl lg:text-6xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={phase === "fight" ? { rotate: [0, -15, 5, -15, 0] } : { scale: 1.2 }}
            transition={phase === "fight" ? { duration: 0.6, repeat: Infinity } : { duration: 0.2 }}
          >
            🧙‍♂️
          </motion.div>
        </motion.div>
      )}

      {/* Right mage */}
      {(phase === "fight" || phase === "impact") && (
        <motion.div
          className="absolute right-[8%] top-1/2 -translate-y-1/2 z-30 text-4xl lg:text-6xl scale-x-[-1]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={phase === "fight" ? { rotate: [0, 15, -5, 15, 0] } : { scale: 1.2 }}
            transition={phase === "fight" ? { duration: 0.6, repeat: Infinity } : { duration: 0.2 }}
          >
            🧙‍♂️
          </motion.div>
        </motion.div>
      )}

      {/* Left fireball */}
      {phase === "fight" && (
        <motion.div
          className="absolute left-[18%] top-1/2 -translate-y-1/2 z-35"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ x: "calc(50vw - 18vw - 20px)", scale: 1.3, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.1, 0, 0.5, 1] }}
        >
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}>
            <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full" style={{ background: "radial-gradient(circle, #fff 0%, #ffaa00 30%, #ff4400 60%, #ff000080 100%)", boxShadow: "0 0 20px #ff6600, 0 0 40px #ff4400, 0 0 60px #ff220080" }} />
          </motion.div>
          {/* Trail */}
          <div className="absolute top-1/2 right-full -translate-y-1/2 h-4 w-24 lg:w-36" style={{ background: "linear-gradient(90deg, transparent 0%, #ff440060 50%, #ff8800 100%)", filter: "blur(4px)" }} />
        </motion.div>
      )}

      {/* Right fireball */}
      {phase === "fight" && (
        <motion.div
          className="absolute right-[18%] top-1/2 -translate-y-1/2 z-35"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ x: "calc(-50vw + 18vw + 20px)", scale: 1.3, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.1, 0, 0.5, 1] }}
        >
          <motion.div animate={{ rotate: [360, 0] }} transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}>
            <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full" style={{ background: "radial-gradient(circle, #fff 0%, #aa44ff 30%, #6600cc 60%, #44008880 100%)", boxShadow: "0 0 20px #8833ff, 0 0 40px #6600cc, 0 0 60px #44008880" }} />
          </motion.div>
          {/* Trail */}
          <div className="absolute top-1/2 left-full -translate-y-1/2 h-4 w-24 lg:w-36" style={{ background: "linear-gradient(270deg, transparent 0%, #6600cc60 50%, #aa44ff 100%)", filter: "blur(4px)" }} />
        </motion.div>
      )}

      {/* Impact explosion */}
      {phase === "impact" && (
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
          <motion.div
            className="rounded-full"
            initial={{ width: 20, height: 20, opacity: 1 }}
            animate={{ width: "120vw", height: "120vh", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ background: "radial-gradient(circle, #ffffff 0%, #ffcc00 20%, #ff6600 40%, #ff000000 70%)" }}
          />
          <motion.div
            className="absolute rounded-full border-4 border-white/60"
            initial={{ width: 10, height: 10, opacity: 1 }}
            animate={{ width: "150vw", height: "150vh", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />
          <motion.div
            className="absolute rounded-full border-2 border-orange-400/40"
            initial={{ width: 10, height: 10, opacity: 1 }}
            animate={{ width: "180vw", height: "180vh", opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          />
        </div>
      )}

      {/* Screen flash */}
      {phase === "impact" && (
        <motion.div
          className="absolute inset-0 z-50 pointer-events-none bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8, 0] }}
          transition={{ duration: 0.5, times: [0, 0.1, 0.3, 1] }}
        />
      )}

      {/* Floating dust particles (idle) */}
      {phase === "idle" && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute rounded-full bg-[#c9a96e]"
              style={{ width: `${1 + Math.random() * 2}px`, height: `${1 + Math.random() * 2}px`, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -30 - Math.random() * 40, 0], x: [0, (Math.random() - 0.5) * 20, 0], opacity: [0, 0.6, 0] }}
              transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      {/* Torch glows (idle) */}
      {phase === "idle" && (
        <>
          <div className="absolute top-1/4 left-4 w-16 h-32 pointer-events-none">
            <motion.div className="h-full w-full rounded-full" style={{ background: "radial-gradient(circle, rgba(255,140,40,0.15) 0%, transparent 70%)" }} animate={{ opacity: [0.4, 0.8, 0.5, 0.7, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
          </div>
          <div className="absolute top-1/4 right-4 w-16 h-32 pointer-events-none">
            <motion.div className="h-full w-full rounded-full" style={{ background: "radial-gradient(circle, rgba(255,140,40,0.15) 0%, transparent 70%)" }} animate={{ opacity: [0.5, 0.7, 0.4, 0.8, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </>
      )}

      {/* Center content - idle only */}
      {phase === "idle" && (
        <motion.div
          className="relative z-10 flex flex-col items-center gap-4 px-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div
            className="relative p-6 lg:p-10"
            style={{ border: "3px solid #5a4228", boxShadow: "inset 0 0 30px rgba(0,0,0,0.5), 0 0 15px rgba(90,66,40,0.3)", background: "linear-gradient(135deg, #0d0a07 0%, #1a1510 50%, #0d0a07 100%)" }}
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8b7355]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8b7355]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8b7355]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8b7355]" />

            {/* Torch icons */}
            <div className="mb-4 flex items-center justify-center gap-4">
              <motion.span className="text-xl lg:text-2xl" animate={{ rotate: [-2, 2, -2], scale: [1, 1.05, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>🕯️</motion.span>
              <span className="font-display text-[6px] text-[#8b7355] tracking-wider lg:text-[8px]">A NEW CHALLENGER APPROACHES</span>
              <motion.span className="text-xl lg:text-2xl" animate={{ rotate: [2, -2, 2], scale: [1, 1.05, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>🕯️</motion.span>
            </div>

            {/* Title */}
            <motion.p className="font-display text-[9px] leading-relaxed text-[#c9a96e] lg:text-xs" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.4 }}>
              The Codex of
            </motion.p>
            <motion.h1 className="mt-1 font-display text-sm leading-relaxed text-[#f0e6d3] lg:text-lg" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.4 }}>
              Xedric Andrei Viar
            </motion.h1>

            {/* Divider */}
            <motion.div className="mx-auto mt-4 h-px w-32 lg:w-48" style={{ background: "linear-gradient(90deg, transparent, #5a4228, transparent)" }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.8, duration: 0.5 }} />

            {/* Flavor text */}
            <motion.p className="mt-4 font-body text-base text-[#a08b6e] lg:text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.4 }}>
              A developer&apos;s quest lies beyond these ancient gates...
            </motion.p>

            {/* Question */}
            <motion.p className="mt-5 font-display text-[7px] text-[#8b7355] tracking-wide lg:text-[8px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 0.4 }}>
              DARE YOU ENTER THE DUNGEON?
            </motion.p>

            {/* Button */}
            <motion.button
              onClick={handleBeginQuest}
              className="mt-6 px-8 py-3 font-display text-[8px] text-[#f0e6d3] tracking-wider transition-all hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a96e] lg:text-[9px]"
              style={{ border: "2px solid #5a4228", background: "linear-gradient(180deg, #2a1f12 0%, #1a1408 100%)", boxShadow: "0 0 10px rgba(201,169,110,0.2), inset 0 1px 0 rgba(255,255,255,0.05)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.4 }}
              whileHover={{ boxShadow: "0 0 20px rgba(201,169,110,0.4), inset 0 1px 0 rgba(255,255,255,0.1)", borderColor: "#8b7355" }}
            >
              ⚔️ BEGIN QUEST
            </motion.button>

            {/* Blinking hint */}
            <motion.p className="mt-3 font-body text-xs text-[#6b5d4f]" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.7, 0] }} transition={{ delay: 3.2, duration: 2, repeat: Infinity }}>
              — press to continue —
            </motion.p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
