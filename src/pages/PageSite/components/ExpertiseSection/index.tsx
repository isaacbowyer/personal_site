import * as Chakra from "@chakra-ui/react";
import { AnimatedTitle } from "@/components/atoms/AnimatedTitle";
import { theme } from "@/theme";
import { ExpertiseCardContainer } from "@/components/organisms/ExpertiseCardContainer";
import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import { IIsMobileState } from "@/interfaces/IIsMobileState";

interface IProps extends IIsMobileState {
  activeCardId: number;
  items: IExpertiseArea[];
  isMobile: boolean;
  onClickExpertiseCard: (id: number) => void;
}

export const ExpertiseSection = ({
  activeCardId,
  items,
  isMobile,
  onClickExpertiseCard,
}: IProps) => {
  return (
    <Chakra.VStack
      w="full"
      h="full"
      align={{ base: "center", md: "flex-start" }}
      id="expertise"
    >
      <AnimatedTitle isMobile={isMobile}>EXPERTISE</AnimatedTitle>

      <Chakra.Text
        color={theme.colors.gray.medium}
        textAlign={{ base: "center", md: "start" }}
        fontSize={{ base: "lg", md: "xl" }}
      >
        Specialized knowledge and proven experience across multiple development
        domains
      </Chakra.Text>

      <ExpertiseCardContainer
        items={items}
        activeCardId={activeCardId}
        handleClickCard={onClickExpertiseCard}
      />
    </Chakra.VStack>
  );
};
