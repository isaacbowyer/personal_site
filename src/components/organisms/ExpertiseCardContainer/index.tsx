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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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
        gap={8}
        position="relative"
        overflow="visible"
        gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={containerVariants}
      >
        {items.map((expertise) => (
          <ExpertiseCard
            key={expertise.id}
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
        ))}
      </MotionGrid>
    </Chakra.VStack>
  );
};
