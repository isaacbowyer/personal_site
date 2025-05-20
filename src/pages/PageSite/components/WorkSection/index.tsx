import * as Chakra from "@chakra-ui/react";
import { AnimatedTitleWithHeader } from "@/components/molecules/AnimatedTitleWithHeader";
import { IWorkExperience } from "@/interfaces/IWorkExperience";
import { WorkAccordion } from "@/components/molecules/WorkAccordion";
import { theme } from "@/theme";
import { WorkItemsContainer } from "@/components/organisms/WorkItemsContainer";

interface IProps {
  experienceItems: IWorkExperience[];
}
export const WorkSection = ({ experienceItems }: IProps) => {
  return (
    <Chakra.VStack
      overflow="visible"
      background={theme.colors.gradients.gray}
      id="work"
      width="full"
      gap={8}
    >
      <AnimatedTitleWithHeader title="WORK EXPERIENCE" />

      <WorkItemsContainer items={experienceItems} />
    </Chakra.VStack>
  );
};
