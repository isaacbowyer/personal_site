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
    <Chakra.Box
      position="relative"
      overflow="hidden"
      width="full"
      bg="gray.50"
      py={{ base: 20, md: 24 }}
      minH={{ base: "600px", md: "700px" }}
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        bg: "blue.500",
        clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)",
        opacity: 0.1,
        zIndex: 0,
      }}
    >
      <Chakra.Grid
        templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
        gap={8}
        maxW="1200px"
        mx="auto"
        px={4}
        position="relative"
        zIndex={1}
      >
        <Chakra.VStack
          align={{ base: "center", md: "flex-start" }}
          gap={{ base: 16, md: 24 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <TitleWithHeader title={title} header={description} />
          <ButtonLink href="#gallery" label="View Project Images" />
        </Chakra.VStack>

        <Chakra.VStack
          display={{ base: "none", lg: "flex" }}
          align="center"
          justify="center"
        >
          <Chakra.Image
            src={featuredImageUrl}
            maxH="800px"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Chakra.VStack>
      </Chakra.Grid>
    </Chakra.Box>
  );
};
