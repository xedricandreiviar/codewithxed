export interface NavLink {
  label: string;
  href: string;
}

export interface ProjectInfo {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  icon?: "arrow" | "github";
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tag?: string;
  status?: "complete" | "in-progress";
  info: ProjectInfo[];
  links: ProjectLink[];
}

export interface ExperienceEntry {
  title: string;
  company: string;
  dateRange: string;
  type: "full-time" | "part-time" | "freelance" | "internship";
  description: string;
  achievements: string[];
  tools: string[];
  image?: string;
}

export interface SocialLink {
  platform: "linkedin" | "github" | "twitter" | "instagram";
  href: string;
}

export interface EventEntry {
  title: string;
  organizer: string;
  date: string;
  description: string;
  type: "workshop" | "hackathon" | "conference" | "meetup" | "bootcamp";
  learned: string[];
  image?: string;
}
