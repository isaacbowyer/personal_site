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
      w="100vw"
      h="100vh"
      background={theme.colors.white}
      alignItems="start"
      paddingX="24"
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
      <WebNavBar />
      {main}
    </Chakra.VStack>
  );
};
