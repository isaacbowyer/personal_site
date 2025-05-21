import * as Chakra from "@chakra-ui/react";
import { CustomTypeWriter } from "../CustomTypeWriter";
import { ButtonLink } from "../ButtonLink";
import { RiDownload2Fill } from "react-icons/ri";
import { DOWNLOAD } from "@/data/download";

export const HomeSectionActions = () => {
  return (
    <Chakra.VStack
      w="full"
      align={{ base: "center", md: "flex-start" }}
      gap={{ base: 20, md: 32 }}
    >
      <CustomTypeWriter
        staticLabel="I'm a"
        animatedWords={[
          "Software Engineer",
          "Fullstack Web Developer",
          "Mobile App Developer",
        ]}
      />

      <ButtonLink
        href={DOWNLOAD.cv}
        label={"Download CV"}
        isDownload={true}
        icon={<RiDownload2Fill />}
      />
    </Chakra.VStack>
  );
};
