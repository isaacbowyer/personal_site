import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Chakra.Box);

interface IProps {
  title: string;
  description: string;
}

export const ProjectHomeTitle = ({ title, description }: IProps) => {
  return (
    <Chakra.VStack
      align={{ base: "center", md: "flex-start" }}
      justifyContent="center"
      textAlign={{ base: "center", md: "start" }}
      gap={8}
      width="full"
    >
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Chakra.Text
          fontSize={{ base: "4xl", lg: "7xl" }}
          fontWeight="bold"
          color="#FFF"
          lineHeight="1"
          fontFamily="sans-serif"
          letterSpacing="6px"
          bgGradient={"linear-gradient(135deg, #FFF, #E0E7FF)"}
          opacity={0.9}
          bgClip="text"
        >
          {title}
        </Chakra.Text>
      </MotionBox>

      <Chakra.Text color="#FFF" fontSize={"2xl"}>
        {description}
      </Chakra.Text>
    </Chakra.VStack>
  );
};
