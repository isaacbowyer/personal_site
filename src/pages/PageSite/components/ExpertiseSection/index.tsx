import * as Chakra from "@chakra-ui/react";
import { AnimatedTitle } from "@/components/atoms/AnimatedTitle";
import { useExpertiseSection } from "@/hooks/useExpertiseSection";
import { theme } from "@/theme";
import { ExpertiseCardContainer } from "@/components/organisms/ExpertiseCardContainer";

export const ExpertiseSection = () => {
  const { state, methods } = useExpertiseSection();

  return (
    <Chakra.VStack
      w="full"
      h="full"
      align={{ base: "center", md: "flex-start" }}
      id="expertise"
    >
      <AnimatedTitle isMobile={state.isMobile}>EXPERTISE</AnimatedTitle>

      <Chakra.Text
        color={theme.colors.gray.medium}
        textAlign={{ base: "center", md: "start" }}
        fontSize={{ base: "lg", md: "xl" }}
      >
        Specialized knowledge and proven experience across multiple development
        domains
      </Chakra.Text>

      <ExpertiseCardContainer
        items={state.expertiseItems}
        activeCardId={state.activeCard}
        handleClickCard={methods.handleClickActiveCard}
      />
    </Chakra.VStack>
  );
};
