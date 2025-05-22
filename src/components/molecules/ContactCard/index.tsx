import { CustomText } from "@/components/atoms/CustomText";
import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";

import { IconType } from "react-icons";

interface IProps {
  title: string;
  icon: IconType;
  handleOnClick: () => void;
}

export const ContactCard = ({ title, icon, handleOnClick }: IProps) => {
  return (
    <Chakra.VStack
      onClick={handleOnClick}
      gap={2}
      cursor="pointer"
      alignItems="center"
      justifyItems="center"
      width="full"
    >
      <Chakra.Box
        bg={theme.colors.blue.medium}
        _hover={{
          backgroundColor: theme.colors.blue.dark,
          color: theme.colors.blue.dark,
        }}
        borderRadius="full"
        p={3}
      >
        <Chakra.Icon as={icon} boxSize={6} color={theme.colors.white} />
      </Chakra.Box>
      <CustomText.Large fontWeight="bold">{title}</CustomText.Large>
    </Chakra.VStack>
  );
};
