import * as Chakra from "@chakra-ui/react";
import { TemplateContainer } from "@/components/templates/TemplateContainer";
import { CustomText } from "@/components/atoms/CustomText";
import { CustomTypeWriter } from "@/components/molecules/CustomTypeWriter";

export const Site = () => {
  return (
    <TemplateContainer
      main={
        <Chakra.VStack h="full" w="full" align="start" spaceY={10}>
          <CustomText.Title>ISAAC BOWYER</CustomText.Title>
          <CustomTypeWriter
            staticLabel="I'm a"
            animatedWords={[
              "Software Engineer",
              "Fullstack Web Developer",
              "Mobile App Developer",
            ]}
          />
        </Chakra.VStack>
      }
    />
  );
};
