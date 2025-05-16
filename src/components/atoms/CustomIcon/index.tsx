import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const MotionBox = motion(Chakra.Box);

interface IProps {
  bgColor: string;
  icon: ReactNode;
  color?: string;
}
export const CustomIcon = ({
  bgColor,
  color = theme.colors.white,
  icon,
}: IProps) => {
  return (
    <MotionBox p={3} bg={bgColor} color={color} rounded="lg">
      {icon}
    </MotionBox>
  );
};
