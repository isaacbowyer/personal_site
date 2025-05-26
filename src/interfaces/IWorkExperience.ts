import { IWorkExperienceSkills } from "./IWorkExperienceSkills";

export interface IWorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  companyDescription: string;
  jobDescription: string;
  skills: IWorkExperienceSkills;
}
