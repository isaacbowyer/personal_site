import * as Chakra from "@chakra-ui/react";

export const useHomeSection = () => {
  const imageSize = Chakra.useBreakpointValue({
    base: null,
    md: 450,
    lg: 650,
  });

  const isMobile = !!imageSize;

  return {
    state: {
      imageSize,
      isMobile,
    },
  };
};
