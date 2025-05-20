import { theme } from "@/theme";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IButton extends ButtonProps {
  children: ReactNode;
  backGroundColor?: string;
  textColor?: string;
  borderRadius?: string;
}

export const Solid = ({
  children,
  backGroundColor = theme.colors.blue.light,
  textColor = theme.colors.black,
  borderRadius = "20px",
  ...props
}: IButton) => {
  return (
    <ChakraButton
      borderRadius={borderRadius}
      color={textColor}
      size="lg"
      fontWeight="regular"
      bg={backGroundColor}
      py="6"
      px="10"
      style={{ transition: "all 0.5s ease" }}
      _hover={{
        bg: theme.colors.blue.dark,
        color: theme.colors.white,
        borderColor: theme.colors.white,
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
