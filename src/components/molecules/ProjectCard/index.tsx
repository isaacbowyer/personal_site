import Link from "next/link";
import * as Chakra from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCardHeader } from "../ProjectCardHeader";
import { ViewProjectButton } from "../ViewProjectButton";
import { ProjectCardContent } from "../ProjectCardContent";
import { useIsMobileContext } from "@/context/useIsMobile";

const MotionVStack = motion.create(Chakra.VStack);
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
  const { isMobile } = useIsMobileContext();
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
        <ProjectCardHeader
          bgColor={backgroundColor}
          technologies={technologies}
          imageUrl={projectImageUrl}
          title={title}
          isHovered={isHovered}
          shouldShowAllTags={showAllTags}
          onClickShowTags={() => setShowAllTags(!showAllTags)}
        />

        {/* Content Section */}
        <ProjectCardContent
          isHovered={isHovered}
          isMobile={!!isMobile}
          shouldDisplayButton={!!link}
          title={title}
          description={description}
        />
      </MotionVStack>
    </Link>
  );
};
