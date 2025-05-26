import { ButtonLink } from "@/components/molecules/ButtonLink";
import { FloatingCircles } from "@/components/molecules/FloatingCircles";
import { MobileNavBar } from "@/components/organisms/MobileNavBar";
import { WebNavBar } from "@/components/organisms/WebNavBar";
import * as Chakra from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { BiChevronRight } from "react-icons/bi";

interface IProps {
  title: string;
  featuredImageUrl: string;
  description: string;
}

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const MotionBox = motion.create(Chakra.Box);

export const ProjectHomeSection = ({
  title,
  featuredImageUrl,
  description,
}: IProps) => {
  const isDrawer = Chakra.useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Chakra.Box
      width="full"
      backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      position="relative"
      px={4}
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`,
        backgroundRepeat: "repeat",
        animation: `${float} 20s ease-in-out infinite`,
        zIndex: 0,
      }}
    >
      <Chakra.VStack zIndex={1} position="relative">
        <Chakra.HStack w="full" maxW="1200px" mx="auto" id="nav">
          {isDrawer ? <MobileNavBar /> : <WebNavBar isLightMode />}
        </Chakra.HStack>

        <FloatingCircles />

        <Chakra.Grid
          templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
          maxW="1200px"
          width="full"
          minH="100vh"
          id="home"
        >
          <Chakra.VStack
            width="full"
            align={{ base: "center", md: "flex-start" }}
            justifyContent="center"
            gap={16}
          >
            <Chakra.VStack
              align={{ base: "center", md: "flex-start" }}
              justifyContent="center"
              textAlign={{ base: "center", md: "start" }}
              gap={8}
              width="full"
            >
              <MotionBox
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Chakra.Text
                  fontSize={{ base: "4xl", lg: "7xl" }}
                  fontWeight="bold"
                  color="#FFF"
                  lineHeight="1"
                  fontFamily="sans-serif"
                  letterSpacing="6px"
                  bgGradient={"linear-gradient(135deg, #FFF, #E0E7FF)"}
                  opacity={0.9}
                  bgClip="text"
                >
                  {title}
                </Chakra.Text>
              </MotionBox>

              <Chakra.Text color="#FFF" fontSize={"2xl"}>
                {description}
              </Chakra.Text>
            </Chakra.VStack>

            <ButtonLink
              href="#gallery"
              label="View Project Images"
              icon={<BiChevronRight />}
              bgGradient="linear-gradient(to right, #A0F0FF, #BDBDFF)"
              hoverBgGradient="linear-gradient(to right, #7DE2FF, #A3A3FF)"
            />
          </Chakra.VStack>

          <Chakra.VStack
            display={{ base: "none", lg: "flex" }}
            align="center"
            justify="center"
          >
            <Chakra.Image
              src={featuredImageUrl}
              height="550px"
              transition="transform 0.3s ease"
            />
          </Chakra.VStack>
        </Chakra.Grid>
      </Chakra.VStack>
    </Chakra.Box>
  );
};
