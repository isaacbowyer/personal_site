import * as Chakra from "@chakra-ui/react";
import { IContact } from "@/interfaces/IContact";
import { ContactCard } from "@/components/molecules/ContactCard";

interface IProps {
  items: IContact[];
  handleOnClick: (index: number) => void;
}

export const ContactCardContainer = ({ items, handleOnClick }: IProps) => {
  return (
    <Chakra.SimpleGrid
      columns={{ base: 2, sm: 4 }}
      gap={8}
      justifyItems="center"
      px={{ base: 4, md: 8 }}
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
  );
};
