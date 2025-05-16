import { ExpertiseCard } from "@/components/molecules/ExpertiseCard";
import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionGrid = motion(Chakra.Grid);

interface IProps {
  items: IExpertiseArea[];
  activeCardId: number;
  handleClickCard: (id: number) => void;
}
export const ExpertiseCardContainer = ({
  items,
  activeCardId,
  handleClickCard,
}: IProps) => {
  return (
    <Chakra.Flex py={8} justifyContent="center" alignItems="center">
      <MotionGrid
        w="full"
        maxW="5xl"
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
      >
        {items.map((expertise) => (
          <ExpertiseCard
            key={expertise.id}
            title={expertise.title}
            icon={expertise.icon}
            description={expertise.description}
            color={expertise.color}
            tags={expertise.tags}
            isActive={activeCardId === expertise.id}
            bgColor={expertise.bgColor}
            onClick={() => handleClickCard(expertise.id)}
          />
        ))}
      </MotionGrid>
    </Chakra.Flex>
  );
};
