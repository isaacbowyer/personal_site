import * as Chakra from "@chakra-ui/react";
import { TemplateContainer } from "@/components/templates/TemplateContainer";
import { HomeSection } from "./components/HomeSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { ProjectSection } from "./components/ProjectSection";
import { WorkSection } from "./components/WorkSection";
import { ContactSection } from "./components/ContactSection";
import { usePageSite } from "@/hooks/usePageSite";

export const PageSite = () => {
  const { state, methods } = usePageSite();

  return (
    <TemplateContainer
      main={
        <Chakra.VStack w="full" h="full">
          <HomeSection />

          <ExpertiseSection
            activeCard={state.activeExpertiseItem}
            onClickExpertiseCard={methods.handleClickExpertiseItem}
            expertiseItems={state.expertiseItems}
          />

          <ProjectSection
            projects={state.projectItems}
            categories={state.projectCategories}
            activeFilter={state.activeCategoryFilter}
            categoryCounts={state.projectCategoryCounts}
            handleSetActiveFilter={methods.handleChangeActiveCategory}
          />

          <WorkSection experienceItems={state.workItems} />

          <ContactSection
            contactItems={state.contactItems}
            handleOnClick={methods.handleClickContactItem}
          />
        </Chakra.VStack>
      }
    />
  );
};
