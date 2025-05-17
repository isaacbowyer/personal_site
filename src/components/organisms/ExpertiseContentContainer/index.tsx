import { CustomText } from "@/components/atoms/CustomText";
import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Chakra.Box);

interface IProps {
  title: string;
  description: string;
  index: number;
}
export const ExpertiseContentContainer = ({
  title,
  description,
  index,
}: IProps) => {
  return (
    <>
      <motion.h2
        className="expertise-card-title"
        layoutId={`card-title-${index}`}
      >
        {title}
      </motion.h2>

      <motion.p
        className="expertise-card-description"
        layoutId={`card-description-${index}`}
      >
        {description}
      </motion.p>
    </>
  );
};
