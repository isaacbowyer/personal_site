import { useState } from "react";
import { CustomText } from "@/components/atoms/CustomText";
import * as Chakra from "@chakra-ui/react";
import { IconType } from "react-icons";
import { getContactCardStyles } from "@/utils/getContactCardStyles";

interface IProps {
  title: string;
  icon: IconType;
  handleOnClick: () => void;
}

export const ContactCard = ({ title, icon, handleOnClick }: IProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = getContactCardStyles(isHovered);

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
        bg={styles.bgColor}
        borderRadius="full"
        p={4}
        transition="all 0.3s ease"
      >
        <Chakra.Icon as={icon} boxSize={8} color="white" />
      </Chakra.Box>

      <CustomText.Large
        fontWeight="bold"
        color={styles.color}
        bgGradient={styles.bgGradient}
        bgClip={styles.bgClip}
        transition="all 0.3s ease"
      >
        {title}
      </CustomText.Large>
    </Chakra.VStack>
  );
};
