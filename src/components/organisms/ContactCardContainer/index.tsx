import * as Chakra from "@chakra-ui/react";
import { IContact } from "@/interfaces/IContact";
import { ContactCard } from "@/components/molecules/ContactCard";

interface IProps {
  items: IContact[];
  handleOnClick: (index: number) => void;
}

export const ContactCardContainer = ({ items, handleOnClick }: IProps) => {
  return (
    <Chakra.HStack
      width="full"
      height="full"
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Chakra.SimpleGrid
        justifyContent={{ base: "center", md: "flex-start" }}
        columns={{ base: 2, md: 4 }}
        gap={10}
      >
        {items.map((item, index) => (
          <ContactCard
            key={index}
            icon={item.icon}
            title={item.title}
            handleOnClick={() => handleOnClick(index)}
          />
        ))}
      </Chakra.SimpleGrid>
    </Chakra.HStack>
  );
};
