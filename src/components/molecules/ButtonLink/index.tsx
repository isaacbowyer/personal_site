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
      <Chakra.Button
        pt="4"
        size="lg"
        backgroundGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
        _hover={{
          bgGradient: "linear-gradient(to right, #3182CE, #805AD5)",
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
