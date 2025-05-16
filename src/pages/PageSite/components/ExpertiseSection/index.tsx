import * as Chakra from "@chakra-ui/react";
import { AnimatedTitle } from "@/components/atoms/AnimatedTitle";
import { useExpertiseSection } from "@/hooks/useExpertiseSection";
import { ExpertiseCard } from "@/components/organisms/ExpertiseCard";
import { motion } from "framer-motion";
import { theme } from "@/theme";

const MotionGrid = motion(Chakra.Grid);

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
        fontSize={{ base: "lg", md: "xl" }}
      >
        Specialized knowledge and proven experience across multiple development
        domains
      </Chakra.Text>

      <Chakra.Flex px={4} py={8} justifyContent="center" alignItems="center">
        <MotionGrid
          w="full"
          maxW="5xl"
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          {state.expertiseItems.map((expertise) => (
            <ExpertiseCard
              key={expertise.id}
              title={expertise.title}
              icon={expertise.icon}
              description={expertise.description}
              color={expertise.color}
              isActive={state.activeCard === expertise.id}
              onClick={() => methods.handleClickActiveCard(expertise.id)}
            />
          ))}
        </MotionGrid>
      </Chakra.Flex>
    </Chakra.VStack>
  );
};
