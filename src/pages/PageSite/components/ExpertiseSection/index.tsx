import * as Chakra from "@chakra-ui/react";
import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import { theme } from "@/theme";
import { motion } from "framer-motion";
import { ExpertiseCardContainer } from "@/components/organisms/ExpertiseCardContainer";

interface IProps {
  activeCard: number;
  expertiseItems: IExpertiseArea[];
  onClickExpertiseCard: (id: number) => void;
}

const MotionBox = motion(Chakra.Box);

export const ExpertiseSection = ({
  activeCard,
  onClickExpertiseCard,
  expertiseItems,
}: IProps) => {
  return (
    <Chakra.VStack
      width="full"
      background={theme.colors.gradients.gray}
      id="expertise"
    >
      <Chakra.VStack w="full" maxW="1200px" gap={8} py={8} px={4}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          w="full"
        >
          <Chakra.VStack
            textAlign={{ base: "center", md: "start" }}
            align={{ base: "center", md: "flex-start" }}
            w="full"
            gap={2}
          >
            <Chakra.Text
              as="span"
              backgroundGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
              bgClip="text"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="extrabold"
              fontFamily="sans-serif"
              letterSpacing="6px"
            >
              EXPERTISE
            </Chakra.Text>

            {/* Centered Line */}
            <Chakra.Box
              w="80px"
              h="4px"
              bgGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
              borderRadius="full"
            />

            <Chakra.Text color={theme.colors.gray.medium} fontSize="lg">
              Hands-on experience across multiple development domains with
              cutting-edge technologies
            </Chakra.Text>
          </Chakra.VStack>
        </MotionBox>

        <ExpertiseCardContainer
          activeCard={activeCard}
          handleClickCard={onClickExpertiseCard}
          items={expertiseItems}
        />
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
