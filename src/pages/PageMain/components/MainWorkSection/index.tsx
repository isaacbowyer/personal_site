import * as Chakra from "@chakra-ui/react";
import { IWorkExperience } from "@/interfaces/IWorkExperience";
import { WorkItemsContainer } from "@/components/organisms/WorkItemsContainer";
import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";

interface IProps {
  experienceItems: IWorkExperience[];
}

export const MainWorkSection = ({ experienceItems }: IProps) => {
  return (
    <Chakra.VStack
      width="full"
      backgroundGradient="linear-gradient(to bottom right, #f9fafb, #f3f4f6)"
      id="work"
      py={8}
      px={4}
    >
      <Chakra.VStack w="full" maxW="1200px" gap={8} mb={8}>
        <TitleWithHeader
          title="WORK"
          subTitle={{ color: "#111", title: "EXPERIENCE" }}
        />

        <WorkItemsContainer items={experienceItems} />
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
