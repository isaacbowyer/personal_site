import { theme } from "@/theme";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  color?: string;
  isMobile: boolean;
}

const MotionTitle = motion(Chakra.Text);

export const AnimatedTitle = ({
  children,
  color = theme.colors.black,
  isMobile,
}: IProps) => {
  const fontSize = validateOptionsBasedOnBoolean(isMobile, "3xl", "7xl");

  return (
    <MotionTitle
      color={color}
      fontSize={fontSize}
      fontFamily="Comic Sans MS, cursive"
      letterSpacing="6px"
      fontWeight="bold"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.7,
      }}
    >
      {children}
    </MotionTitle>
  );
};
