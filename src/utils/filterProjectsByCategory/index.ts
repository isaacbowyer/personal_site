import { ICategory } from "@/interfaces/ICategory";
import { IProject } from "@/interfaces/IProject";

export const filterProjectsByCategory = (
  projects: IProject[],
  activeCategory: ICategory
) => {
  return projects.filter((item) => item.category === activeCategory);
};
