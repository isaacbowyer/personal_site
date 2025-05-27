import * as Chakra from "@chakra-ui/react";
import { CustomTag } from "@/components/atoms/CustomTag";
import { motion } from "framer-motion";

interface IProps {
  tags: string[];
}

const MotionBox = motion.create(Chakra.Box);

export const ExpertiseCardTagContainer = ({ tags }: IProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      marginTop={4}
      width="full"
    >
      <Chakra.Grid
        gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={2}
      >
        {tags.map((tag, index) => (
          <CustomTag key={index} label={tag} />
        ))}
      </Chakra.Grid>
    </MotionBox>
  );
};
