import { MobileNavBar } from "@/components/organisms/MobileNavBar";
import { WebNavBar } from "@/components/organisms/WebNavBar";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  isLightMode?: boolean;
}
export const NavBarContainer = ({ isLightMode = false }: IProps) => {
  const isDrawer = Chakra.useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Chakra.HStack w="full" maxW="1200px" mx="auto" id="nav">
      {isDrawer ? <MobileNavBar /> : <WebNavBar isLightMode={isLightMode} />}
    </Chakra.HStack>
  );
};
