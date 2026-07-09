"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LevelGateProps {
  level: number;
  title: string;
  children: ReactNode;
}

export function LevelGate({ level, title, children }: LevelGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSlashing, setIsSlashing] = useState(false);

  function handleUnlock() {
    setIsSlashing(true);
    // Wait for slash animation, then reveal
    setTimeout(() => {
      setIsUnlocked(true);
    }, 1200);
  }

  return (
    <div className="relative">
      {/* The actual section content — always rendered but hidden behind the gate */}
      <div className={isUnlocked ? "" : "overflow-hidden max-h-0"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isUnlocked ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>

      {/* The Gate overlay */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div
            className="relative"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Stone/sand wall */}
            <div
              className="relative flex flex-col items-center justify-center py-16 px-4 overflow-hidden"
              style={{
                background: `
                  linear-gradient(180deg, 
                    #1a1510 0%, 
                    #2a2015 15%, 
                    #3d3020 40%, 
                    #4a3a25 60%, 
                    #3d3020 80%, 
                    #2a2015 95%, 
                    #1a1510 100%
                  )
                `,
              }}
            >
              {/* Stone block texture */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                {Array.from({ length: 6 }).map((_, row) => (
                  <div key={`row-${row}`} className="flex h-[16.66%]">
                    {Array.from({ length: 4 }).map((_, col) => (
                      <div
                        key={`block-${row}-${col}`}
                        className="flex-1 border border-[#1a1208]"
                        style={{
                          marginLeft: row % 2 === 0 ? 0 : "12.5%",
                          background: `linear-gradient(135deg, rgba(80,60,30,0.3) 0%, transparent 50%, rgba(30,20,10,0.3) 100%)`,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Cracks in the wall */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-[20%] left-[30%] w-px h-12 bg-[#0d0a05] rotate-[15deg]" />
                <div className="absolute top-[40%] right-[25%] w-px h-8 bg-[#0d0a05] rotate-[-10deg]" />
                <div className="absolute bottom-[30%] left-[60%] w-px h-10 bg-[#0d0a05] rotate-[5deg]" />
              </div>

              {/* Dust particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={`dust-${i}`}
                    className="absolute rounded-full bg-[#c9a96e]"
                    style={{
                      width: `${1 + Math.random() * 2}px`,
                      height: `${1 + Math.random() * 2}px`,
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Slash animation overlay */}
              <AnimatePresence>
                {isSlashing && (
                  <>
                    {/* Warrior character */}
                    <motion.div
                      className="absolute z-20 text-5xl lg:text-6xl"
                      initial={{ x: "-150%", opacity: 0 }}
                      animate={{ x: ["−150%", "0%", "0%", "150%"], opacity: [0, 1, 1, 0], rotate: [0, 0, -20, -20] }}
                      transition={{
                        duration: 1.2,
                        times: [0, 0.3, 0.5, 1],
                        ease: "easeInOut",
                      }}
                    >
                      🧙‍♂️
                    </motion.div>

                    {/* Magic slash effect */}
                    <motion.div
                      className="absolute inset-0 z-10 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 1, 1, 0] }}
                      transition={{ duration: 1.2, times: [0, 0.4, 0.5, 0.7, 1] }}
                    >
                      {/* Diagonal slash line */}
                      <motion.div
                        className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: [0, 0, 1, 1] }}
                        transition={{ duration: 1.2, times: [0, 0.4, 0.6, 1] }}
                      >
                        <div
                          className="w-full h-1 rotate-[-5deg]"
                          style={{
                            background: "linear-gradient(90deg, transparent 0%, #7df9ff 20%, #ffffff 50%, #7df9ff 80%, transparent 100%)",
                            boxShadow: "0 0 20px #7df9ff, 0 0 40px #7df9ff",
                          }}
                        />
                      </motion.div>
                      {/* Second slash */}
                      <motion.div
                        className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: [0, 0, 0, 1, 1] }}
                        transition={{ duration: 1.2, times: [0, 0.4, 0.5, 0.7, 1] }}
                      >
                        <div
                          className="w-full h-0.5 rotate-[3deg]"
                          style={{
                            background: "linear-gradient(90deg, transparent 0%, #b388ff 30%, #ffffff 50%, #b388ff 70%, transparent 100%)",
                            boxShadow: "0 0 15px #b388ff, 0 0 30px #b388ff",
                          }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Flash */}
                    <motion.div
                      className="absolute inset-0 z-30 bg-white pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 0, 0.8, 0] }}
                      transition={{ duration: 1.2, times: [0, 0.4, 0.5, 0.6, 1] }}
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Gate content */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                {/* Level indicator */}
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="h-px w-8 bg-[#5a4228] lg:w-16" />
                  <span className="font-display text-[7px] text-[#8b7355] tracking-wider lg:text-[8px]">
                    STAGE {level}
                  </span>
                  <div className="h-px w-8 bg-[#5a4228] lg:w-16" />
                </motion.div>

                {/* Lock icon */}
                <motion.span
                  className="text-3xl"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  🔒
                </motion.span>

                {/* Prompt text */}
                <p className="font-display text-[8px] text-[#c9a96e] lg:text-[9px]">
                  Advance to {title}?
                </p>

                {/* Unlock button */}
                <motion.button
                  onClick={handleUnlock}
                  disabled={isSlashing}
                  className="px-6 py-2.5 font-display text-[7px] text-[#f0e6d3] tracking-wider transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a96e] lg:text-[8px]"
                  style={{
                    border: "2px solid #5a4228",
                    background: "linear-gradient(180deg, #2a1f12 0%, #1a1408 100%)",
                    boxShadow: "0 0 8px rgba(201,169,110,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                  whileHover={{
                    boxShadow: "0 0 16px rgba(201,169,110,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                    borderColor: "#8b7355",
                  }}
                >
                  ⚔️ BREAK THE SEAL
                </motion.button>

                {/* Flavor text */}
                <motion.p
                  className="font-body text-xs text-[#6b5d4f]"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  a magical barrier blocks the path...
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
