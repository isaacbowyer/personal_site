import { IBorderPostion } from "@/interfaces/IBorderPosition";
import { theme } from "@/theme";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Chakra.Box);

interface IProps {
  position: IBorderPostion;
  isHovered: boolean;
  activeColor?: string;
  inActiveColor?: string;
  delay?: number;
}

export const AnimatedBorder = ({
  position,
  isHovered,
  activeColor = theme.colors.blue.light,
  inActiveColor = theme.colors.white,
  delay = 0,
}: IProps) => {
  const color = validateOptionsBasedOnBoolean(
    isHovered,
    activeColor,
    inActiveColor
  );

  const commonProps = {
    position: "absolute",
    pointerEvents: "none",
    transition: {
      duration: 1,
      ease: "easeOut",
      delay,
    },
  };

  const styleMap = {
    top: {
      boxProps: {
        top: -4,
        left: "20%",
        right: "20%",
        height: "14px",
        borderTop: "5px solid",
        borderTopColor: color,
        borderRadius: "60px 60px 0 0",
      },
      motion: {
        style: { transformOrigin: "left" },
        initial: { scaleX: 0 },
        animate: { scaleX: 1 },
      },
    },
    bottom: {
      boxProps: {
        bottom: -4,
        left: "20%",
        right: "20%",
        height: "14px",
        borderBottom: "5px solid",
        borderBottomColor: color,
        borderRadius: "0 0 60px 60px",
      },
      motion: {
        style: { transformOrigin: "left" },
        initial: { scaleX: 0 },
        animate: { scaleX: 1 },
      },
    },
    left: {
      boxProps: {
        top: "20%",
        bottom: "20%",
        left: -4,
        width: "14px",
        borderLeft: "5px solid",
        borderLeftColor: color,
        borderRadius: "60px 0 0 60px",
      },
      motion: {
        style: { transformOrigin: "top" },
        initial: { scaleY: 0 },
        animate: { scaleY: 1 },
      },
    },
    right: {
      boxProps: {
        top: "20%",
        bottom: "20%",
        right: -4,
        width: "14px",
        borderRight: "5px solid",
        borderRightColor: color,
        borderRadius: "0 60px 60px 0",
      },
      motion: {
        style: { transformOrigin: "top" },
        initial: { scaleY: 0 },
        animate: { scaleY: 1 },
      },
    },
  };

  const { boxProps, motion } = styleMap[position];

  return <MotionBox {...commonProps} {...boxProps} {...motion} />;
};
