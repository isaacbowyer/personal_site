import { CustomAvatar } from "@/components/atoms/CustomAvatar";
import { theme } from "@/theme";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Chakra.Box);

interface IProps {
  src?: string;
  size?: number;
}

export const ProfileAvatar = ({
  src = "images/profile.png",
  size = 130,
}: IProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Chakra.Center
      marginTop="20px"
      position="relative"
      w={`${size}px`}
      h={`${size}px`}
      onMouseEnter={(e) => {
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
      }}
    >
      <CustomAvatar size={size} src={src} />

      <MotionBox
        position="absolute"
        top={-4}
        left="20%"
        right="20%"
        height="14px"
        borderTop="5px solid"
        borderColor={validateOptionsBasedOnBoolean(
          isHovered,
          theme.colors.dark_blue,
          theme.colors.blue
        )}
        borderRadius="60px 60px 0 0"
        pointerEvents="none"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <MotionBox
        position="absolute"
        bottom={-4}
        left="20%"
        right="20%"
        height="14px"
        borderBottom="5px solid"
        borderColor={validateOptionsBasedOnBoolean(
          isHovered,
          theme.colors.dark_blue,
          theme.colors.blue
        )}
        borderRadius="0 0 60px 60px"
        pointerEvents="none"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      />
    </Chakra.Center>
  );
};
