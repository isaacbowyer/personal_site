import { ExpertiseCard } from "@/components/molecules/ExpertiseCard";
import { motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react";
import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
interface IProps {
  activeCard: number;
  handleClickCard: (index: number) => void;
  items: IExpertiseArea[];
}

const MotionGrid = motion(Chakra.Grid);

export const ExpertiseCardContainer = ({
  activeCard,
  handleClickCard,
  items,
}: IProps) => {
  return (
    <Chakra.VStack
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      padding="2rem 1rem"
      overflow="visible"
    >
      <MotionGrid
        width="100%"
        maxWidth="1280px"
        gap={4}
        position="relative"
        overflow="visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      >
        {items.map((expertise, index) => {
          return (
            <ExpertiseCard
              key={index}
              id={expertise.id}
              title={expertise.title}
              icon={expertise.icon}
              description={expertise.description}
              bgColor={expertise.backgroundColor}
              borderColor={expertise.borderColor}
              isActive={activeCard === expertise.id}
              tags={expertise.tags}
              onClick={() => handleClickCard(expertise.id)}
            />
          );
        })}
      </MotionGrid>
    </Chakra.VStack>
  );
};
