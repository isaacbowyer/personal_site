import { motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react";

const MotionSimpleGrid = motion.create(Chakra.SimpleGrid);
const MotionBox = motion.create(Chakra.Box);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

interface IProps {
  images: string[];
}

export const ProjectImagesContainer = ({ images }: IProps) => {
  return (
    <MotionSimpleGrid
      minChildWidth="300px"
      gap={8}
      w="full"
      alignItems="start"
      justifyItems={{ base: "center", md: "start" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {images.map((image, index) => (
        <MotionBox
          key={index}
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          boxShadow="md"
          borderRadius={8}
          position="relative"
        >
          <Chakra.Image
            src={image}
            borderRadius={8}
            maxH="500px"
            objectFit="cover"
            w="full"
            zIndex={0}
          />
        </MotionBox>
      ))}
    </MotionSimpleGrid>
  );
};
