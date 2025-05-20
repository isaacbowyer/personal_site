import * as Chakra from "@chakra-ui/react";
import { HiOutlineChevronUp } from "react-icons/hi";
import { CustomText } from "../../atoms/CustomText";
import { theme } from "@/theme";
import { motion } from "framer-motion";

const MotionIcon = motion(Chakra.Icon);

interface IProps {
  title: string;
  location: string;
  period: string;
  isOpen: boolean;
  handleChangeIsOpen: (bool: boolean) => void;
}
export const WorkAccordionHeader = ({
  title,
  location,
  period,
  isOpen,
  handleChangeIsOpen,
}: IProps) => {
  return (
    <Chakra.Box
      width="full"
      backgroundColor={
        isOpen ? theme.colors.blue.vivid : theme.colors.blue.medium
      }
      borderRadius={isOpen ? "8px 8px 0 0" : "8px"}
      px={5}
      py={4}
      cursor="pointer"
      transition="background 0.3s"
      onClick={() => handleChangeIsOpen(!isOpen)}
      _hover={{ backgroundColor: theme.colors.blue.vivid }}
    >
      <Chakra.Flex
        position="relative"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        gap={3}
      >
        <CustomText.Header
          color={theme.colors.white}
          fontWeight="bold"
          flex={1}
          fontSize={{ base: "md", md: "lg" }}
          width={{ base: "90%", md: "full" }}
        >
          {title}
        </CustomText.Header>

        <Chakra.HStack
          gap={3}
          align="center"
          flexWrap="wrap"
          justify={{ base: "flex-start", md: "center" }}
        >
          <CustomText.Large color={theme.colors.white}>
            {location}
          </CustomText.Large>

          <Chakra.Badge
            px={3}
            py={1}
            backgroundColor={theme.colors.white}
            fontSize="md"
            fontWeight="bold"
            borderRadius="4px"
            color="#4a90e2"
          >
            {period}
          </Chakra.Badge>
        </Chakra.HStack>

        <Chakra.IconButton
          position={{ base: "absolute", md: "static" }}
          aria-label="Toggle Accordion"
          onClick={() => handleChangeIsOpen(!isOpen)}
          size="sm"
          variant="ghost"
          alignSelf={{ base: "flex-end", md: "center" }}
          _hover={{ bg: "none" }}
          _focus={{ boxShadow: "none", outline: "none" }}
        >
          <MotionIcon
            as={HiOutlineChevronUp}
            position={{ base: "absolute", md: "static" }}
            color={theme.colors.white}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            boxSize={6}
          />
        </Chakra.IconButton>
      </Chakra.Flex>
    </Chakra.Box>
  );
};
