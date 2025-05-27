import { ProjectTechnologiesContainer } from "@/components/organisms/ProjectTechnologiesContainer";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IProps {
  bgColor: string;
  technologies: string[];
  imageUrl: string;
  title: string;
  isHovered: boolean;
  shouldShowAllTags: boolean;
  onClickShowTags: () => void;
}

const MotionBox = motion.create(Chakra.Box);

export const ProjectCardHeader = ({
  shouldShowAllTags,
  technologies,
  title,
  imageUrl,
  isHovered,
  bgColor,
  onClickShowTags,
}: IProps) => {
  const headerHeight = validateOptionsBasedOnBoolean(
    shouldShowAllTags,
    "320px",
    "250px"
  );

  return (
    <Chakra.Box
      position="relative"
      w="full"
      h={headerHeight}
      borderTopRadius="2xl"
      overflow="hidden"
      bgGradient={bgColor || "linear(135deg, #667eea, #764ba2)"}
      p={6}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <ProjectTechnologiesContainer
        shouldShowAllTags={shouldShowAllTags}
        technologies={technologies}
        handleChangeShouldShowAllTags={onClickShowTags}
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
            src={imageUrl}
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
  );
};
