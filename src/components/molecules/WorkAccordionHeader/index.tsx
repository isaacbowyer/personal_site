import * as Chakra from "@chakra-ui/react";
import { CustomText } from "../../atoms/CustomText";
import { BiMapPin } from "react-icons/bi";
import { WorkAccordionChevron } from "../WorkAccordionChevron";

interface IProps {
  title: string;
  company: string;
  location: string;
  period: string;
  isOpen: boolean;
  handleChangeIsOpen: (bool: boolean) => void;
}

export const WorkAccordionHeader = ({
  title,
  company,
  location,
  period,
  isOpen,
  handleChangeIsOpen,
}: IProps) => {
  return (
    <Chakra.Box
      width="full"
      background={
        isOpen ? "linear-gradient(to right, #63B3ED, #9F7AEA)" : "#228BE6"
      }
      borderRadius={isOpen ? "8px 8px 0 0" : "8px"}
      px={5}
      py={4}
      cursor="pointer"
      transition="background 0.3s"
      onClick={() => handleChangeIsOpen(!isOpen)}
      _hover={{
        background: "linear-gradient(to right, #63B3ED, #9F7AEA)",
      }}
    >
      <Chakra.Flex
        position="relative"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        gap={3}
      >
        <CustomText.Header
          color={"#FFF"}
          fontWeight="bold"
          flex={1}
          fontSize={{ base: "md", md: "lg" }}
          width={{ base: "90%", md: "full" }}
        >
          {title} @ {company}
        </CustomText.Header>

        <Chakra.HStack
          gap={3}
          align="center"
          flexWrap="wrap"
          justify={{ base: "flex-start", md: "center" }}
        >
          <Chakra.HStack color={"#FFF"} gap={2}>
            <BiMapPin size={16} />
            <CustomText.Large color={"#FFF"}>{location}</CustomText.Large>
          </Chakra.HStack>

          <Chakra.Badge
            px={3}
            py={1}
            backgroundColor={"#FFF"}
            fontSize="md"
            fontWeight="bold"
            borderRadius="4px"
            color="#4a90e2"
          >
            {period}
          </Chakra.Badge>
        </Chakra.HStack>

        <WorkAccordionChevron
          isOpen={isOpen}
          handleChangeIsOpen={() => handleChangeIsOpen(!isOpen)}
        />
      </Chakra.Flex>
    </Chakra.Box>
  );
};
