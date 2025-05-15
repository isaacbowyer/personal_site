import { IColor } from "@/interfaces/IColor";
import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  color?: IColor;
  fontSize?: string;
}

const MotionTitle = motion(Chakra.Text);

export const AnimatedTitle = ({
  children,
  color = "black",
  fontSize = "7xl",
}: IProps) => {
  return (
    <MotionTitle
      color={theme.colors[color]}
      fontSize={fontSize}
      fontFamily="Comic Sans MS, cursive"
      letterSpacing="6px"
      fontWeight="bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </MotionTitle>
  );
};
