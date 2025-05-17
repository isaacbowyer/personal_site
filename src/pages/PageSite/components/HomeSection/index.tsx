import * as Chakra from "@chakra-ui/react";
import { AnimatedTitle } from "@/components/atoms/AnimatedTitle";
import { HexagonalProfileImage } from "@/components/molecules/HexagonalProfileImage";
import { ProfileAvatar } from "@/components/molecules/ProfileAvatar";
import { HomeSectionActions } from "@/components/molecules/HomeSectionActions";
import { IIsMobileState } from "@/interfaces/IIsMobileState";

export const HomeSection = ({ isMobile }: IIsMobileState) => {
  return (
    <Chakra.Grid
      templateColumns={{ base: "1fr", md: "2fr 3fr" }}
      gap={8}
      w="full"
      h="full"
      id="home"
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

        <AnimatedTitle isMobile={isMobile}>ISAAC BOWYER</AnimatedTitle>

        <HomeSectionActions />
      </Chakra.VStack>

      {!isMobile && (
        <Chakra.VStack align="center" justify="center" mt={{ md: 0, lg: 4 }}>
          <HexagonalProfileImage />
        </Chakra.VStack>
      )}
    </Chakra.Grid>
  );
};
