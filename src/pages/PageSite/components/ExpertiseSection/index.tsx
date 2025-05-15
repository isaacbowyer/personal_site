import * as Chakra from "@chakra-ui/react";
import { AnimatedTitle } from "@/components/atoms/AnimatedTitle";
import { useIsMobile } from "@/hooks/useIsMobile";

export const ExpertiseSection = () => {
  const { state } = useIsMobile();

  return (
    <Chakra.VStack
      w="full"
      h="full"
      align={{ base: "center", md: "flex-start" }}
      id="expertise"
    >
      <AnimatedTitle isMobile={state.isMobile}>EXPERTISE</AnimatedTitle>
    </Chakra.VStack>
  );
};
