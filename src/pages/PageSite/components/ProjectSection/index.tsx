import * as Chakra from "@chakra-ui/react";
import { AnimatedTitleWithHeader } from "@/components/atoms/AnimatedTitleWithHeader";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { motion } from "framer-motion";
import { IProject } from "@/interfaces/IProject";
import { ICategory } from "@/interfaces/ICategory";
import { ICategoryCount } from "@/interfaces/ICategoryCount";
import { AdvancedProjectFilter } from "@/components/organisms/AdvancedProjectFilter";
import { ProjectsCardContainer } from "@/components/organisms/ProjectCardContainer";

const MotionSimpleGrid = motion(Chakra.SimpleGrid);
const MotionBox = motion(Chakra.Box);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

interface IProps {
  projects: IProject[];
  categoryCounts: ICategoryCount;
  categories: ICategory[];
  activeFilter: ICategory;
  handleSetActiveFilter: (category: ICategory) => void;
}
export const ProjectSection = ({
  projects,
  categories,
  categoryCounts,
  activeFilter,
  handleSetActiveFilter,
}: IProps) => {
  return (
    <Chakra.VStack w="full" id="projects" gap={8}>
      <AnimatedTitleWithHeader
        title="PROJECTS"
        header="Innovative solutions I've designed and developed, showcasing real-world applications of my technical skills."
      />

      <AdvancedProjectFilter
        activeFilter={activeFilter}
        categories={categories}
        handleChangeActiveFilter={handleSetActiveFilter}
        categoryCounts={categoryCounts}
      />

      <ProjectsCardContainer projects={projects} activeFilter={activeFilter} />
    </Chakra.VStack>
  );
};
