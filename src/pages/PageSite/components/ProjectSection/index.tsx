import * as Chakra from "@chakra-ui/react";
import { AnimatedTitleWithHeader } from "@/components/molecules/AnimatedTitleWithHeader";
import { IProject } from "@/interfaces/IProject";
import { ICategory } from "@/interfaces/ICategory";
import { ICategoryCount } from "@/interfaces/ICategoryCount";
import { AdvancedProjectFilter } from "@/components/organisms/AdvancedProjectFilter";
import { ProjectsCardContainer } from "@/components/organisms/ProjectCardContainer";
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
