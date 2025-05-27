import { ReactNode } from "react";
import * as Chakra from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

interface IProps {
  main: ReactNode;
  bgGradient: string;
  bgImage: string;
  isHomeSection?: boolean;
}

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const TemplateProductSectionContainer = ({
  main,
  bgGradient,
  bgImage,
  isHomeSection = false,
}: IProps) => {
  return (
    <Chakra.VStack
      width="full"
      backgroundGradient={bgGradient}
      position="relative"
      py={isHomeSection ? 0 : 8}
      px={4}
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: bgImage,
        backgroundRepeat: isHomeSection ? "repeat" : "no-repeat",
        animation: isHomeSection ? `${float} 20s ease-in-out infinite` : "",
      }}
    >
      {main}
    </Chakra.VStack>
  );
};
