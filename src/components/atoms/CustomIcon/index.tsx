import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const MotionBox = motion.create(Chakra.Box);

interface IProps {
  bgColor: string;
  icon: ReactNode;
  color?: string;
}
export const CustomIcon = ({ bgColor, color = "#FFF", icon }: IProps) => {
  return (
    <MotionBox
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={3}
      bgGradient={bgColor}
      color={color}
      rounded="lg"
    >
      {icon}
    </MotionBox>
  );
};
