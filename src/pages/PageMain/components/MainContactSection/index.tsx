import * as Chakra from "@chakra-ui/react";
import { IContact } from "@/interfaces/IContact";
import { ContactCardContainer } from "@/components/organisms/ContactCardContainer";
import { ParticleBackground } from "@/components/molecules/ParticleBackground";
import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";

interface IProps {
  contactItems: IContact[];
  handleOnClick: (index: number) => void;
}

export const MainContactSection = ({ contactItems, handleOnClick }: IProps) => {
  return (
    <Chakra.VStack
      w="full"
      backgroundGradient="linear-gradient(to bottom right, #1a202c, #2d3748, #1a202c)"
      position="relative"
      py={8}
      px={4}
      id="contact"
      zIndex={1}
    >
      <ParticleBackground />

      <Chakra.VStack
        w="full"
        maxW="1200px"
        gap={8}
        mb={8}
        position="relative"
        zIndex={2}
      >
        <TitleWithHeader title="CONTACT" />

        <ContactCardContainer
          items={contactItems}
          handleOnClick={handleOnClick}
        />
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
