import { CustomText } from "@/components/atoms/CustomText";
import { LINKS } from "@/data/links";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import * as Chakra from "@chakra-ui/react";
import NextLink from "next/link";

interface IProps {
  isHovered: boolean;
  href?: string;
  size?: string;
  isLightMode?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const CustomLogo = ({
  isHovered,
  href = LINKS.HOME,
  size = "60px",
  isLightMode = false,
  onMouseEnter,
  onMouseLeave,
}: IProps) => {
  const color = validateOptionsBasedOnBoolean(
    isLightMode,
    " #D1D0D0",
    " #A1A1A1"
  );

  return (
    <Chakra.Link
      marginTop={1}
      as={NextLink}
      href={href}
      _focus={{ boxShadow: "none", outline: "none" }}
      _hover={{
        textDecoration: "none",
        cursor: "pointer",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Chakra.HStack gap={4}>
        <Chakra.Image
          src={"/logos/logo-light.png"}
          width={size}
          height={size}
          borderRadius={16}
        />
      </Chakra.HStack>
      <Chakra.VStack
        gap={0}
        align="start"
        justify="center"
        display={{ base: "none", md: "flex" }}
      >
        <CustomText.Medium
          fontWeight="bold"
          color={validateOptionsBasedOnBoolean(isHovered, "#77C7FF", "#FFF")}
        >
          ISAAC BOWYER
        </CustomText.Medium>
        <CustomText.Small color={color}>BSc COMPUTER SCIENCE</CustomText.Small>
      </Chakra.VStack>
    </Chakra.Link>
  );
};
