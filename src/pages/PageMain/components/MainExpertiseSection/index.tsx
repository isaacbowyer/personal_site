import * as Chakra from "@chakra-ui/react";
import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import { ExpertiseCardContainer } from "@/components/organisms/ExpertiseCardContainer";
import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";

interface IProps {
  activeCard: number;
  expertiseItems: IExpertiseArea[];
  onClickExpertiseCard: (id: number) => void;
}

export const MainExpertiseSection = ({
  activeCard,
  onClickExpertiseCard,
  expertiseItems,
}: IProps) => {
  return (
    <Chakra.VStack
      width="full"
      backgroundGradient="linear-gradient(to bottom right, #f9fafb, #f3f4f6)"
      id="expertise"
    >
      <Chakra.VStack w="full" maxW="1200px" gap={8} py={8} px={4}>
        <TitleWithHeader
          title="EXPERTISE"
          header="Hands-on experience across multiple development domains with
              cutting-edge technologies"
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
