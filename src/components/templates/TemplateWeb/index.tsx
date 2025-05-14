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
      px={{ base: "8", md: "16", lg: "24" }}
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
      <Chakra.HStack w="full">
        <WebNavBar />
      </Chakra.HStack>

      <Chakra.HStack w="full" h="full">
        {main}
      </Chakra.HStack>
    </Chakra.VStack>
  );
};
