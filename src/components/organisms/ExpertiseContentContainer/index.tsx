import { CustomText } from "@/components/atoms/CustomText";
import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Chakra.Box);

interface IProps {
  title: string;
  description: string;
}
export const ExpertiseContentContainer = ({ title, description }: IProps) => {
  return (
    <>
      <MotionBox>
        <CustomText.Large
          mb={2}
          fontWeight="bold"
          color={theme.colors.gray.dark}
        >
          {title}
        </CustomText.Large>
      </MotionBox>

      <MotionBox>
        <CustomText.Medium color={theme.colors.gray.medium}>
          {description}
        </CustomText.Medium>
      </MotionBox>
    </>
  );
};
