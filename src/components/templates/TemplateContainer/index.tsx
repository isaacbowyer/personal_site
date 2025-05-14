import { ReactNode } from "react";
import { TemplateWeb } from "../TemplateWeb";

interface IProps {
  main: ReactNode;
}

export const TemplateContainer = ({ main }: IProps) => {
  return <TemplateWeb main={main} />;
};
