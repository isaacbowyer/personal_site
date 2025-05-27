import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ExpertiseCardTagContainer } from "@/components/organisms/ExpertiseCardTagContainer";
import { ExpertiseCardContent } from "@/components/organisms/ExpertiseCardContent";
import { useState } from "react";
import { ExpertiseCardChevron } from "../ExpertiseCardChevron";

interface IProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  borderColor: string;
  isActive: boolean;
  onClick: () => void;
  tags: string[];
}

const MotionBox = motion.create(Chakra.Box);

export const ExpertiseCard = ({
  id,
  title,
  description,
  icon,
  bgColor,
  borderColor,
  isActive,
  onClick,
  tags,
}: IProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 15,
        },
      },
    },
    hover: {
      scale: 1.02,
      y: -4,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    default: { opacity: 0 },
    hover: { opacity: 0.08 },
    active: { opacity: 0.12 },
  };

  return (
    <MotionBox
      custom={id}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      layoutId={`card-${id}`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      cursor="pointer"
      position="relative"
      overflow="visible"
      bg="white"
      p="1.5rem"
      borderRadius="0.75rem"
      border={`2px solid ${isHovered || isActive ? bgColor : borderColor}`}
      boxShadow={
        isHovered || isActive
          ? "0 12px 40px -10px rgba(0, 0, 0, 0.15)"
          : "0 2px 8px rgba(0, 0, 0, 0.04)"
      }
      gridColumn={{ base: "auto", md: isActive ? "span 3" : "auto" }}
      transitionProperty="border-color, box-shadow"
      transitionDuration="0.2s"
      transitionTimingFunction="ease"
    >
      <MotionBox
        position="absolute"
        inset={0}
        background={bgColor}
        variants={backgroundVariants}
        initial="default"
        animate={isActive ? "active" : isHovered ? "hover" : "default"}
        transition={{ duration: 0.2 }}
        borderRadius="0.75rem"
      />

      <ExpertiseCardChevron
        isActive={isActive}
        bgColor={bgColor}
        onClick={onClick}
      />

      <Chakra.HStack alignItems="flex-start" gap={4} width="full">
        <MotionBox
          padding={4}
          borderRadius={10}
          color={"#FFF"}
          background={bgColor}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          boxShadow={
            isHovered || isActive ? "0 4px 16px rgba(0, 0, 0, 0.1)" : "none"
          }
        >
          {icon}
        </MotionBox>

        <Chakra.VStack alignItems="flex-start" width="full" gap={3}>
          <ExpertiseCardContent title={title} description={description} />

          {isActive && <ExpertiseCardTagContainer tags={tags} />}
        </Chakra.VStack>
      </Chakra.HStack>
    </MotionBox>
  );
};
