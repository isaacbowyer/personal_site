import { AnimatePresence, motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react";
import { CustomText } from "@/components/atoms/CustomText";
import { IWorkExperienceSkills } from "@/interfaces/IWorkExperienceSkills";
import { BiCode } from "react-icons/bi";
import { WorkAccordionContentSkills } from "@/components/organisms/WorkAccordionContentSkills";

const MotionVStack = motion.create(Chakra.VStack);

interface IProps {
  isOpen: boolean;
  companyDescription: string;
  jobDescription: string;
  skills: IWorkExperienceSkills;
}
export const WorkAccordionContent = ({
  isOpen,
  companyDescription,
  jobDescription,
  skills,
}: IProps) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <MotionVStack
          key="accordion-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          borderBottomLeftRadius="8px"
          borderBottomRightRadius="8px"
          alignItems="start"
          width="full"
          bg={"#EDF2F7"}
          px={5}
          py={4}
          gap={8}
        >
          <Chakra.VStack width="full" gap={2}>
            <Chakra.HStack
              bg="blue.50"
              p={4}
              rounded="lg"
              borderLeftWidth="4px"
              borderLeftColor="blue.400"
              mb={6}
              width="full"
            >
              <CustomText.Large fontStyle="italic" color={"#4A5568"}>
                {companyDescription}
              </CustomText.Large>
            </Chakra.HStack>

            <CustomText.Large>{jobDescription}</CustomText.Large>
          </Chakra.VStack>

          <Chakra.VStack alignItems="flex-start" width="full" height="full">
            <Chakra.HStack gap={2} align={"center"}>
              <BiCode size={24} className="text-gray-600" />
              <CustomText.Header fontWeight="bold">
                Technologies
              </CustomText.Header>
            </Chakra.HStack>

            <WorkAccordionContentSkills skills={skills} />
          </Chakra.VStack>
        </MotionVStack>
      )}
    </AnimatePresence>
  );
};
