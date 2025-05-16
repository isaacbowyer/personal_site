import * as Chakra from "@chakra-ui/react";
import NextLink from "next/link";
import { theme } from "@/theme";
import { CustomText } from "../CustomText";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";

interface IProps {
  href: string;
  label: string;
  color?: string;
  hoverColor?: string;
  fontWeight?: string;
  hasImage?: boolean;
  shouldTransform?: boolean;
  hasPointer?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const CustomNavLink = ({
  href,
  label,
  color = theme.colors.black,
  hoverColor = theme.colors.blue.vivid,
  fontWeight = "bold",
  hasImage = false,
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
      <Chakra.HStack gap={1}>
        {hasImage && (
          <Chakra.Image
            src="/images/home.svg"
            width="45px"
            height="60px"
            mr="2px"
          />
        )}
        <Chakra.Text
          letterSpacing="0.5px"
          lineHeight="1.25"
          fontWeight={fontWeight}
          fontSize="2xl"
          color={color}
          _hover={{
            color: hoverColor,
            transform: hasImage ? "" : "translateY(-5px)",
          }}
          transition="all 0.5s ease"
        >
          {label}
        </Chakra.Text>
      </Chakra.HStack>
    </Chakra.Link>
  );
};
