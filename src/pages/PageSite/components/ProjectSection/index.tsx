import * as Chakra from "@chakra-ui/react";
import { IIsMobileState } from "@/interfaces/IIsMobileState";
import { AnimatedTitleWithHeader } from "@/components/atoms/AnimatedTitleWithHeader";

export const ProjectSection = () => {
  return (
    <Chakra.VStack w="full">
      <AnimatedTitleWithHeader
        title="PROJECTS"
        header="A list of my most recent projects"
      />
    </Chakra.VStack>
  );
};
