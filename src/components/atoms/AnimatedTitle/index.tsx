import { theme } from "@/theme";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import * as Chakra from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fontSize = validateOptionsBasedOnBoolean(isMobile, "3xl", "7xl");

  return (
    <MotionTitle
      ref={ref}
      color={color}
      fontSize={fontSize}
      fontFamily="Comic Sans MS, cursive"
      letterSpacing="6px"
      fontWeight="bold"
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </MotionTitle>
  );
};
