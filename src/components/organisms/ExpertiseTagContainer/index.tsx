import { CustomTag } from "@/components/atoms/CustomTag";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Chakra.Box);

interface IProps {
  tags: string[];
}

export const ExpertiseTagContainer = ({ tags }: IProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      mt={6}
    >
      <Chakra.SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={4}>
        {tags.map((tag, index) => (
          <CustomTag key={index} label={tag} />
        ))}
      </Chakra.SimpleGrid>
    </MotionBox>
  );
};
