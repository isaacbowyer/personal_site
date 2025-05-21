import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import * as Chakra from "@chakra-ui/react";
import { useState } from "react";
import { theme } from "@/theme";
import { ProjectTechnologiesContainer } from "@/components/organisms/ProjectTechnologiesContainer";

interface IProps {
  id: number;
  title: string;
  description: string;
  projectImageUrl: string;
  technologies: string[];
  link: string;
  backgroundColor: string;
}

export const ProjectCard = ({
  title,
  description,
  projectImageUrl,
  technologies,
  link,
  backgroundColor,
}: IProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);

  return (
    <Link href={link} passHref>
      <Chakra.VStack
        borderRadius="xl"
        width="100%"
        height="100%"
        maxW="400px"
        minH="520px"
        boxShadow="lg"
        overflow="hidden"
        position="relative"
        bg="white"
        cursor="pointer"
        role="group"
        tabIndex={0}
        _hover={{
          transform: isHovered ? "translateY(-8px)" : "none",
          boxShadow: "xl",
          border: `1.8px solid ${theme.colors.black}`,
        }}
        transition="all 0.3s ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowAllTags(false);
        }}
      >
        <Chakra.Box
          position="relative"
          w="full"
          bgGradient={backgroundColor}
          borderTopRadius="xl"
          overflow="hidden"
          pt={4}
          pb={4}
        >
          <ProjectTechnologiesContainer
            shouldShowAllTags={showAllTags}
            technologies={technologies}
            handleChangeShouldShowAllTags={(shouldShow: boolean) =>
              setShowAllTags(shouldShow)
            }
          />

          <Chakra.Image
            src={projectImageUrl}
            alt={title}
            objectFit="contain"
            mx="auto"
            mt={4}
            maxH="170px"
            transition="margin 0.3s ease"
          />
        </Chakra.Box>

        <Chakra.VStack
          align="start"
          p={6}
          gap={4}
          flex="1"
          position="relative"
          minH="180px"
        >
          <Chakra.Text
            fontSize="xl"
            fontWeight="bold"
            color={isHovered ? "blue.600" : "gray.800"}
            transition="color 0.2s"
          >
            {title}
          </Chakra.Text>

          <Chakra.Text fontSize="md" color="gray.600" flexGrow={1}>
            {description}
          </Chakra.Text>

          {!!link && (
            <Chakra.HStack
              as="span"
              color="blue.600"
              gap={1}
              fontWeight="bold"
              transition="opacity 0.3s ease"
              opacity={isHovered ? 1 : 0}
            >
              <Chakra.Text>View Project</Chakra.Text>
              <BsArrowRight />
            </Chakra.HStack>
          )}
        </Chakra.VStack>
      </Chakra.VStack>
    </Link>
  );
};
