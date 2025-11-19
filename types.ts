export interface Project {
  client: string;
  name: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  startYear: number;
  endYear: number | 'Present';
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}
