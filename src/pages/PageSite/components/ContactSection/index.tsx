import * as Chakra from "@chakra-ui/react";
import { AnimatedTitleWithHeader } from "@/components/molecules/AnimatedTitleWithHeader";
import { IContact } from "@/interfaces/IContact";
import { ContactCardContainer } from "@/components/organisms/ContactCardContainer";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import { ParticleBackground } from "@/components/molecules/ParticleBackground";

interface IProps {
  contactItems: IContact[];
  handleOnClick: (index: number) => void;
}
const MotionBox = motion(Chakra.Box);

export const ContactSection = ({ contactItems, handleOnClick }: IProps) => {
  return (
    <Chakra.VStack
      w="full"
      backgroundGradient="linear-gradient(to bottom right, #1a202c, #2d3748, #1a202c)"
      position="relative"
      py={8}
      px={4}
    >
      <ParticleBackground />
      <Chakra.VStack w="full" maxW="1200px" gap={8} mb={8}>
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
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="extrabold"
              fontFamily="sans-serif"
              letterSpacing="6px"
            >
              CONTACT
            </Chakra.Text>

            <Chakra.Box
              w="80px"
              h="4px"
              bgGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
              borderRadius="full"
            />
          </Chakra.VStack>
        </MotionBox>

        <ContactCardContainer
          items={contactItems}
          handleOnClick={handleOnClick}
        />
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
