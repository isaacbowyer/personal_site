import * as Chakra from "@chakra-ui/react";
import { CustomTypeWriter } from "@/components/molecules/CustomTypeWriter";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { DOWNLOAD } from "@/data/download";
import { RiDownload2Fill } from "react-icons/ri";
import { MobileProfileAvatar } from "@/components/molecules/MobileProfileAvatar";
import { WebProfileAvatar } from "@/components/molecules/WebProfileAvatar";
import { MobileNavBar } from "@/components/organisms/MobileNavBar";
import { WebNavBar } from "@/components/organisms/WebNavBar";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import { CodeBackground } from "@/components/molecules/CodeBackground";

const MotionBox = motion(Chakra.Box);

const spinSlow = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

export const HomeSection = () => {
  const isDrawer = Chakra.useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Chakra.VStack
      width="full"
      backgroundGradient="linear-gradient(to bottom right, #1a202c, #2d3748, #1a202c)"
      position="relative"
      px={4}
    >
      <Chakra.Box
        position="absolute"
        top="20"
        right="20"
        w="32"
        h="32"
        border="1px solid"
        borderColor="blue.500"
        transform="rotate(45deg)"
        animation={`${spinSlow} 8s linear infinite`}
        display={{ sm: "none", md: "flex" }}
      />

      <Chakra.Box
        position="absolute"
        bottom="10"
        left="5"
        w="24"
        h="24"
        border="1px solid"
        borderColor="purple.500"
        transform="rotate(12deg)"
        animation={`${bounce} 2s infinite`}
        display={{ sm: "none", md: "flex" }}
      />

      <Chakra.HStack w="full" maxW="1200px" mx="auto">
        {isDrawer ? <MobileNavBar /> : <WebNavBar />}
      </Chakra.HStack>

      <CodeBackground />

      <Chakra.Grid
        templateColumns={{ base: "1fr", md: "1fr 2fr" }}
        maxW="1200px"
        width="full"
        minH="100vh"
        id="home"
      >
        <Chakra.VStack
          align={{ base: "center", md: "flex-start" }}
          justifyContent="center"
          gap={16}
          width="full"
        >
          <Chakra.VStack display={{ base: "flex", md: "none" }}>
            <MobileProfileAvatar />
          </Chakra.VStack>

          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Chakra.VStack
              gap={4}
              textAlign={{ base: "center", md: "start" }}
              w="full"
              justify="flex-start"
              align="flex-start"
            >
              <Chakra.Text
                fontSize={{
                  base: "4xl",
                  sm: "5xl",
                  md: "6xl",
                  lg: "7xl",
                }}
                fontWeight="bold"
                color="white"
                lineHeight="1"
                fontFamily="sans-serif"
                letterSpacing="6px"
              >
                ISAAC
                <br />
                <Chakra.Text
                  as="span"
                  backgroundGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
                  bgClip="text"
                  fontSize="6xl"
                  fontWeight="extrabold"
                  fontFamily="sans-serif"
                  letterSpacing="6px"
                >
                  BOWYER
                </Chakra.Text>
              </Chakra.Text>
            </Chakra.VStack>
          </MotionBox>

          <CustomTypeWriter
            staticLabel="I'm a"
            animatedWords={[
              "Software Engineer",
              "Fullstack Web Developer",
              "Mobile App Developer",
            ]}
          />

          <ButtonLink
            href={DOWNLOAD.cv}
            label={"Download CV"}
            isDownload={true}
            icon={<RiDownload2Fill />}
          />
        </Chakra.VStack>

        <Chakra.VStack
          display={{ base: "none", md: "flex" }}
          align="center"
          justify="center"
        >
          <WebProfileAvatar />
        </Chakra.VStack>
      </Chakra.Grid>
    </Chakra.VStack>
  );
};
