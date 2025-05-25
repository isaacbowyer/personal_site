import { AnimatePresence, motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react";
import { CustomText } from "@/components/atoms/CustomText";
import { theme } from "@/theme";

const MotionVStack = motion(Chakra.VStack);
const MotionHStack = motion(Chakra.HStack);
const MotionBox = motion(Chakra.Box);

interface IProps {
  isOpen: boolean;
  companyDescription: string;
  jobDescription: string;
  skills: string[];
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
          bg={theme.colors.gray.dim}
          px={5}
          py={4}
          gap={8}
        >
          <Chakra.VStack alignItems="start" gap={4}>
            <CustomText.Large fontStyle="italic">
              {companyDescription}
            </CustomText.Large>

            <CustomText.Medium color={theme.colors.gray.dark}>
              {jobDescription}
            </CustomText.Medium>
          </Chakra.VStack>

          <MotionHStack
            gap={4}
            flexWrap="wrap"
            align="start"
            justify="start"
            maxW="100%"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {skills.map((skill) => (
              <MotionBox
                key={skill}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  },
                }}
              >
                <Chakra.Badge
                  px={3}
                  py={2}
                  backgroundColor={theme.colors.white}
                  border="1px solid"
                  borderColor={theme.colors.gray.dark}
                  borderRadius="16px"
                  fontSize="lg"
                  whiteSpace="nowrap"
                  cursor="default"
                  transition="all 0.3s ease-in-out"
                >
                  {skill}
                </Chakra.Badge>
              </MotionBox>
            ))}
          </MotionHStack>
        </MotionVStack>
      )}
    </AnimatePresence>
  );
};
