import * as Chakra from "@chakra-ui/react";
import { ExpertiseCardContainer } from "@/components/organisms/ExpertiseCardContainer";
import { AnimatedTitleWithHeader } from "@/components/molecules/AnimatedTitleWithHeader";
import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import { theme } from "@/theme";

interface IProps {
  activeCard: number;
  expertiseItems: IExpertiseArea[];
  onClickExpertiseCard: (id: number) => void;
}

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
      <Chakra.VStack w="full" maxW="1200px" gap={8} mb={8}>
        <AnimatedTitleWithHeader
          title="EXPERTISE"
          header="Hands-on experience across multiple development domains"
        />

        <ExpertiseCardContainer
          activeCard={activeCard}
          handleClickCard={onClickExpertiseCard}
          items={expertiseItems}
        />
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
