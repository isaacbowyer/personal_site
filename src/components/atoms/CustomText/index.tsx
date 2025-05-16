import { theme } from "@/theme";
import { Text as ChakraText, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends TextProps {
  children: ReactNode;
  color?: string;
}

const Header = ({ children, color = theme.colors.black, ...props }: IProps) => {
  return (
    <ChakraText color={color} fontWeight="bold" fontSize="2xl" {...props}>
      {children}
    </ChakraText>
  );
};

const SubHeader = ({
  children,
  color = theme.colors.black,
  ...props
}: IProps) => {
  return (
    <ChakraText color={color} fontWeight="bold" fontSize="xl" {...props}>
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

export const CustomText = {
  Large,
  Header,
  SubHeader,
};
