import { IColor } from "@/interfaces/IColor";
import { theme } from "@/theme";
import { Text as ChakraText, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends TextProps {
  children: ReactNode;
  color?: IColor;
}

const Header = ({ children, color = "black", ...props }: IProps) => {
  return (
    <ChakraText
      color={theme.colors[color]}
      fontWeight="bold"
      fontSize="2xl"
      {...props}
    >
      {children}
    </ChakraText>
  );
};

const SubHeader = ({ children, color = "black", ...props }: IProps) => {
  return (
    <ChakraText
      color={theme.colors[color]}
      fontWeight="bold"
      fontSize="xl"
      {...props}
    >
      {children}
    </ChakraText>
  );
};

const Large = ({ children, color = "black", ...props }: IProps) => {
  return (
    <ChakraText color={theme.colors[color]} fontSize="lg" {...props}>
      {children}
    </ChakraText>
  );
};

export const CustomText = {
  Large,
  Header,
  SubHeader,
};
