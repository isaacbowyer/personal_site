import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";
import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { keyframes } from "@emotion/react";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { getInitials } from "@/utils/getInitals";

const MotionBox = motion.create(Chakra.Box);

interface IProps {
  comment: string;
  clientName: string;
  clientRole: string;
}

export const ProjectClientSection = ({
  comment,
  clientName,
  clientRole,
}: IProps) => {
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
        background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><line x1="0" y1="40" x2="40" y2="0" stroke="%23bbbbbb" stroke-width="1" opacity="0.1"/></svg>')`,
      }}
    >
      <Chakra.VStack
        id="client"
        w="full"
        maxW="1200px"
        gap={8}
        position="relative"
        zIndex={1}
      >
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
              fontSize={"4xl"}
              fontWeight="bold"
              color="black"
              lineHeight="1"
              fontFamily="sans-serif"
              letterSpacing="6px"
            >
              CLIENT
              <br />
              <Chakra.Text
                as="span"
                backgroundGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
                bgClip="text"
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="extrabold"
                fontFamily="sans-serif"
                letterSpacing="6px"
              >
                TESTIMONY
              </Chakra.Text>
            </Chakra.Text>

            <Chakra.Box
              w="80px"
              h="4px"
              bgGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
              borderRadius="full"
            />
          </Chakra.VStack>
        </MotionBox>

        <TestimonialCard
          comment={comment}
          clientInitals={getInitials(clientName)}
          clientName={clientName}
          clientRole={clientRole}
        />
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
