import * as Chakra from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const floatAround = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(30px, -30px) rotate(90deg);
  }
  50% {
    transform: translate(0, -60px) rotate(180deg);
  }
  75% {
    transform: translate(-30px, -30px) rotate(270deg);
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
  }
`;

export const FloatingCirclesBackground = () => {
  return (
    <>
      <Chakra.Box
        position="absolute"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
        width="80px"
        height="80px"
        top="20%"
        left="10%"
        animation={`${floatAround} 15s linear infinite`}
        animationDelay="0s"
      />

      <Chakra.Box
        position="absolute"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
        width="120px"
        height="120px"
        top={{ base: "80%", lg: "60%" }}
        right="15%"
        animation={`${floatAround} 15s linear infinite`}
        animationDelay="-5s"
      />
    </>
  );
};
