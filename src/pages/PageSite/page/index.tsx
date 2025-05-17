import * as Chakra from "@chakra-ui/react";
import { TemplateContainer } from "@/components/templates/TemplateContainer";
import { HomeSection } from "../components/HomeSection";
import { ExpertiseSection } from "../components/ExpertiseSection";

import { useExpertiseSection } from "@/hooks/useExpertiseSection";
import { useIsMobileContext } from "@/context/useIsMobile";
import { ProjectsSection } from "../components/ProjectsSection";

export const Site = () => {
  const { isMobile } = useIsMobileContext();
  const { state: expertiseState, methods: expertiseMethods } =
    useExpertiseSection();

  return (
    <TemplateContainer
      main={
        <Chakra.VStack w="full" h="full" gap={{ base: 20, md: 10 }}>
          <HomeSection isMobile={isMobile} />
          <ExpertiseSection
            activeCardId={expertiseState.activeCard}
            items={expertiseState.expertiseItems}
            isMobile={isMobile}
            onClickExpertiseCard={expertiseMethods.handleClickCard}
          />
          <ProjectsSection isMobile={isMobile} />
        </Chakra.VStack>
      }
    />
  );
};
