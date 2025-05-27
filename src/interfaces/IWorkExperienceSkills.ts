export interface IWorkExperienceSkills {
  frontend: string[];
  backend: string[];
  testing: string[];
  tools: string[];
}

export type ISkillCategory = keyof IWorkExperienceSkills;
