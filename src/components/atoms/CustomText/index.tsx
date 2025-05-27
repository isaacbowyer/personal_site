import { Text as ChakraText, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends TextProps {
  children: ReactNode;
  color?: string;
}

const Title = ({ children, color = "#111", ...props }: IProps) => {
  return (
    <ChakraText
      color={color}
      fontSize={{ base: "3xl", md: "7xl" }}
      fontWeight="bold"
      {...props}
    >
      {children}
    </ChakraText>
  );
};

const Header = ({ children, color = "#111", ...props }: IProps) => {
  return (
    <ChakraText fontSize="xl" color={color} {...props}>
      {children}
    </ChakraText>
  );
};

const Large = ({ children, color = "#111", ...props }: IProps) => {
  return (
    <ChakraText color={color} fontSize="lg" {...props}>
      {children}
    </ChakraText>
  );
};

const Medium = ({ children, color = "#111", ...props }: IProps) => {
  return (
    <ChakraText color={color} fontSize="md" {...props}>
      {children}
    </ChakraText>
  );
};

const Small = ({ children, color = "#111", ...props }: IProps) => {
  return (
    <ChakraText color={color} fontSize="sm" {...props}>
      {children}
    </ChakraText>
  );
};

export const CustomText = {
  Title,
  Header,
  Large,
  Medium,
  Small,
};
