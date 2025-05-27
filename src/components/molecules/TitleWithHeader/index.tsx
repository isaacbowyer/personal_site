import { CustomText } from "../../atoms/CustomText";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  title: string;
  header?: string;
}

export const TitleWithHeader = ({ title, header }: IProps) => {
  return (
    <Chakra.VStack
      gap={3}
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent={{ base: "center", md: "flex-start" }}
      textAlign={{ base: "center", md: "left" }}
    >
      <CustomText.Title
        fontFamily="sans-serif"
        letterSpacing="6px"
        color={"#111"}
      >
        {title}
      </CustomText.Title>

      {header && (
        <CustomText.Header width="90%" color={"#4A5568"}>
          {header}
        </CustomText.Header>
      )}
    </Chakra.VStack>
  );
};
