import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

const MotionIcon = motion.create(Chakra.Icon);

interface IProps {
  isOpen: boolean;
  handleChangeIsOpen: () => void;
}
export const WorkAccordionChevron = ({
  isOpen,
  handleChangeIsOpen,
}: IProps) => {
  return (
    <Chakra.IconButton
      position={{ base: "absolute", md: "static" }}
      aria-label="Toggle Accordion"
      onClick={handleChangeIsOpen}
      size="sm"
      variant="ghost"
      alignSelf={{ base: "flex-end", md: "center" }}
      _hover={{ bg: "none" }}
      _focus={{ boxShadow: "none", outline: "none" }}
    >
      <MotionIcon
        as={HiOutlineChevronDown}
        position={{ base: "absolute", md: "static" }}
        color={"#FFF"}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        boxSize={6}
      />
    </Chakra.IconButton>
  );
};
