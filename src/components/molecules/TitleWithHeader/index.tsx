import { motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react";
import { CustomText } from "@/components/atoms/CustomText";

const MotionBox = motion.create(Chakra.Box);

interface ISubTitle {
  color: string;
  title: string;
}
interface IProps {
  title: string;
  subTitle?: ISubTitle;
  header?: string;
  headerColor?: string;
}

export const TitleWithHeader = ({
  title,
  subTitle,
  header,
  headerColor = "#4A5568",
}: IProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
      w="full"
    >
      <Chakra.VStack
        textAlign={{ base: "center", md: "start" }}
        align={{ base: "center", md: "start" }}
        justifyContent={{ base: "center", md: "start" }}
        width="full"
        gap={2}
      >
        {subTitle ? (
          <Chakra.Text
            fontSize={{
              base: "4xl",
              sm: "5xl",
            }}
            fontWeight="bold"
            color={subTitle.color}
            lineHeight="1"
            fontFamily="sans-serif"
            letterSpacing="6px"
          >
            {title}
            <br />
            <CustomText.Title>{subTitle.title}</CustomText.Title>
          </Chakra.Text>
        ) : (
          <CustomText.Title>{title}</CustomText.Title>
        )}
        <Chakra.Box
          w="80px"
          h="4px"
          bgGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
          borderRadius="full"
        />

        {header && (
          <Chakra.Text color={headerColor} fontSize="lg">
            {header}
          </Chakra.Text>
        )}
      </Chakra.VStack>
    </MotionBox>
  );
};
