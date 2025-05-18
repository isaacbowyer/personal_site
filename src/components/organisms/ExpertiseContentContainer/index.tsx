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
        fontSize={{ base: "l", md: "xl" }}
        fontWeight="bold"
        marginBottom={1}
        color={theme.colors.black}
      >
        {title}
      </MotionText>

      <MotionText color={theme.colors.gray.medium}>{description}</MotionText>
    </>
  );
};
