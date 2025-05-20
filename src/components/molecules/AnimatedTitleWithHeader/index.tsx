import { motion } from "framer-motion";
import { CustomText } from "../../atoms/CustomText";
import * as Chakra from "@chakra-ui/react";
import { theme } from "@/theme";

const MotionBox = motion(Chakra.Box);

interface IProps {
  title: string;
  header?: string;
}

export const AnimatedTitleWithHeader = ({ title, header }: IProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.7,
      }}
      w="full"
    >
      <Chakra.VStack
        gap={3}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <CustomText.Title
          fontFamily="Comic Sans MS, cursive"
          letterSpacing="6px"
          color={theme.colors.black}
        >
          {title}
        </CustomText.Title>

        {header && (
          <CustomText.Header width="90%" color={theme.colors.gray.medium}>
            {header}
          </CustomText.Header>
        )}
      </Chakra.VStack>
    </MotionBox>
  );
};
