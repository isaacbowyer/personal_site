import * as Chakra from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBadge = motion.create(Chakra.Badge);

interface IProps {
  shouldShowAllTags: boolean;
  technologies: string[];
  handleChangeShouldShowAllTags: () => void;
}

export const ProjectTechnologiesContainer = ({
  shouldShowAllTags,
  technologies,
  handleChangeShouldShowAllTags,
}: IProps) => {
  const visibleTechs = shouldShowAllTags
    ? technologies
    : technologies.slice(0, 2);

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
        handleChangeShouldShowAllTags();
      }}
      cursor="pointer"
      pointerEvents="auto"
    >
      <AnimatePresence initial={false}>
        {visibleTechs.map((tech, i) => (
          <MotionBadge
            key={tech}
            px={3}
            py={1}
            bg="whiteAlpha.300"
            backdropFilter="blur(4px)"
            color="white"
            fontSize="xs"
            borderRadius="full"
            fontWeight="medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{
              duration: 0.3,
              delay: i * 0.05, // staggering
            }}
          >
            {tech}
          </MotionBadge>
        ))}

        {!shouldShowAllTags && technologies.length > 2 && (
          <MotionBadge
            key="more"
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: visibleTechs.length * 0.05 }}
          >
            +{technologies.length - 2} ▼
          </MotionBadge>
        )}
      </AnimatePresence>
    </Chakra.HStack>
  );
};
