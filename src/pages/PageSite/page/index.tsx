import * as Chakra from "@chakra-ui/react";
import { TemplateContainer } from "@/components/templates/TemplateContainer";
import { HomeSection } from "../components/HomeSection";

export const Site = () => {
  return (
    <TemplateContainer
      main={
        <Chakra.VStack w="full" h="full">
          <HomeSection />
        </Chakra.VStack>
      }
    />
  );
};
