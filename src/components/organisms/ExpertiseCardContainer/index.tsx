import * as Chakra from "@chakra-ui/react";
import { ExpertiseCard } from "@/components/molecules/ExpertiseCard";
import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import { motion } from "framer-motion";

interface IProps {
  activeCard: number;
  handleClickCard: (index: number) => void;
  items: IExpertiseArea[];
}

const MotionGrid = motion.create(Chakra.Grid);

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.2,
      delayChildren: 0.1,
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
      overflow="visible"
    >
      <MotionGrid
        layout
        width="100%"
        maxWidth="1200px"
        gap={8}
        position="relative"
        overflow="visible"
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {items.map((expertise) => (
          <ExpertiseCard
            key={expertise.id}
            id={expertise.id}
            title={expertise.title}
            icon={<expertise.icon color="#FFF" size="30" />}
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
