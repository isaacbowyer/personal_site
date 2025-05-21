import * as Chakra from "@chakra-ui/react";
import { HexagonalProfileImage } from "@/components/molecules/HexagonalProfileImage";
import { ProfileAvatar } from "@/components/molecules/ProfileAvatar";
import { AnimatedTitleWithHeader } from "@/components/molecules/AnimatedTitleWithHeader";
import { CustomTypeWriter } from "@/components/molecules/CustomTypeWriter";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { DOWNLOAD } from "@/data/download";
import { RiDownload2Fill } from "react-icons/ri";

export const HomeSection = () => {
  return (
    <Chakra.Grid
      templateColumns={{ base: "1fr", md: "2fr 3fr" }}
      gap={8}
      w="full"
      maxW="1200px"
      id="home"
    >
      <Chakra.VStack
        align={{ base: "center", md: "flex-start" }}
        gap={{ base: 28, sm: 24 }}
      >
        <Chakra.VStack
          align={{ base: "center", md: "flex-start" }}
          gap={16}
          width="80%"
        >
          <Chakra.VStack display={{ base: "block", md: "none" }}>
            <ProfileAvatar />
          </Chakra.VStack>

          <AnimatedTitleWithHeader title="ISAAC BOWYER" />
        </Chakra.VStack>

        <Chakra.VStack
          align={{ base: "center", md: "flex-start" }}
          gap={{ base: 28, sm: 32 }}
        >
          <CustomTypeWriter
            staticLabel="I'm a"
            animatedWords={[
              "Software Engineer",
              "Fullstack Web Developer",
              "Mobile App Developer",
            ]}
          />

          <ButtonLink
            href={DOWNLOAD.cv}
            label={"Download CV"}
            isDownload={true}
            icon={<RiDownload2Fill />}
          />
        </Chakra.VStack>
      </Chakra.VStack>

      <Chakra.VStack
        display={{ base: "none", md: "flex" }}
        align="center"
        justify="center"
        mt={{ md: 0, lg: 6 }}
      >
        <HexagonalProfileImage />
      </Chakra.VStack>
    </Chakra.Grid>
  );
};
