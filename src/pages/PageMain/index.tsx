import * as Chakra from "@chakra-ui/react";
import { TemplateContainer } from "@/components/templates/TemplateContainer";
import { usePageSite } from "@/hooks/usePageSite";
import { MainHomeSection } from "./components/MainHomeSection";
import { MainExpertiseSection } from "./components/MainExpertiseSection";
import { MainProjectsSection } from "./components/MainProjectsSection";
import { MainWorkSection } from "./components/MainWorkSection";
import { MainContactSection } from "./components/MainContactSection";

export const PageMain = () => {
  const { state, methods } = usePageSite();

  return (
    <TemplateContainer
      main={
        <Chakra.VStack w="full" h="full" gap={0}>
          <MainHomeSection />

          <MainExpertiseSection
            activeCard={state.activeExpertiseItem}
            onClickExpertiseCard={methods.handleClickExpertiseItem}
            expertiseItems={state.expertiseItems}
          />

          <MainProjectsSection
            projects={state.projectItems}
            categories={state.projectCategories}
            activeFilter={state.activeCategoryFilter}
            categoryCounts={state.projectCategoryCounts}
            handleSetActiveFilter={methods.handleChangeActiveCategory}
          />

          <MainWorkSection experienceItems={state.workItems} />

          <MainContactSection
            contactItems={state.contactItems}
            handleOnClick={methods.handleClickContactItem}
          />
        </Chakra.VStack>
      }
    />
  );
};
