import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ExpertiseTagContainer } from "@/components/organisms/ExpertiseTagContainer";
import { ExpertiseContentContainer } from "@/components/organisms/ExpertiseContentContainer";
import { theme } from "@/theme";

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
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <MotionBox
      custom={id}
      layoutId={`card-container-${id}`}
      initial="hidden"
      animate="visible"
      variants={variants}
      onClick={onClick}
      borderColor={borderColor}
      cursor="pointer"
      position="relative"
      overflow="visible"
      bg="white"
      border="2px solid"
      p="1.5rem"
      borderRadius="0.75rem"
      style={{
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
