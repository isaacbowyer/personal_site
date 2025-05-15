import * as Chakra from "@chakra-ui/react";
import { TemplateContainer } from "@/components/templates/TemplateContainer";
import { CustomText } from "@/components/atoms/CustomText";
import { CustomTypeWriter } from "@/components/molecules/CustomTypeWriter";
import { RiDownload2Fill } from "react-icons/ri";
import { CustomButton } from "@/components/atoms/CustomButton";
import { download } from "@/data/download";
import { HexagonalProfileImage } from "@/components/molecules/HexagonalProfileImage";

export const Site = () => {
  const imageSize = Chakra.useBreakpointValue({
    base: 0,
    md: 450,
    lg: 650,
  });

  return (
    <TemplateContainer
      main={
        <Chakra.Grid
          templateColumns={{ base: "1fr", md: "2fr 3fr" }}
          overflow="hidden"
          gap={8}
          w="full"
          h="full"
        >
          <Chakra.VStack align="start" gap={24}>
            <CustomText.Title>ISAAC BOWYER</CustomText.Title>

            <Chakra.VStack align="start" gap={40}>
              <CustomTypeWriter
                staticLabel="I'm a"
                animatedWords={[
                  "Software Engineer",
                  "Fullstack Web Developer",
                  "Mobile App Developer",
                ]}
              />

              <Chakra.Link
                href={download.cv}
                download
                _hover={{ textDecoration: "none" }}
              >
                <CustomButton.Solid variant="solid" fontWeight="bold">
                  Download CV <RiDownload2Fill />
                </CustomButton.Solid>
              </Chakra.Link>
            </Chakra.VStack>
          </Chakra.VStack>

          {imageSize ? (
            <Chakra.VStack align="center" justify="center">
              <HexagonalProfileImage size={imageSize} />
            </Chakra.VStack>
          ) : null}
        </Chakra.Grid>
      }
    />
  );
};
