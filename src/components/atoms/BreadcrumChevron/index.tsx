import * as Chakra from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

export const BreadcrumChevron = () => {
  return (
    <Chakra.Text color="rgba(255, 255, 255, 0.5)">
      <BiChevronRight size={16} />
    </Chakra.Text>
  );
};
