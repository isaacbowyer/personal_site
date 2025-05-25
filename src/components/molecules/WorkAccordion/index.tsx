import { IWorkExperience } from "@/interfaces/IWorkExperience";
import * as Chakra from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { WorkAccordionHeader } from "../WorkAccordionHeader";
import { WorkAccordionContent } from "../WorkAccordionContent";

interface IProps {
  workItem: IWorkExperience;
  index: number;
}

export const WorkAccordion = ({ workItem, index }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.9,
  });

  // Auto-open first accordion when scrolled into view (once)
  useEffect(() => {
    if (index === 0 && isInView) {
      setIsOpen(true);
    }
  }, [isInView, index]);

  return (
    <Chakra.VStack ref={ref} width="full" gap={0}>
      {/* HEADER */}
      <WorkAccordionHeader
        title={workItem.title}
        location={workItem.location}
        period={workItem.period}
        isOpen={isOpen}
        handleChangeIsOpen={(isOpen: boolean) => setIsOpen(isOpen)}
      />

      {/* CONTENT */}
      <WorkAccordionContent
        companyDescription={workItem.companyDescription}
        jobDescription={workItem.jobDescription}
        skills={workItem.skills}
        isOpen={isOpen}
      />
    </Chakra.VStack>
  );
};
