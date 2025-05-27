import * as Chakra from "@chakra-ui/react";
import { IProject } from "@/interfaces/IProject";
import { ICategory } from "@/interfaces/ICategory";
import { ICategoryCount } from "@/interfaces/ICategoryCount";
import { AdvancedProjectFilter } from "@/components/organisms/AdvancedProjectFilter";
import { ProjectsCardContainer } from "@/components/organisms/ProjectCardContainer";
import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";

interface IProps {
  projects: IProject[];
  categoryCounts: ICategoryCount;
  categories: ICategory[];
  activeFilter: ICategory;
  handleSetActiveFilter: (category: ICategory) => void;
}

export const MainProjectsSection = ({
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
        <TitleWithHeader
          title="PROJECTS"
          header={`Innovative solutions I've designed and developed, showcasing
              real-world applications of my technical skills.`}
          headerColor="#9ea2aa"
        />

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
