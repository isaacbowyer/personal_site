import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ExpertiseTagContainer } from "@/components/organisms/ExpertiseTagContainer";
import { ExpertiseContentContainer } from "@/components/organisms/ExpertiseContentContainer";
import { theme } from "@/theme";
import { HiOutlineChevronDown } from "react-icons/hi";

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

const MotionBox = motion(Chakra.Box);
const MotionIcon = motion(Chakra.Icon);

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
  const variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <MotionBox
      custom={id}
      variants={variants}
      layoutId={`card-container-${id}`}
      onClick={onClick}
      cursor="pointer"
      position="relative"
      overflow="visible"
      bg="white"
      p="1.5rem"
      borderRadius="0.75rem"
      style={{
        border: `2px solid ${borderColor}`,
        transition: "all 0.3s ease",
      }}
      _hover={{
        transform: "scale(1.03)",
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.15)",
      }}
      gridColumn={{ base: "auto", md: isActive ? "span 3" : "auto" }}
    >
      <MotionBox
        position="absolute"
        inset={0}
        opacity={isActive ? 0.1 : 0}
        background={bgColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
        _hover={{
          opacity: 0.05,
        }}
      />

      <Chakra.IconButton
        size={{ base: "xs", md: "sm" }}
        position="absolute"
        top={{ base: 2, md: -5 }}
        right={{ base: 2, md: -3 }}
        zIndex={2}
        bg={bgColor}
        borderRadius="full"
        _hover={{
          bg: bgColor,
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <MotionIcon
          as={HiOutlineChevronDown}
          color={theme.colors.white}
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          boxSize={4}
        />
      </Chakra.IconButton>

      <Chakra.HStack alignItems="flex-start" gap={4} width="full">
        <MotionBox
          padding={4}
          borderRadius={10}
          color={theme.colors.white}
          background={bgColor}
        >
          {icon}
        </MotionBox>

        <Chakra.VStack alignItems="flex-start" width="full">
          <ExpertiseContentContainer title={title} description={description} />

          {isActive && <ExpertiseTagContainer tags={tags} />}
        </Chakra.VStack>
      </Chakra.HStack>
    </MotionBox>
  );
};
