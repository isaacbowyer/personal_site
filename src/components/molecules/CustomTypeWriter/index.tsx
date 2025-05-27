import * as Chakra from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

interface IProps {
  staticLabel: string;
  animatedWords: string[];
}

export const CustomTypeWriter = ({ staticLabel, animatedWords }: IProps) => {
  return (
    <Chakra.Text color="#E2E8F0" fontWeight="light" fontSize={"2xl"}>
      {staticLabel}{" "}
      <Chakra.Box
        as="span"
        display="inline-block"
        borderBottom="2px solid"
        color={"#228BE6"}
        borderColor={"#228BE6"}
        whiteSpace="nowrap"
      >
        <Typewriter
          words={animatedWords}
          loop
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </Chakra.Box>
    </Chakra.Text>
  );
};
