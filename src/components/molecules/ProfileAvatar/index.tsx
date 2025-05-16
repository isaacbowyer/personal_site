import { AnimatedBorder } from "@/components/atoms/AnimatedBorder";
import { CustomAvatar } from "@/components/atoms/CustomAvatar";
import { IBorderPostion } from "@/interfaces/IBorderPosition";
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

  const borderActive = theme.colors.blue.light;
  const borderInactive = theme.colors.blue.vivid;

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

      {["top", "bottom", "left", "right"].map((pos, i) => (
        <AnimatedBorder
          key={pos}
          position={pos as IBorderPostion}
          isHovered={isHovered}
          activeColor={borderActive}
          inActiveColor={borderInactive}
          delay={i * 0.3}
        />
      ))}
    </Chakra.Center>
  );
};
