import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionAvatarRoot = motion.create(Chakra.Avatar.Root);

interface IProps {
  src: string;
  size?: number;
}

export const CustomAvatar = ({ src, size = 120 }: IProps) => {
  return (
    <MotionAvatarRoot
      width={`${size}px`}
      height={`${size}px`}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Chakra.Image
        src={src}
        width="100%"
        height="100%"
        objectFit="cover"
        objectPosition="50% 30%"
        borderRadius="full"
      />
    </MotionAvatarRoot>
  );
};
