import { MobileNavBar } from "@/components/organisms/MobileNavBar";
import { WebNavBar } from "@/components/organisms/WebNavBar";
import { useIsMobileContext } from "@/context/useIsMobile";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  isLightMode?: boolean;
}
export const NavBarContainer = ({ isLightMode = false }: IProps) => {
  const { isMobile } = useIsMobileContext();
  return (
    <Chakra.HStack w="full" maxW="1200px" mx="auto" id="nav">
      {isMobile ? <MobileNavBar /> : <WebNavBar isLightMode={isLightMode} />}
    </Chakra.HStack>
  );
};
