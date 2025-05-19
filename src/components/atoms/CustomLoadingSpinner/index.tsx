import * as Chakra from "@chakra-ui/react";

export const CustomLoadingSpinner = () => {
  return (
    <Chakra.Center
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      backgroundColor="rgba(255, 255, 255, 0.8)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="9999"
    >
      <Chakra.Spinner
        size="xl"
        borderWidth="6px"
        animationDuration="0.65s"
        color="blue.500"
      />
    </Chakra.Center>
  );
};
