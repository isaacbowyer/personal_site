import * as Chakra from "@chakra-ui/react";
import { HexagonalProfileImage } from "@/components/molecules/HexagonalProfileImage";
import { ProfileAvatar } from "@/components/molecules/ProfileAvatar";
import { HomeSectionActions } from "@/components/molecules/HomeSectionActions";
import { IIsMobileState } from "@/interfaces/IIsMobileState";
import { AnimatedTitleWithHeader } from "@/components/molecules/AnimatedTitleWithHeader";

export const HomeSection = ({ isMobile }: IIsMobileState) => {
  return (
    <Chakra.Grid
      templateColumns={{ base: "1fr", md: "2fr 3fr" }}
      gap={8}
      width="full"
      h="full"
      marginBottom={{ base: 24, md: 20, lg: 0 }}
    >
      <Chakra.VStack
        w="full"
        h="full"
        align={{ base: "center", md: "flex-start" }}
        gap={{ base: 16, md: 24 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Chakra.VStack display={{ base: "block", md: "none" }}>
          <ProfileAvatar />
        </Chakra.VStack>

        <AnimatedTitleWithHeader title="ISAAC BOWYER" />
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
