import * as Chakra from "@chakra-ui/react";
import { AnimatedTitleWithHeader } from "@/components/molecules/AnimatedTitleWithHeader";
import { IWorkExperience } from "@/interfaces/IWorkExperience";
import { theme } from "@/theme";
import { WorkItemsContainer } from "@/components/organisms/WorkItemsContainer";

interface IProps {
  experienceItems: IWorkExperience[];
}
export const WorkSection = ({ experienceItems }: IProps) => {
  return (
    <Chakra.VStack
      background={theme.colors.gradients.gray}
      id="work"
      width="full"
      gap={8}
      paddingBottom={8}
    >
      <AnimatedTitleWithHeader title="WORK EXPERIENCE" />

      <WorkItemsContainer items={experienceItems} />
    </Chakra.VStack>
  );
};
