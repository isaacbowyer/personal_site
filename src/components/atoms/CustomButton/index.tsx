import { theme } from "@/theme";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IButton extends ButtonProps {
  children: ReactNode;
  backGroundColor?: string;
  textColor?: string;
}

export const Solid = ({
  children,
  backGroundColor = theme.colors.blue.light,
  textColor = theme.colors.black,
  ...props
}: IButton) => {
  return (
    <ChakraButton
      borderRadius="20px"
      color={textColor}
      size="lg"
      fontWeight="regular"
      bg={backGroundColor}
      py="6"
      px="10"
      style={{ transition: "all 0.5s ease" }}
      _hover={{
        bg: theme.colors.blue.vivid,
        color: theme.colors.white,
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export const CustomButton = {
  Solid,
};
