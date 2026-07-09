import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FeaturedProjects() {
  const completedCount = PROJECTS.filter((p) => p.status !== "in-progress").length;
  const inProgressCount = PROJECTS.filter((p) => p.status === "in-progress").length;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-[1440px] px-4 py-12 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col gap-12">
        {/* Section header - quest log title */}
        <ScrollReveal animation="glitch">
          <div className="pixel-border bg-bg-card p-4 lg:p-6">
            <p className="font-body text-xl text-accent">📖 QUEST LOG</p>
            <h2
              id="projects-heading"
              className="mt-2 font-display text-sm text-text-primary lg:text-lg"
            >
              Active Quests
            </h2>
            <p className="mt-2 font-body text-xl text-text-secondary lg:text-2xl">
              Here are some of the selected projects that showcase my passion for
              software development.
            </p>
            {completedCount > 0 && (
              <p className="mt-2 font-body text-lg text-xp-green">
                ✓ {completedCount}/{PROJECTS.length} quests completed
              </p>
            )}
            {inProgressCount > 0 && (
              <p className="mt-1 font-body text-lg text-yellow-400">
                ⏳ {inProgressCount}/{PROJECTS.length} quests in progress
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* Project list */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => (
            <ScrollReveal
              key={index}
              animation={index % 2 === 0 ? "fade-left" : "fade-right"}
              delay={index * 0.1}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
