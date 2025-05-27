import * as Chakra from "@chakra-ui/react";
import NextLink from "next/link";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";

interface IProps {
  href: string;
  label: string;
  color?: string;
  hoverColor?: string;
  fontWeight?: string;
  shouldTransform?: boolean;
  hasPointer?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const CustomNavLink = ({
  href,
  label,
  color = "#111",
  hoverColor = "#228BE6",
  fontWeight = "bold",
  hasPointer = true,
  onMouseEnter,
  onMouseLeave,
}: IProps) => {
  return (
    <Chakra.Link
      as={NextLink}
      href={href}
      _focus={{ boxShadow: "none", outline: "none" }}
      _hover={{
        textDecoration: "none",
        cursor: validateOptionsBasedOnBoolean(hasPointer, "pointer", "default"),
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Chakra.Text
        letterSpacing="0.5px"
        lineHeight="1.25"
        fontWeight={fontWeight}
        fontSize="2xl"
        color={color}
        _hover={{
          color: hoverColor,
          transform: "translateY(-5px)",
        }}
        transition="all 0.5s ease"
      >
        {label}
      </Chakra.Text>
    </Chakra.Link>
  );
};
