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
  achievements: Achievement[];
  skills: Record<string, Skill[]>;
  projects: Project[];
}