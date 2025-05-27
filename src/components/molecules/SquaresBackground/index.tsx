import * as Chakra from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

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

export const SquaresBackground = () => {
  return (
    <>
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
      />
    </>
  );
};
