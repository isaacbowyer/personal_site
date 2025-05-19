import { theme } from "@/theme";
import { Text as ChakraText, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends TextProps {
  children: ReactNode;
  color?: string;
}

const Title = ({ children, color = theme.colors.black, ...props }: IProps) => {
  return (
    <ChakraText
      color={color}
      fontSize={{ base: "5xl", md: "7xl" }}
      fontWeight="bold"
      {...props}
    >
      {children}
    </ChakraText>
  );
};

const Header = ({ children, color = theme.colors.black, ...props }: IProps) => {
  return (
    <ChakraText fontSize="xl" color={color} {...props}>
      {children}
    </ChakraText>
  );
};

const Large = ({ children, color = theme.colors.black, ...props }: IProps) => {
  return (
    <ChakraText color={color} fontSize="lg" {...props}>
      {children}
    </ChakraText>
  );
};

const Medium = ({ children, color = theme.colors.black, ...props }: IProps) => {
  return (
    <ChakraText color={color} fontSize="md" {...props}>
      {children}
    </ChakraText>
  );
};

export const CustomText = {
  Title,
  Header,
  Large,
  Medium,
};
