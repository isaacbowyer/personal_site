import React, { useRef } from "react";
import * as Chakra from "@chakra-ui/react";
import { WebNavBar } from "@/components/organisms/WebNavBar";
import { theme } from "@/theme";
import { ScrollToTopButton } from "@/components/atoms/ScrollToTopButton";

interface IProps {
  main: React.ReactNode;
}

export const TemplateWeb = ({ main }: IProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Chakra.VStack
      ref={scrollRef}
      overflowY="auto"
      h="100vh"
      w="100vw"
      justifyContent="space-between"
      background={theme.colors.white}
      css={{
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-track": { width: "8px" },
        "&::-webkit-scrollbar-thumb": {
          background: theme.colors.blue.light,
          borderRadius: "24px",
        },
      }}
    >
      <Chakra.VStack
        maxW="1200px"
        mx="auto"
        px={4}
        w="full"
        h="full"
        justifyContent="space-between"
      >
        <Chakra.HStack w="full">
          <WebNavBar />
        </Chakra.HStack>

        <Chakra.VStack w="full" h="full" overflow="visible">
          {main}
        </Chakra.VStack>
      </Chakra.VStack>

      <ScrollToTopButton scrollContainer={scrollRef} />
    </Chakra.VStack>
  );
};
