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

const MotionSimpleGrid = motion.create(Chakra.SimpleGrid);
const MotionBox = motion.create(Chakra.Box);

export const ProjectGallerySection = ({ images }: IProps) => {
  return (
    <Chakra.VStack
      width="full"
      backgroundGradient="linear-gradient(to bottom right, #1a202c, #2d3748, #1a202c)"
      py={8}
      px={4}
      position="relative"
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="hexgrid" width="28" height="24" patternUnits="userSpaceOnUse"><path d="M 14 2 L 22 7 L 22 17 L 14 22 L 6 17 L 6 7 Z" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23hexgrid)"/></svg>');`,
      }}
    >
      <Chakra.VStack width="full" maxW="1200px" gap={8} id="gallery">
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          width="full"
        >
          <Chakra.VStack
            gap={4}
            textAlign={{ base: "center", md: "start" }}
            align={{ base: "center", md: "start" }}
            justifyContent={{ base: "center", md: "start" }}
            w="full"
          >
            <Chakra.Text
              as="span"
              backgroundGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
              bgClip="text"
              fontSize={{ base: "4xl", md: "7xl" }}
              fontWeight="extrabold"
              fontFamily="sans-serif"
              letterSpacing="6px"
            >
              GALLERY
            </Chakra.Text>

            <Chakra.Box
              w="80px"
              h="4px"
              bgGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
              borderRadius="full"
            />
          </Chakra.VStack>
        </MotionBox>

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
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
