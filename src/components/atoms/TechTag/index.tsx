import * as Chakra from "@chakra-ui/react";

interface IProps {
  bgGradient: string;
  tech: string;
}
export const TechTag = ({ bgGradient, tech }: IProps) => {
  return (
    <Chakra.Box
      bgGradient={bgGradient}
      color="white"
      px={5}
      py={3}
      borderRadius="full"
      fontWeight="semibold"
      fontSize="sm"
      overflow="hidden"
      boxShadow={"0 8px 25px rgba(102, 126, 234, 0.3)"}
      transition="all 0.3s ease"
      willChange="transform, box-shadow"
      _hover={{
        transform: "translateY(-3px)",
        boxShadow: "0 12px 35px rgba(102, 126, 234, 0.4)",
      }}
    >
      <Chakra.Text>{tech}</Chakra.Text>
    </Chakra.Box>
  );
};
