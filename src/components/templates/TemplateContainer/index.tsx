import { ReactNode } from "react";
import { TemplateWeb } from "../TemplateWeb";
import { useBreakpointValue } from "@chakra-ui/react";
import { TemplateMobile } from "../TemplateMobile";

interface IProps {
  main: ReactNode;
}

export const TemplateContainer = ({ main }: IProps) => {
  const isDrawer = useBreakpointValue({
    base: true,
    md: false,
  });

  if (isDrawer) return <TemplateMobile main={main} />;

  return <TemplateWeb main={main} />;
};
