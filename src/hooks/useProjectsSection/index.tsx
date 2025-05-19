import { theme } from "@/theme";
import { IProject } from "@/interfaces/IProject";
import { useState } from "react";
import { getProjects } from "@/utils/getProjects";
import { getProjectCategoryCounts } from "@/utils/getProjectCategoryCounts";
import { ICategory } from "@/interfaces/ICategory";

export const useProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ICategory>("All");

  const handleSetActiveFilter = (category: ICategory) => {
    setActiveFilter(category);
  };

  const projects: IProject[] = [
    {
      id: 1,
      title: "Occupational Health (OH) App",
      description:
        "Dissertation project focused on supporting individuals recovering from Long Covid, helping them in their self-management and return to work.",
      imageUrl: "images/projects/occupational_health_app.png",
      technologies: [
        "TypeScript",
        "React Native",
        "Firebase",
        "Gluestack UI",
        "Figma",
        "Expo",
      ],
      backgroundColor: theme.colors.gradients.light_blue,
      link: "#expertise",
      category: "Mobile Apps",
    },
    {
      id: 2,
      title: "Personal Website",
      description:
        "A professional personal portfolio website designed to highlight my projects, demonstrate my expertise, present my work experience, and provide easy access to contact information.",
      imageUrl: "images/projects/personal_website.png",
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Chakra UI",
        "Motion",
        "Figma",
        "Vercel",
      ],
      backgroundColor: theme.colors.gradients.sunset,
      link: "",
      category: "Web Apps",
    },
  ];

  const categories: ICategory[] = ["All", "Mobile Apps", "Web Apps"];

  const filteredItems = getProjects(projects, activeFilter);

  const categoryCounts = getProjectCategoryCounts({
    projects: projects,
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
