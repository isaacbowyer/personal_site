import { motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

const MotionBox = motion.create(Chakra.Box);

interface IProps {
  isHovered: boolean;
  isMobile: boolean;
}
export const ViewProjectButton = ({ isHovered, isMobile }: IProps) => {
  const shouldAnimate = isHovered || isMobile;

  return (
    <MotionBox
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: shouldAnimate ? 1 : 0.7,
        x: shouldAnimate ? 0 : -20,
      }}
      transition={{ duration: 0.3 }}
    >
      <Chakra.HStack
        as="span"
        color="#00D4FF"
        gap={2}
        fontWeight="700"
        fontSize="sm"
        textTransform="uppercase"
        letterSpacing="1px"
        p={3}
        borderRadius="full"
        bg="rgba(0, 212, 255, 0.1)"
        border="1px solid"
        borderColor="rgba(0, 212, 255, 0.3)"
        transition="all 0.3s ease"
        _hover={{
          bg: "rgba(0, 212, 255, 0.2)",
          borderColor: "rgba(0, 212, 255, 0.5)",
          transform: "translateX(5px)",
        }}
      >
        <Chakra.Text>View Project</Chakra.Text>
        <MotionBox
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <BsArrowRight />
        </MotionBox>
      </Chakra.HStack>
    </MotionBox>
  );
};
