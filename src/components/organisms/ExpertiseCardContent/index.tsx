import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IProps {
  title: string;
  description: string;
}

const MotionText = motion.create(Chakra.Text);

export const ExpertiseCardContent = ({ title, description }: IProps) => {
  return (
    <>
      <MotionText
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        marginBottom={1}
        color={"#111"}
        width="80%"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </MotionText>

      <MotionText
        color={"#4A5568"}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        {description}
      </MotionText>
    </>
  );
};
