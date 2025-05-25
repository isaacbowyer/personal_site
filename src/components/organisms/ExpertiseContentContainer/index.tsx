import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IProps {
  title: string;
  description: string;
}

const MotionText = motion(Chakra.Text);

export const ExpertiseContentContainer = ({ title, description }: IProps) => {
  return (
    <>
      <MotionText
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        marginBottom={1}
        color={theme.colors.black}
        width="90%"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </MotionText>

      <MotionText
        color={theme.colors.gray.medium}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        {description}
      </MotionText>
    </>
  );
};
