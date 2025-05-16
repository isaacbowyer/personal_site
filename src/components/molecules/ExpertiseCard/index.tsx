import * as Chakra from "@chakra-ui/react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { theme } from "@/theme";
import { ExpertiseTagContainer } from "@/components/organisms/ExpertiseTagContainer";
import { ExpertiseContentContainer } from "@/components/organisms/ExpertiseContentContainer";
import { CustomIcon } from "@/components/atoms/CustomIcon";

interface IProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  bgColor: string;
  isActive: boolean;
  tags: string[];
  onClick: () => void;
}

const MotionBox = motion(Chakra.Box);

export const ExpertiseCard = ({
  title,
  description,
  icon,
  color,
  bgColor,
  isActive,
  tags,
  onClick,
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
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px -15px rgba(0,0,0,0.15)",
      transition: { duration: 0.2 },
    },
  };

  const backgroundColor = isActive ? bgColor : theme.colors.white;

  return (
    <MotionBox
      layout
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={variants}
      onClick={onClick}
      position="relative"
      overflow="hidden"
      p={6}
      rounded="xl"
      cursor="pointer"
      border="2px solid"
      borderColor={color}
      bg={backgroundColor}
      transition={{ duration: 0.3, ease: "easeOut" }}
      gridColumn={isActive ? { md: "span 3" } : undefined}
    >
      <MotionBox
        position="absolute"
        inset={0}
        opacity={0}
        _groupHover={{ opacity: 0.05 }}
        animate={{ opacity: isActive ? 0.1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <Chakra.Flex align="start" gap={4}>
        <CustomIcon bgColor={color} icon={icon} />

        <Chakra.Box flex="1">
          <ExpertiseContentContainer title={title} description={description} />

          {isActive && <ExpertiseTagContainer tags={tags} />}
        </Chakra.Box>
      </Chakra.Flex>
    </MotionBox>
  );
};
