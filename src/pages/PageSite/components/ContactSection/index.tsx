import * as Chakra from "@chakra-ui/react";
import { AnimatedTitleWithHeader } from "@/components/molecules/AnimatedTitleWithHeader";
import { IWorkExperience } from "@/interfaces/IWorkExperience";
import { theme } from "@/theme";
import { WorkItemsContainer } from "@/components/organisms/WorkItemsContainer";

interface IProps {
  contactItems: IWorkExperience[];
}

export const ContactSection = ({ contactItems }: IProps) => {
  return (
    <Chakra.VStack w="full" id="contact" gap={8}>
      <AnimatedTitleWithHeader title="CONTACT" />

      <Chakra.Flex></Chakra.Flex>
    </Chakra.VStack>
  );
};
