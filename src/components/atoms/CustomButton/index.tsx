import { IColor } from "@/interfaces/IColor";
import { theme } from "@/theme";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IButton extends ButtonProps {
  children: ReactNode;
  backGroundColor?: IColor;
  textColor?: IColor;
}

export const Solid = ({
  children,
  backGroundColor = "blue",
  textColor = "black",
  ...props
}: IButton) => {
  return (
    <ChakraButton
      borderRadius="20px"
      color={textColor}
      size="lg"
      fontWeight="regular"
      bg={theme.colors[backGroundColor]}
      py="6"
      px="10"
      style={{ transition: "0.5s" }}
      _hover={{ bg: theme.colors.gray }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export const CustomButton = {
  Solid,
};
