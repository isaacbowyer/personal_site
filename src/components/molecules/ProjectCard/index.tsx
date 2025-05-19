import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import * as Chakra from "@chakra-ui/react";
import { useState } from "react";
import { theme } from "@/theme";

interface IProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
  backgroundColor: string;
}

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  technologies,
  link,
  backgroundColor,
}: IProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link} passHref>
      <Chakra.VStack
        minH="490px"
        height="490px" // <-- fix height here
        borderRadius="xl"
        boxShadow="lg"
        overflow="hidden"
        position="relative"
        bg="white"
        cursor="pointer"
        role="group"
        tabIndex={0}
        border="1.5px solid"
        borderColor="gray.200"
        _hover={{
          transform: "translateY(-8px)",
          boxShadow: "xl",
          borderColor: "blue.600",
        }}
        width="100%"
        maxW="400px"
        mx="auto"
        transition="transform 0.2s, box-shadow 0.2s, border-color 0.2s"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? "translateY(-8px)" : "none",
          borderColor: isHovered ? theme.colors.black : theme.colors.gray.light,
          boxShadow: isHovered ? "xl" : "",
        }}
      >
        <Chakra.Box
          position="relative"
          w="full"
          h="240px"
          bgGradient={backgroundColor}
          borderTopRadius="xl"
          overflow="hidden"
        >
          {/* Tech badges */}
          <Chakra.HStack
            position="absolute"
            top={3}
            right={3}
            gap={2}
            flexWrap="wrap"
            justify="end"
            zIndex={2}
          >
            {technologies.slice(0, 2).map((tech, i) => (
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
            ))}
            {technologies.length > 2 && (
              <Chakra.Badge
                px={3}
                py={1}
                bg="whiteAlpha.300"
                backdropFilter="blur(4px)"
                color="white"
                fontSize="xs"
                borderRadius="full"
                fontWeight="medium"
              >
                +{technologies.length - 2}
              </Chakra.Badge>
            )}
          </Chakra.HStack>

          {/* Image */}
          <Chakra.Image
            src={imageUrl}
            alt={title}
            objectFit="contain"
            position="absolute"
            bottom={"5%"}
            left="50%"
            transform="translateX(-50%)"
            maxH="170px"
          />
        </Chakra.Box>

        {/* CONTENT */}
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
            color="gray.800"
            _hover={{ color: "blue.600" }}
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
