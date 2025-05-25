import * as Chakra from "@chakra-ui/react";
import { ExpertiseCard } from "@/components/molecules/ExpertiseCard";
import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import { theme } from "@/theme";
import { motion } from "framer-motion";

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
      staggerChildren: 0.1,
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
        as={motion.div}
        layout
        width="100%"
        maxWidth="1200px"
        gap={8}
        position="relative"
        overflow="visible"
        gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={containerVariants}
        transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
      >
        {items.map((expertise) => (
          <ExpertiseCard
            key={expertise.id}
            id={expertise.id}
            title={expertise.title}
            icon={<expertise.icon color={theme.colors.white} size="30" />}
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
