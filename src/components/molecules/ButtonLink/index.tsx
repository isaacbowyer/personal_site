import { CustomButton } from "@/components/atoms/CustomButton";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  href: string;
  label: string;
  icon?: ReactNode;
  isDownload?: boolean;
}

const MotionBox = motion(Chakra.Box);

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
      <CustomButton.Solid variant="solid" fontWeight="bold">
        {label} {icon && icon}
      </CustomButton.Solid>
    </Chakra.Link>
  );
};
