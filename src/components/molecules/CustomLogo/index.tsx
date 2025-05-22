import { CustomText } from "@/components/atoms/CustomText";
import { LINKS } from "@/data/links";
import { theme } from "@/theme";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import * as Chakra from "@chakra-ui/react";
import NextLink from "next/link";

interface IProps {
  isHovered: boolean;
  href?: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const CustomLogo = ({
  isHovered,
  href = LINKS.HOME,
  onMouseEnter,
  onMouseLeave,
}: IProps) => {
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
          src={validateOptionsBasedOnBoolean(
            isHovered,
            "/logos/icon-dark.png",
            "/logos/icon-light.png"
          )}
          width="70px"
          height="70px"
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
          color={validateOptionsBasedOnBoolean(
            isHovered,
            theme.colors.blue.dark,
            theme.colors.blue.vivid
          )}
        >
          ISAAC BOWYER
        </CustomText.Medium>
        <CustomText.Small color={theme.colors.gray.medium}>
          BSc COMPUTER SCIENCE
        </CustomText.Small>
      </Chakra.VStack>
    </Chakra.Link>
  );
};
