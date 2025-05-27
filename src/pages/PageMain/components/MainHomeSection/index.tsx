import * as Chakra from "@chakra-ui/react";
import { CustomTypeWriter } from "@/components/molecules/CustomTypeWriter";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { DOWNLOAD } from "@/data/download";
import { RiDownload2Fill } from "react-icons/ri";
import { MobileProfileAvatar } from "@/components/molecules/MobileProfileAvatar";
import { WebProfileAvatar } from "@/components/molecules/WebProfileAvatar";
import { motion } from "framer-motion";
import { CodeBackground } from "@/components/molecules/CodeBackground";
import { SquaresBackground } from "@/components/molecules/SquaresBackground";
import { NavBarContainer } from "@/components/molecules/NavBarContainer";
import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";

export const MainHomeSection = () => {
  return (
    <Chakra.VStack
      width="full"
      backgroundGradient="linear-gradient(to bottom right, #1a202c, #2d3748, #1a202c)"
      position="relative"
      px={4}
    >
      <SquaresBackground />

      <NavBarContainer />

      <CodeBackground />

      <Chakra.Grid
        templateColumns={{ base: "1fr", md: "1fr 2fr" }}
        maxW="1200px"
        width="full"
        minH="100vh"
        id="home"
      >
        <Chakra.VStack
          align={{ base: "center", md: "flex-start" }}
          justifyContent="center"
          gap={16}
          width="full"
        >
          <Chakra.VStack display={{ base: "flex", md: "none" }}>
            <MobileProfileAvatar />
          </Chakra.VStack>

          <TitleWithHeader
            title="ISAAC"
            subTitle={{ color: "#FFF", title: "BOWYER" }}
          />

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

        <Chakra.VStack
          display={{ base: "none", md: "flex" }}
          align="center"
          justify="center"
        >
          <WebProfileAvatar />
        </Chakra.VStack>
      </Chakra.Grid>
    </Chakra.VStack>
  );
};
