import { WORK_EXPERIENCES } from "@/data/work";
import { IWorkExperience } from "@/interfaces/IWorkExperience";

export const useWorkSection = () => {
  const workItems: IWorkExperience[] = WORK_EXPERIENCES;

  return {
    state: {
      workItems: workItems,
    },
  };
};
