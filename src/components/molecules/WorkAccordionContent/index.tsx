import { AnimatePresence, motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react";
import { CustomText } from "@/components/atoms/CustomText";
import { theme } from "@/theme";
import {
  ISkillCategory,
  IWorkExperienceSkills,
} from "@/interfaces/IWorkExperienceSkills";
import { BiCode } from "react-icons/bi";

const MotionVStack = motion.create(Chakra.VStack);
const MotionHStack = motion.create(Chakra.HStack);
const MotionBox = motion.create(Chakra.Box);

const skillCategoryColors = {
  frontend: {
    bg: "#E3F2FD",
    border: "#90CAF9",
    tag: {
      bg: "#BBDEFB",
      text: "#1565C0",
      hoverBg: "#1E88E5",
      hoverText: "#FFFFFF",
    },
  },
  backend: {
    bg: "#F3E8FD",
    border: "#CEBDF0",
    tag: {
      bg: "#E0D3F5",
      text: "#5E35B1",
      hoverBg: "#7E57C2",
      hoverText: "#FFFFFF",
    },
  },
  testing: {
    bg: "#FFF3E0",
    border: "#FFCC80",
    tag: {
      bg: "#FFE0B2",
      text: "#EF6C00",
      hoverBg: "#FFA726",
      hoverText: "#FFFFFF",
    },
  },
  tools: {
    bg: "#FFF0EB",
    border: "#FFB6A9",
    tag: {
      bg: "#FFD6CC",
      text: "#D84315",
      hoverBg: "#FF7043",
      hoverText: "#FFFFFF",
    },
  },
};

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
          bg={theme.colors.gray.dim}
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
              <CustomText.Large
                fontStyle="italic"
                color={theme.colors.gray.medium}
              >
                {companyDescription}
              </CustomText.Large>
            </Chakra.HStack>

            <CustomText.Large>{jobDescription}</CustomText.Large>
          </Chakra.VStack>

          <Chakra.VStack alignItems="flex-start" width="full" height="full">
            <Chakra.HStack gap={2}>
              <BiCode size={24} className="text-gray-600" />
              <CustomText.Header fontWeight="bold">
                Technologies
              </CustomText.Header>
            </Chakra.HStack>

            <Chakra.Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={4}
              width="full"
            >
              {Object.entries(skills).map(([category, skills]) => {
                const typedCategory = category as ISkillCategory;
                const colors = skillCategoryColors[typedCategory];
                return (
                  <Chakra.Box
                    key={category}
                    bg={colors?.bg}
                    p={4}
                    rounded="xl"
                    border="1px solid"
                    borderColor={colors?.border}
                  >
                    <Chakra.Text
                      fontSize="xs"
                      fontWeight="bold"
                      color="gray.600"
                      textTransform="uppercase"
                      letterSpacing="wide"
                      mb={3}
                    >
                      {category}
                    </Chakra.Text>

                    <Chakra.Wrap gap={2}>
                      {skills.map((skill: ISkillCategory, index: number) => (
                        <Chakra.WrapItem key={skill}>
                          <MotionBox
                            px={3}
                            py={1}
                            fontSize="sm"
                            fontWeight="medium"
                            borderRadius="full"
                            cursor="pointer"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            _hover={{
                              transform: "translateY(-2px)",
                              boxShadow: "md",
                              bg: colors?.tag.hoverBg,
                              color: colors?.tag.hoverText,
                            }}
                            bg={colors?.tag.bg}
                            color={colors?.tag.text}
                          >
                            {skill}
                          </MotionBox>
                        </Chakra.WrapItem>
                      ))}
                    </Chakra.Wrap>
                  </Chakra.Box>
                );
              })}
            </Chakra.Grid>
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
          ></MotionHStack>
        </MotionVStack>
      )}
    </AnimatePresence>
  );
};
