import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ExpertiseTagContainer } from "@/components/organisms/ExpertiseTagContainer";
import { ExpertiseContentContainer } from "@/components/organisms/ExpertiseContentContainer";
import { theme } from "@/theme";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useState } from "react";

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
const MotionIcon = motion.create(Chakra.Icon);

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

  const chevronVariants = {
    default: { rotate: 0 },
    active: { rotate: 180 },
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

      <MotionBox
        boxSize={{ base: "2rem", md: "2.5rem" }}
        position="absolute"
        top={{ base: "0.5rem", md: "0.5rem" }}
        right={{ base: "0.5rem", md: "0.5rem" }}
        zIndex={2}
        bg={bgColor}
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        cursor="pointer"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          onClick();
        }}
        boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
      >
        <MotionIcon
          as={HiOutlineChevronDown}
          color={theme.colors.white}
          variants={chevronVariants}
          animate={isActive ? "active" : "default"}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          boxSize={4}
        />
      </MotionBox>

      <Chakra.HStack alignItems="flex-start" gap={4} width="full">
        <MotionBox
          padding={4}
          borderRadius={10}
          color={theme.colors.white}
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
          <ExpertiseContentContainer title={title} description={description} />

          {isActive && <ExpertiseTagContainer tags={tags} />}
        </Chakra.VStack>
      </Chakra.HStack>
    </MotionBox>
  );
};
