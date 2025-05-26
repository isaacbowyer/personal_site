import * as Chakra from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) rotate(360deg);
    opacity: 0;
  }
`;

export const ParticleBackground = () => {
  return (
    <Chakra.Box
      position="absolute"
      top={0}
      left={0}
      w="100%"
      h="100%"
      pointerEvents="none"
      overflow="hidden"
      zIndex={1}
    >
      {[...Array(9)].map((_, i) => (
        <Chakra.Box
          key={i}
          position="absolute"
          w="6px"
          h="6px"
          bg="rgba(159, 122, 234, 0.8)"
          borderRadius="full"
          left={`${(i + 1) * 10}%`}
          animation={`${float} 6s ease-in-out infinite`}
          animationDelay={`${i * 0.5}s`}
        />
      ))}
    </Chakra.Box>
  );
};
