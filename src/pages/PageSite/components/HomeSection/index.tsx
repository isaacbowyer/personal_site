import { AnimatedTitle } from "@/components/atoms/AnimatedTitle";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { CustomTypeWriter } from "@/components/molecules/CustomTypeWriter";
import { HexagonalProfileImage } from "@/components/molecules/HexagonalProfileImage";
import { download } from "@/data/download";
import * as Chakra from "@chakra-ui/react";
import { RiDownload2Fill } from "react-icons/ri";

export const HomeSection = () => {
  const imageSize = Chakra.useBreakpointValue({
    base: 0,
    md: 450,
    lg: 650,
  });

  return (
    <Chakra.Grid
      templateColumns={{ base: "1fr", md: "2fr 3fr" }}
      overflow="hidden"
      gap={8}
      w="full"
      h="full"
    >
      <Chakra.VStack align="start" gap={{ base: "48px", md: "64px" }}>
        {!imageSize && (
          <Chakra.HStack w="full">
            <Chakra.Avatar.Root size="md">
              <Chakra.Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Chakra.Avatar.Root>
          </Chakra.HStack>
        )}

        {imageSize && 
        
        <AnimatedTitle>ISAAC BOWYER</AnimatedTitle>


;       <Chakra.VStack align="start" gap={{ base: "96px", md: "136px" }}>
          <CustomTypeWriter
            staticLabel="I'm a"
            animatedWords={[
              "Software Engineer",
              "Fullstack Web Developer",
              "Mobile App Developer",
            ]}
          />

          <ButtonLink
            href={download.cv}
            label={"Download CV"}
            isDownload={true}
            icon={<RiDownload2Fill />}
          />
        </Chakra.VStack>
      </Chakra.VStack>

      {imageSize ? (
        <Chakra.VStack align="center" justify="center">
          <HexagonalProfileImage size={imageSize} />
        </Chakra.VStack>
      ) : null}
    </Chakra.Grid>
  );
};
