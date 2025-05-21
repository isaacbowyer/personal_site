import * as Chakra from "@chakra-ui/react";
import { theme } from "@/theme";
import { ReactNode, useRef } from "react";
import { MobileNavBar } from "@/components/organisms/MobileNavBar";
import { ScrollToTopButton } from "@/components/atoms/ScrollToTopButton";
import { useRouter } from "next/router";

interface IProps {
  main: ReactNode;
}

export const TemplateMobile = ({ main }: IProps) => {
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
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.colors.blue.light,
          borderRadius: "24px",
        },
      }}
    >
      <Chakra.VStack w="full" h="full" justifyContent="space-between">
        <Chakra.HStack w="full" maxW="1200px" mx="auto">
          <MobileNavBar />
        </Chakra.HStack>

        <Chakra.VStack w="full" h="full" overflow="visible">
          {main}
        </Chakra.VStack>
      </Chakra.VStack>

      <ScrollToTopButton scrollContainer={scrollRef} />
    </Chakra.VStack>
  );
};
