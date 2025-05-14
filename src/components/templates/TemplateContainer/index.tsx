import * as Chakra from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { TemplateWeb } from "../TemplateWeb";

interface IProps {
  main: ReactNode;
}

export const TemplateContainer = ({ main }: IProps) => {
  // const isDrawer = useBreakpointValue({
  //   base: true,
  //   md: false,
  // });

  // if (isDrawer) {
  //   return <Chakra.Text>Hello</Chakra.Text>;
  // }

  return <TemplateWeb main={main} />;
};
