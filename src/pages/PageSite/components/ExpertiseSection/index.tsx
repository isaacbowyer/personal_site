import * as Chakra from "@chakra-ui/react";
import { ExpertiseCardContainer } from "@/components/organisms/ExpertiseCardContainer";
import { AnimatedTitleWithHeader } from "@/components/atoms/AnimatedTitleWithHeader";
import { IExpertiseArea } from "@/interfaces/IExpertiseArea";

interface IProps {
  activeCard: number;
  items: IExpertiseArea[];
  onClickExpertiseCard: (id: number) => void;
}

export const ExpertiseSection = ({
  activeCard,
  onClickExpertiseCard,
  items,
}: IProps) => {
  return (
    <Chakra.VStack
      overflow="visible"
      background="linear-gradient(to bottom right,#f9fafb,#f3f4f6);"
    >
      <AnimatedTitleWithHeader
        title="EXPERTISE"
        header="Specialized knowledge and proven experience across multiple development domains"
      />

      <ExpertiseCardContainer
        activeCard={activeCard}
        handleClickCard={onClickExpertiseCard}
        items={items}
      />
    </Chakra.VStack>
  );
};
