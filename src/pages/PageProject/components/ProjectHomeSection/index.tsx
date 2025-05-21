import { CustomText } from "@/components/atoms/CustomText";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  title: string;
  featuredImageUrl: string;
  description: string;
}

export const ProjectHomeSection = ({
  title,
  featuredImageUrl,
  description,
}: IProps) => {
  return (
    <Chakra.Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      gap={8}
      width="full"
      h="full"
      id="home"
    >
      <Chakra.VStack
        w="full"
        h="full"
        align={{ base: "center", md: "flex-start" }}
        gap={{ base: 16, md: 24 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <TitleWithHeader title={title.toUpperCase()} header={description} />

        <ButtonLink href="#gallery" label="View Project Images" />
      </Chakra.VStack>

      <Chakra.VStack
        display={{ base: "none", lg: "flex" }}
        align="center"
        justify="center"
        mt={4}
      >
        <Chakra.Image
          src={featuredImageUrl}
          maxH="800px"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.05)" }}
        />
      </Chakra.VStack>
    </Chakra.Grid>
  );
};
