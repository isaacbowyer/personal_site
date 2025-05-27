import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

const MotionBox = motion.create(Chakra.Box);
const MotionIcon = motion.create(Chakra.Icon);

interface IProps {
  bgColor: string;
  isActive: boolean;
  onClick: () => void;
}

const chevronVariants = {
  default: { rotate: 0 },
  active: { rotate: 180 },
};

export const ExpertiseCardChevron = ({
  bgColor,
  isActive,
  onClick,
}: IProps) => {
  return (
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
        color={"#FFF"}
        variants={chevronVariants}
        animate={isActive ? "active" : "default"}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        boxSize={4}
      />
    </MotionBox>
  );
};
