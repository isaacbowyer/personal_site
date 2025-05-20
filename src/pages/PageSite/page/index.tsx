import * as Chakra from "@chakra-ui/react";
import { TemplateContainer } from "@/components/templates/TemplateContainer";
import { HomeSection } from "../components/HomeSection";
import { ExpertiseSection } from "../components/ExpertiseSection";
import { useExpertiseSection } from "@/hooks/useExpertiseSection";
import { useIsMobileContext } from "@/context/useIsMobile";
import { ProjectSection } from "../components/ProjectSection";
import { useProjectsSection } from "@/hooks/useProjectsSection";
import { WorkSection } from "../components/WorkSection";
import { useWorkSection } from "@/hooks/useWorkSection";
import { ContactSection } from "../components/ContactSection";
import { useContactSection } from "@/hooks/useContactSection";

export const Site = () => {
  const { isMobile } = useIsMobileContext();
  const { state: expertiseState, methods: expertiseMethods } =
    useExpertiseSection();
  const { state: projectsState, methods: projectsMethods } =
    useProjectsSection();
  const { state: workState } = useWorkSection();
  const { state: contactState, methods: contactMethods } = useContactSection();

  return (
    <TemplateContainer
      main={
        <Chakra.VStack w="full" h="full" gap={{ base: 20, md: 28 }}>
          <HomeSection isMobile={isMobile} />

          <ExpertiseSection
            activeCard={expertiseState.activeCard}
            onClickExpertiseCard={expertiseMethods.handleClickCard}
            expertiseItems={expertiseState.expertiseItems}
          />

          <ProjectSection
            projects={projectsState.projects}
            categories={projectsState.categories}
            activeFilter={projectsState.activeFilter}
            categoryCounts={projectsState.categoryCounts}
            handleSetActiveFilter={projectsMethods.handleChangeActiveFilter}
          />

          <WorkSection experienceItems={workState.workItems} />

          <ContactSection
            contactItems={contactState.contactItems}
            handleOnClick={contactMethods.handleClick}
          />
        </Chakra.VStack>
      }
    />
  );
};
