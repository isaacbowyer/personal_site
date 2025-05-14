import { CustomText } from "@/components/atoms/CustomText";
import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

interface IProps {
  staticLabel: string;
  animatedWords: string[];
}

export const CustomTypeWriter = ({ staticLabel, animatedWords }: IProps) => {
  return (
    <CustomText.Header fontWeight="bold">
      <>
        {staticLabel}{" "}
        <Chakra.Box
          as="span"
          display="inline-block"
          borderBottom="2px solid"
          borderColor={theme.colors.blue}
          whiteSpace="nowrap"
        >
          <Typewriter
            words={animatedWords}
            loop
            cursor
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={3000}
          />
        </Chakra.Box>
      </>
    </CustomText.Header>
  );
};
