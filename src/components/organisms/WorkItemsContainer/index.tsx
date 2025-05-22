import { WorkAccordion } from "@/components/molecules/WorkAccordion";
import { IWorkExperience } from "@/interfaces/IWorkExperience";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  items: IWorkExperience[];
}

export const WorkItemsContainer = ({ items }: IProps) => {
  return (
    <Chakra.VStack width="full" gap={8}>
      {items.map((item, index) => (
        <WorkAccordion key={item.title} workItem={item} index={index} />
      ))}
    </Chakra.VStack>
  );
};
