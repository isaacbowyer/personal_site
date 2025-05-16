import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionTag = motion(Chakra.Box);

interface IProps {
  label: string;
}
export const CustomTag = ({ label }: IProps) => {
  return (
    <MotionTag
      px={3}
      py={1}
      bg={theme.colors.gray.light}
      rounded="full"
      fontSize="sm"
      color={theme.colors.gray.medium}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {label}
    </MotionTag>
  );
};
