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
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent={{ base: "center", md: "flex-start" }}
      columns={{ base: 2, md: 4 }}
      gap={10}
      width="full"
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
