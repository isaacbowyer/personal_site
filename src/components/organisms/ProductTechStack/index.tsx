import { TechTag } from "@/components/atoms/TechTag";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Chakra.Box);

interface Props {
  technologies: string[];
}

export const ProductTechStack = ({ technologies }: Props) => {
  return (
    <MotionBox
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      width="full"
    >
      <Chakra.Wrap
        gap={4}
        width="full"
        alignItems={{ base: "center", lg: "start" }}
        justifyContent={{ base: "center", lg: "start" }}
      >
        {technologies.map((tech, index) => (
          <Chakra.WrapItem key={tech}>
            <TechTag
              bgGradient={validateOptionsBasedOnBoolean(
                index % 2 === 0,
                "linear-gradient(to bottom, #667eea, #764ba2)",
                "linear-gradient(to bottom, #4facfe, #00f2fe)"
              )}
              tech={tech}
            />
          </Chakra.WrapItem>
        ))}
      </Chakra.Wrap>
    </MotionBox>
  );
};
