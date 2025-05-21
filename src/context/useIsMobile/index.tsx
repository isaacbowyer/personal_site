import * as Chakra from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface IIsMobileContext {
  isMobile: boolean;
}

const IsMobileContext = createContext({} as IIsMobileContext);

export const IsMobileProvider = ({ children }: { children: ReactNode }) => {
  const isMobile = Chakra.useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
  });

  return (
    <IsMobileContext.Provider value={{ isMobile: !!isMobile }}>
      {children}
    </IsMobileContext.Provider>
  );
};

export const useIsMobileContext = () => {
  return useContext(IsMobileContext);
};
