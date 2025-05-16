import * as Chakra from "@chakra-ui/react";

export const useIsMobile = () => {
  const isMobile = Chakra.useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
  });

  return {
    state: {
      isMobile: !!isMobile,
    },
  };
};
