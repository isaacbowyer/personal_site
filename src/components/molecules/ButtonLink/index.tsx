import { CustomButton } from "@/components/atoms/CustomButton";
import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  href: string;
  label: string;
  icon?: ReactNode;
  isDownload?: boolean;
}

export const ButtonLink = ({
  href,
  label,
  icon,
  isDownload = false,
}: IProps) => {
  return (
    <Chakra.Link
      href={href}
      download={isDownload}
      _hover={{ textDecoration: "none" }}
    >
      <CustomButton.Solid
        color={theme.colors.white}
        backgroundColor={theme.colors.blue.vivid}
        variant="solid"
        fontWeight="bold"
      >
        {label} {icon && icon}
      </CustomButton.Solid>
    </Chakra.Link>
  );
};
