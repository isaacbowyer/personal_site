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
  const isMobile = Chakra.useBreakpointValue({ base: true, md: false });

  return (
    <MotionBox
      initial={isMobile ? undefined : { opacity: 0, y: -20 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      animate={isMobile ? { opacity: 1, y: 0 } : undefined}
      viewport={{
        once: true,
        amount: 0.1,
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
          fontFamily="sans-serif"
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
