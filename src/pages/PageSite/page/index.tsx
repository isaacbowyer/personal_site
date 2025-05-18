import * as Chakra from "@chakra-ui/react";
import { TemplateContainer } from "@/components/templates/TemplateContainer";
import { HomeSection } from "../components/HomeSection";
import { ExpertiseSection } from "../components/ExpertiseSection";

import { useExpertiseSection } from "@/hooks/useExpertiseSection";
import { useIsMobileContext } from "@/context/useIsMobile";
import { ProjectSection } from "../components/ProjectSection";

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
            activeCard={expertiseState.activeCard}
            onClickExpertiseCard={expertiseMethods.handleClickCard}
            items={expertiseState.expertiseItems}
          />
          <ProjectSection />
        </Chakra.VStack>
      }
    />
  );
};
