import * as Chakra from "@chakra-ui/react";
import { AnimatedTitle } from "@/components/atoms/AnimatedTitle";
import { HexagonalProfileImage } from "@/components/molecules/HexagonalProfileImage";
import { ProfileAvatar } from "@/components/molecules/ProfileAvatar";
import { useHomeSection } from "@/hooks/useHomeSection";
import { HomeSectionActions } from "@/components/molecules/HomeSectionActions";

export const HomeSection = () => {
  const { state } = useHomeSection();

  return (
    <Chakra.Grid
      templateColumns={{ base: "1fr", md: "2fr 3fr" }}
      overflow="hidden"
      gap={8}
      w="full"
      h="full"
    >
      <Chakra.VStack
        w="full"
        align={{ base: "center", md: "flex-start" }}
        gap={{ base: 16, md: 24 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Chakra.VStack display={{ base: "block", md: "none" }}>
          <ProfileAvatar />
        </Chakra.VStack>

        <AnimatedTitle fontSize={state.isMobile ? "7xl" : "3xl"}>
          ISAAC BOWYER
        </AnimatedTitle>

        <HomeSectionActions />
      </Chakra.VStack>

      {state.imageSize && (
        <Chakra.VStack
          align="center"
          justify="center"
          display={{ base: "none", md: "flex" }}
        >
          <HexagonalProfileImage size={state.imageSize} />
        </Chakra.VStack>
      )}
    </Chakra.Grid>
  );
};
