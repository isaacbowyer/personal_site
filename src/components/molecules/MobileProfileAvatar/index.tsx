import { AnimatedBorder } from "@/components/atoms/AnimatedBorder";
import { CustomAvatar } from "@/components/atoms/CustomAvatar";
import { IBorderPostion } from "@/interfaces/IBorderPosition";
import * as Chakra from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
  src?: string;
  size?: number;
}

export const MobileProfileAvatar = ({
  src = "images/profile.png",
  size = 180,
}: IProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Chakra.Center
      marginTop="20px"
      position="relative"
      w={`${size}px`}
      h={`${size}px`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <CustomAvatar size={size} src={src} />

      {["top", "bottom", "left", "right"].map((pos, i) => (
        <AnimatedBorder
          key={pos}
          position={pos as IBorderPostion}
          isHovered={isHovered}
          delay={i * 0.3}
        />
      ))}
    </Chakra.Center>
  );
};
