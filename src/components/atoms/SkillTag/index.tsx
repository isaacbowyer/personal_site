import { ISkillCategory } from "@/interfaces/IWorkExperienceSkills";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Chakra.Box);

interface IProps {
  index: number;
  hoverBgColor: string;
  hoverColor: string;
  bgColor: string;
  color: string;
  skill: ISkillCategory;
}

export const SkillTag = ({
  index,
  hoverBgColor,
  hoverColor,
  bgColor,
  color,
  skill,
}: IProps) => {
  return (
    <MotionBox
      px={3}
      py={1}
      fontSize="sm"
      fontWeight="medium"
      borderRadius="full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "md",
        bg: hoverBgColor,
        color: hoverColor,
      }}
      bg={bgColor}
      color={color}
    >
      {skill}
    </MotionBox>
  );
};
