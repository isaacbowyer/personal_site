import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IProps {
  images: string[];
}

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

const MotionSimpleGrid = motion(Chakra.SimpleGrid);
const MotionBox = motion(Chakra.Box);

export const ProjectGallerySection = ({ images }: IProps) => {
  return (
    <Chakra.VStack width="full" paddingBottom={8} id="gallery">
      <Chakra.VStack
        width="full"
        maxW="1200px"
        alignItems={{ base: "center", md: "flex-start" }}
        gap={8}
      >
        <TitleWithHeader title="GALLERY" />

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
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              boxShadow="md"
              borderRadius={8}
              overflow="hidden"
            >
              <Chakra.Image
                borderRadius={8}
                src={image}
                maxH="500px"
                objectFit="cover"
                w="full"
              />
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
