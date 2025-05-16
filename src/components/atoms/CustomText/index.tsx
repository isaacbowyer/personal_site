import { theme } from "@/theme";
import { Text as ChakraText, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends TextProps {
  children: ReactNode;
  color?: string;
}

const Header = ({
  children,
  color = theme.colors.gray.medium,
  ...props
}: IProps) => {
  <ChakraText
    color={color}
    textAlign={{ base: "center", md: "start" }}
    fontSize={{ base: "lg", md: "xl" }}
  >
    {children}
  </ChakraText>;
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
  Header,
  Large,
  Medium,
};
