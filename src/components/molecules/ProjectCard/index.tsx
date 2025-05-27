import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import * as Chakra from "@chakra-ui/react";
import { useState } from "react";
import { ProjectTechnologiesContainer } from "@/components/organisms/ProjectTechnologiesContainer";
import { motion } from "framer-motion";

const MotionVStack = motion.create(Chakra.VStack);
const MotionBox = motion.create(Chakra.Box);

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

  const headerHeight = showAllTags ? "320px" : "250px";
  const isMobile = Chakra.useBreakpointValue({ base: true, sm: false });

  return (
    <Link href={link} passHref>
      <MotionVStack
        borderRadius="2xl"
        width="100%"
        height="100%"
        maxW="420px"
        minH="580px"
        position="relative"
        cursor="pointer"
        role="group"
        tabIndex={0}
        overflow="hidden"
        bg="rgba(255, 255, 255, 0.02)"
        backdropFilter="blur(20px)"
        border="1px solid"
        borderColor="rgba(255, 255, 255, 0.08)"
        style={{
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        _hover={{
          borderColor: "rgba(0, 212, 255, 0.4)",
          shadow:
            "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 50px rgba(0, 212, 255, 0.1)",
          bg: "rgba(255, 255, 255, 0.05)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowAllTags(false);
        }}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgGradient:
            "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 212, 0.1))",
          opacity: isHovered && !isMobile ? 1 : 0,
          transition: "opacity 0.4s ease",
          zIndex: -1,
          borderRadius: "2xl",
        }}
      >
        <Chakra.Box
          position="relative"
          w="full"
          h={headerHeight}
          borderTopRadius="2xl"
          overflow="hidden"
          bgGradient={backgroundColor || "linear(135deg, #667eea, #764ba2)"}
          p={6}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <ProjectTechnologiesContainer
            shouldShowAllTags={showAllTags}
            technologies={technologies}
            handleChangeShouldShowAllTags={(shouldShow: boolean) =>
              setShowAllTags(shouldShow)
            }
          />

          <Chakra.Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex={1}
          >
            <MotionBox
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Chakra.Image
                src={projectImageUrl}
                alt={title}
                objectFit="contain"
                maxH="160px"
                maxW="full"
                borderRadius="lg"
                shadow="0 8px 25px rgba(0, 0, 0, 0.3)"
                transition="all 0.3s ease"
                filter={isHovered ? "brightness(1.1)" : "brightness(1)"}
              />
            </MotionBox>
          </Chakra.Box>
        </Chakra.Box>

        {/* Content Section */}
        <Chakra.VStack
          align="start"
          p={8}
          gap={6}
          flex="1"
          position="relative"
          w="full"
        >
          <Chakra.VStack align="start" gap={3} w="full">
            <Chakra.Text
              fontSize="2xl"
              fontWeight="800"
              lineHeight={1.3}
              color={isHovered && !isMobile ? "transparent" : "white"}
              bgGradient={
                isHovered && !isMobile
                  ? "linear-gradient(to right, #00D4FF, #FF00D4)"
                  : "none"
              }
              bgClip={isHovered ? "text" : undefined}
              transition="all 0.3s ease"
            >
              {title}
            </Chakra.Text>

            <Chakra.Box
              w={isHovered && !isMobile ? "60px" : "30px"}
              h="2px"
              bg={isHovered && !isMobile ? "transparent" : "white"}
              bgGradient={
                isHovered && !isMobile
                  ? "linear-gradient(to right, #00D4FF, #FF00D4)"
                  : undefined
              }
              transition="width 0.3s ease, background 0.3s ease"
            />
          </Chakra.VStack>

          <Chakra.Text
            fontSize="md"
            color="gray.300"
            lineHeight={1.6}
            flexGrow={1}
          >
            {description}
          </Chakra.Text>

          {/* View Project Link */}
          {!!link && (
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isHovered || isMobile ? 1 : 0.7,
                x: isHovered || isMobile ? 0 : -20,
              }}
              transition={{ duration: 0.3 }}
            >
              <Chakra.HStack
                as="span"
                color="#00D4FF"
                gap={2}
                fontWeight="700"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="1px"
                p={3}
                borderRadius="full"
                bg="rgba(0, 212, 255, 0.1)"
                border="1px solid"
                borderColor="rgba(0, 212, 255, 0.3)"
                transition="all 0.3s ease"
                _hover={{
                  bg: "rgba(0, 212, 255, 0.2)",
                  borderColor: "rgba(0, 212, 255, 0.5)",
                  transform: "translateX(5px)",
                }}
              >
                <Chakra.Text>View Project</Chakra.Text>
                <MotionBox
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <BsArrowRight />
                </MotionBox>
              </Chakra.HStack>
            </MotionBox>
          )}
        </Chakra.VStack>
      </MotionVStack>
    </Link>
  );
};
