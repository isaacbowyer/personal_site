import { useState } from "react";
import { getProjects } from "@/utils/getProjects";
import { getProjectCategoryCounts } from "@/utils/getProjectCategoryCounts";
import { ICategory } from "@/interfaces/ICategory";
import { PROJECTS } from "@/data/projects";

export const useProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ICategory>("All");

  const handleSetActiveFilter = (category: ICategory) => {
    setActiveFilter(category);
  };

  const categories: ICategory[] = ["All", "Mobile Apps", "Web Apps"];

  const filteredItems = getProjects(PROJECTS, activeFilter);

  const categoryCounts = getProjectCategoryCounts({
    projects: PROJECTS,
    categories: categories,
    activeFilter: activeFilter,
  });

  return {
    state: {
      projects: filteredItems,
      categories: categories,
      categoryCounts: categoryCounts,
      activeFilter: activeFilter,
    },
    methods: {
      handleChangeActiveFilter: handleSetActiveFilter,
    },
  };
};
