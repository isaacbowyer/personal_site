import { CustomText } from "@/components/atoms/CustomText";
import { ProductTechStack } from "@/components/organisms/ProductTechStack";
import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiCode } from "react-icons/bi";

interface IProps {
  overview: string;
  technologies: string[];
}

const MotionBox = motion.create(Chakra.Box);

export const ProjectOverviewSection = ({ overview, technologies }: IProps) => {
  return (
    <Chakra.VStack
      width="full"
      backgroundGradient="linear-gradient(to bottom right, #f9fafb, #f3f4f6)"
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
        background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(102,126,234,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');`,
      }}
    >
      <Chakra.VStack id="overview" w="full" maxW="1200px" gap={8}>
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
              OVERVIEW
            </Chakra.Text>

            <Chakra.Box
              w="80px"
              h="4px"
              bgGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
              borderRadius="full"
            />
          </Chakra.VStack>
        </MotionBox>
        <Chakra.HStack
          bg="white"
          opacity={1}
          p={8}
          rounded="lg"
          borderX="4px solid"
          borderColor="blue.400"
          mb={6}
          width="full"
          zIndex={1}
        >
          <Chakra.Text fontSize="xl" whiteSpace="pre-line">
            {overview}
          </Chakra.Text>
        </Chakra.HStack>

        <Chakra.HStack
          gap={2}
          textAlign={{ base: "center", md: "start" }}
          align={"center"}
          justifyContent={{ base: "center", md: "start" }}
          w="full"
        >
          <BiCode size={24} className="text-gray-600" />
          <CustomText.Header fontWeight="bold">
            Technologies & Tools
          </CustomText.Header>
        </Chakra.HStack>

        <ProductTechStack technologies={technologies} />
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
