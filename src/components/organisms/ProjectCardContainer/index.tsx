import { ProjectCard } from "@/components/molecules/ProjectCard";
import { ICategory } from "@/interfaces/ICategory";
import { IProject } from "@/interfaces/IProject";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

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

const MotionSimpleGrid = motion(Chakra.SimpleGrid);
const MotionBox = motion(Chakra.Box);

interface IProps {
  projects: IProject[];
  activeFilter: ICategory;
}

export const ProjectsCardContainer = ({ projects, activeFilter }: IProps) => {
  return (
    <MotionSimpleGrid
      minChildWidth="300px"
      gap={8}
      w="full"
      alignItems="start"
      justifyItems={{ base: "center", md: "start" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      key={activeFilter}
    >
      {projects.map((project) => (
        <MotionBox key={project.id} variants={cardVariants}>
          <ProjectCard {...project} />
        </MotionBox>
      ))}
    </MotionSimpleGrid>
  );
};
