import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionAvatarRoot = motion(Chakra.Avatar.Root);

interface IProps {
  src?: string;
  size?: number;
}

export const CustomAvatar = ({
  src = "images/profile.png",
  size = 120,
}: IProps) => {
  return (
    <MotionAvatarRoot
      width={`${size}px`}
      height={`${size}px`}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Chakra.Avatar.Image src={src} />
    </MotionAvatarRoot>
  );
};
