import { Text as ChakraText, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends TextProps {
  children: ReactNode;
  color?: string;
}

const Title = ({ children, ...props }: IProps) => {
  return (
    <ChakraText
      as="span"
      backgroundGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
      bgClip="text"
      fontSize={{ base: "4xl", md: "6xl" }}
      fontWeight="extrabold"
      fontFamily="sans-serif"
      letterSpacing="6px"
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
