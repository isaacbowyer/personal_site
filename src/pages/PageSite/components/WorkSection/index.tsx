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
      width="full"
      background={theme.colors.gradients.gray}
      id="work"
    >
      <Chakra.VStack w="full" maxW="1200px" gap={8} mb={8}>
        <AnimatedTitleWithHeader title="WORK EXPERIENCE" />

        <WorkItemsContainer items={experienceItems} />
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
