import { ICategory } from "@/interfaces/ICategory";
import { IProject } from "@/interfaces/IProject";

export const getProjects = (projects: IProject[], activeFilter: ICategory) => {
  if (activeFilter === "All") {
    return projects; // return all projects if filter is 'All'
  }

  return projects.filter((item) => item.category === activeFilter);
};
