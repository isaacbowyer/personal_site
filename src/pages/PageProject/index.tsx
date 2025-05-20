import { TemplateContainer } from "@/components/templates/TemplateContainer";
import * as Chakra from "@chakra-ui/react";
import { useRouter } from "next/router";

export const PageProject = () => {
  const router = useRouter();
  const { projectName } = router.query;

  return (
    <TemplateContainer
      main={
        <Chakra.VStack
          w="full"
          h="full"
          gap={{ base: 20, md: 28 }}
        ></Chakra.VStack>
      }
    />
  );
};
