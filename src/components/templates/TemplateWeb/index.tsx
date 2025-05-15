import * as Chakra from "@chakra-ui/react";
import { WebNavBar } from "@/components/organisms/WebNavBar";
import { theme } from "@/theme";
import { ReactNode } from "react";

interface IProps {
  main: ReactNode;
}

export const TemplateWeb = ({ main }: IProps) => {
  return (
    <Chakra.VStack
      overflowY="auto"
      h="100vh"
      w="100vw"
      justifyContent="space-between"
      background={theme.colors.white}
      css={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.colors.blue,
          borderRadius: "24px",
        },
      }}
    >
      <Chakra.VStack
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        w="full"
        h="full"
        justifyContent="space-between"
      >
        <Chakra.HStack w="full">
          <WebNavBar />
        </Chakra.HStack>

        <Chakra.HStack w="full" h="full">
          {main}
        </Chakra.HStack>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
