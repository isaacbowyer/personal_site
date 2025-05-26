import * as Chakra from "@chakra-ui/react";
import { IProject } from "@/interfaces/IProject";
import { ICategory } from "@/interfaces/ICategory";
import { ICategoryCount } from "@/interfaces/ICategoryCount";
import { AdvancedProjectFilter } from "@/components/organisms/AdvancedProjectFilter";
import { ProjectsCardContainer } from "@/components/organisms/ProjectCardContainer";
import { motion } from "framer-motion";

interface IProps {
  projects: IProject[];
  categoryCounts: ICategoryCount;
  categories: ICategory[];
  activeFilter: ICategory;
  handleSetActiveFilter: (category: ICategory) => void;
}

const MotionBox = motion(Chakra.Box);

export const ProjectSection = ({
  projects,
  categories,
  categoryCounts,
  activeFilter,
  handleSetActiveFilter,
}: IProps) => {
  return (
    <Chakra.VStack
      width="full"
      backgroundGradient="linear-gradient(to bottom right, #1a202c, #2d3748, #1a202c)"
      id="projects"
      py={8}
      px={4}
    >
      <Chakra.VStack width="full" maxW="1200px" minH="100vh" gap={8}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          w="full"
        >
          <Chakra.VStack
            textAlign={{ base: "center", md: "start" }}
            align={{ base: "center", md: "start" }}
            justifyContent={{ base: "center", md: "start" }}
            width="full"
            gap={2}
          >
            <Chakra.Text
              as="span"
              backgroundGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
              bgClip="text"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="extrabold"
              fontFamily="sans-serif"
              letterSpacing="6px"
            >
              PROJECTS
            </Chakra.Text>

            <Chakra.Box
              w="80px"
              h="4px"
              bgGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
              borderRadius="full"
            />

            <Chakra.Text color="gray.300" fontSize="lg">
              {
                "Innovative solutions I've designed and developed, showcasing real-world applications of my technical skills."
              }
            </Chakra.Text>
          </Chakra.VStack>
        </MotionBox>

        <AdvancedProjectFilter
          activeFilter={activeFilter}
          categories={categories}
          handleChangeActiveFilter={handleSetActiveFilter}
          categoryCounts={categoryCounts}
        />

        <ProjectsCardContainer
          projects={projects}
          activeFilter={activeFilter}
        />
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
