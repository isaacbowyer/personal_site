import { ICategory } from "@/interfaces/ICategory";
import { IProject } from "@/interfaces/IProject";
import { filterProjectsByCategory } from "../filterProjectsByCategory";
import { ICategoryCount } from "@/interfaces/ICategoryCount";

interface IProps {
  projects: IProject[];
  categories: ICategory[];
  activeFilter: ICategory;
}

export const getProjectCategoryCounts = (payload: IProps): ICategoryCount => {
  return payload.categories.reduce((acc, cat) => {
    if (cat === "All") {
      acc[cat] = payload.projects.length;
    } else {
      acc[cat] = filterProjectsByCategory(payload.projects, cat).length;
    }
    return acc;
  }, {} as ICategoryCount);
};
