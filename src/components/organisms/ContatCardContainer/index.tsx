import * as Chakra from "@chakra-ui/react";
import { IContact } from "@/interfaces/IContact";
import { ContactCard } from "@/components/molecules/ContactCard";

interface IProps {
  items: IContact[];
  handleOnClick: (index: number) => void;
}

export const ContactCardContainer = ({ items, handleOnClick }: IProps) => {
  return (
    <Chakra.Box
      width="full"
      display="flex"
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Chakra.SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        gap={10}
        justifyItems={{ base: "center", md: "start" }}
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
    </Chakra.Box>
  );
};
