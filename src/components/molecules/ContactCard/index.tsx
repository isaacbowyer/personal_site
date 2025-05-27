import { useState } from "react";
import { CustomText } from "@/components/atoms/CustomText";
import * as Chakra from "@chakra-ui/react";
import { IconType } from "react-icons";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";

interface IProps {
  title: string;
  icon: IconType;
  handleOnClick: () => void;
}

export const ContactCard = ({ title, icon, handleOnClick }: IProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const gradient = "linear-gradient(to right, #63B3ED, #9F7AEA)";

  const bgColor = validateOptionsBasedOnBoolean(isHovered, gradient, "#77C7FF");
  const bgGradient = validateOptionsBasedOnBoolean(isHovered, gradient, "none");
  const bgClip = validateOptionsBasedOnBoolean(isHovered, "text", "border-box");
  const color = validateOptionsBasedOnBoolean(isHovered, "transparent", "#FFF");

  return (
    <Chakra.VStack
      onClick={handleOnClick}
      gap={2}
      cursor="pointer"
      alignItems="center"
      justifyItems="center"
      width="full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Chakra.Box
        bg={bgColor}
        borderRadius="full"
        p={4}
        transition="background 0.3s ease"
      >
        <Chakra.Icon as={icon} boxSize={8} color="white" />
      </Chakra.Box>

      <CustomText.Large
        fontWeight="bold"
        color={color}
        bgGradient={bgGradient}
        bgClip={bgClip}
        transition="all 0.3s ease"
      >
        {title}
      </CustomText.Large>
    </Chakra.VStack>
  );
};
