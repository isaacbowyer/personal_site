import * as Chakra from "@chakra-ui/react";
import { AnimatedTitleWithHeader } from "@/components/molecules/AnimatedTitleWithHeader";
import { IContact } from "@/interfaces/IContact";
import { ContactCardContainer } from "@/components/organisms/ContatCardContainer";

interface IProps {
  contactItems: IContact[];
  handleOnClick: (index: number) => void;
}

export const ContactSection = ({ contactItems, handleOnClick }: IProps) => {
  return (
    <Chakra.VStack width="full" id="contact" paddingBottom={8}>
      <Chakra.VStack w="full" maxW="1200px" gap={8}>
        <AnimatedTitleWithHeader
          title="CONTACT"
          header="I'm always open to new opportunities and collaborations. Feel free to drop me an email or connect with me on my socials."
        />

        <ContactCardContainer
          items={contactItems}
          handleOnClick={handleOnClick}
        />
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
