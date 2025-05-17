import * as Chakra from "@chakra-ui/react";
import { ExpertiseCardContainer } from "@/components/organisms/ExpertiseCardContainer";
import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import { IIsMobileState } from "@/interfaces/IIsMobileState";
import { useState } from "react";
import { useExpertiseSection } from "@/hooks/useExpertiseSection";
import { AnimatedTitleWithHeader } from "@/components/atoms/AnimatedTitleWithHeader";

interface IProps extends IIsMobileState {
  activeCardId: number;
  items: IExpertiseArea[];
  isMobile: boolean;
  onClickExpertiseCard: (id: number) => void;
}

export const ExpertiseSection = ({ onClickExpertiseCard }: IProps) => {
  const { state, methods } = useExpertiseSection();
  const [activeCard, setActiveCard] = useState<number>(-1);

  return (
    <Chakra.VStack background="linear-gradient(to bottom right, #f9fafb, #f3f4f6);">
      <AnimatedTitleWithHeader
        title="EXPERTISE"
        header="Specialized knowledge and proven experience across multiple development domains"
      />

      <ExpertiseCardContainer
        activeCard={activeCard}
        setActiveCard={setActiveCard}
      />
    </Chakra.VStack>
  );
};
