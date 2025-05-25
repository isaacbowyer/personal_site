import { ProjectCard } from "@/components/molecules/ProjectCard";
import { ICategory } from "@/interfaces/ICategory";
import { IProject } from "@/interfaces/IProject";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    rotateX: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
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
      columns={{ base: 1, md: 2, lg: 3 }}
      gap={8}
      w="full"
      alignItems="stretch"
      justifyItems="center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      key={activeFilter}
    >
      {projects.map((project, index) => (
        <MotionBox
          key={project.id}
          variants={cardVariants}
          whileHover={{
            y: -12,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          style={{ perspective: "1000px" }}
        >
          <ProjectCard
            id={project.id}
            title={project.title}
            description={project.description}
            projectImageUrl={project.images.previewImage}
            technologies={project.technologies}
            link={project.link}
            backgroundColor={project.backgroundColor}
          />
        </MotionBox>
      ))}
    </MotionSimpleGrid>
  );
};
