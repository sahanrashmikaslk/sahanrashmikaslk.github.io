export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  year: number;
  category: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
  featured: boolean;
  category: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  current: boolean;
}

export interface Skill {
  name: string;
  level: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  facebook: string;
  instagram: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  bio: string;
  social: SocialLinks;
  education: Education[];
  experience: Experience[];
  achievements: Achievement[];
  skills: Record<string, Skill[]>;
  projects: Project[];
}