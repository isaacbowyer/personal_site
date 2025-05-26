import * as Chakra from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  href: string;
  label: string;
  bgGradient?: string;
  hoverBgGradient?: string;
  icon?: ReactNode;
  isDownload?: boolean;
}

export const ButtonLink = ({
  href,
  label,
  icon,
  bgGradient = "linear-gradient(to right, #63B3ED, #9F7AEA)",
  hoverBgGradient = "linear-gradient(to right, #3182CE, #805AD5)",
  isDownload = false,
}: IProps) => {
  return (
    <Chakra.Link
      href={href}
      download={isDownload}
      _hover={{ textDecoration: "none" }}
    >
      <Chakra.Button
        pt="4"
        size="lg"
        backgroundGradient={bgGradient}
        _hover={{
          bgGradient: hoverBgGradient,
          transform: "scale(1.05)",
        }}
        color="white"
        px="8"
        py="4"
        fontSize="lg"
        borderRadius="full"
        boxShadow="lg"
        transition="all 0.3s"
      >
        {label} {icon && icon}
      </Chakra.Button>
    </Chakra.Link>
  );
};
