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
            <Chakra.Box
              bgGradient={
                index % 2 === 0
                  ? "linear-gradient(to bottom, #667eea, #764ba2)"
                  : "linear-gradient(to bottom, #4facfe, #00f2fe)"
              }
              color="white"
              px={5}
              py={3}
              borderRadius="full"
              fontWeight="semibold"
              fontSize="sm"
              overflow="hidden"
              boxShadow={"0 8px 25px rgba(102, 126, 234, 0.3)"}
              transition="all 0.3s ease"
              willChange="transform, box-shadow"
              _hover={{
                transform: "translateY(-3px)",
                boxShadow: "0 12px 35px rgba(102, 126, 234, 0.4)",
              }}
            >
              <Chakra.Text>{tech}</Chakra.Text>
            </Chakra.Box>
          </Chakra.WrapItem>
        ))}
      </Chakra.Wrap>
    </MotionBox>
  );
};
