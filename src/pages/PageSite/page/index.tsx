import * as Chakra from "@chakra-ui/react";
import { TemplateContainer } from "@/components/templates/TemplateContainer";
import { HomeSection } from "../components/HomeSection";
import { ExpertiseSection } from "../components/ExpertiseSection";

export const Site = () => {
  return (
    <TemplateContainer
      main={
        <Chakra.VStack w="full" h="full" gap={{ base: 20, md: 20 }}>
          <HomeSection />
          <ExpertiseSection />
        </Chakra.VStack>
      }
    />
  );
};
