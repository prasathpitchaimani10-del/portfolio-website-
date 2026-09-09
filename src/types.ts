export interface SkillCategory {
  title: string;
  category: 'PROGRAMMING' | 'WEB' | 'TOOLS' | 'CORE CONCEPTS' | 'SOFT SKILLS';
  description: string;
  skills: {
    name: string;
    description?: string;
    iconName?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  description: string;
  focusAreas: string[];
}

export interface InterestItem {
  title: string;
  category: string;
  description: string;
  details: string;
  keyTopics: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}
