import * as Chakra from "@chakra-ui/react";

interface IProps {
  shouldShowAllTags: boolean;
  technologies: string[];
  handleChangeShouldShowAllTags: (shouldShow: boolean) => void;
}

export const ProjectTechnologiesContainer = ({
  shouldShowAllTags,
  technologies,
  handleChangeShouldShowAllTags,
}: IProps) => {
  return (
    <Chakra.HStack
      position="relative"
      gap={2}
      flexWrap="wrap"
      justify="flex-end"
      zIndex={2}
      px={4}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleChangeShouldShowAllTags(!shouldShowAllTags);
      }}
      cursor="pointer"
      pointerEvents="auto"
    >
      {(shouldShowAllTags ? technologies : technologies.slice(0, 2)).map(
        (tech, i) => (
          <Chakra.Badge
            key={i}
            px={3}
            py={1}
            bg="whiteAlpha.300"
            backdropFilter="blur(4px)"
            color="white"
            fontSize="xs"
            borderRadius="full"
            fontWeight="medium"
          >
            {tech}
          </Chakra.Badge>
        )
      )}
      {!shouldShowAllTags && technologies.length > 2 && (
        <Chakra.Badge
          px={3}
          py={1}
          bg="whiteAlpha.600"
          backdropFilter="blur(4px)"
          color="white"
          fontSize="xs"
          borderRadius="full"
          fontWeight="medium"
          _hover={{ bg: "whiteAlpha.800" }}
          cursor="pointer"
        >
          +{technologies.length - 2} ▼
        </Chakra.Badge>
      )}
    </Chakra.HStack>
  );
};
