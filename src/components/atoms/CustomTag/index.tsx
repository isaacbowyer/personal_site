import React from "react";
import { motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  label: string;
  bgColor?: string;
  color?: string;
}

const MotionSpan = motion.create(Chakra.Span);

export const CustomTag = ({
  label,
  bgColor = "#EDF2F7",
  color = "#4A5568",
}: IProps) => (
  <MotionSpan
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    paddingX={4}
    paddingY={1}
    marginRight={1}
    marginBottom={1}
    backgroundColor={bgColor}
    color={color}
    rounded="full"
    fontSize="sm"
  >
    {label}
  </MotionSpan>
);
