import React from "react";
import { motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react";
import { theme } from "@/theme";

interface IProps {
  label: string;
}

const MotionSpan = motion.create(Chakra.Span);

export const CustomTag = ({ label }: IProps) => (
  <MotionSpan
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    paddingX={4}
    paddingY={1}
    marginRight={1}
    marginBottom={1}
    backgroundColor={theme.colors.gray.dim}
    color={theme.colors.gray.medium}
    rounded="full"
    fontSize="sm"
  >
    {label}
  </MotionSpan>
);
