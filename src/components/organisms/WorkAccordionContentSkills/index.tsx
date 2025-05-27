import { SkillTag } from "@/components/atoms/SkillTag";
import { SKILL_CATEGORY_COLORS } from "@/data/colors";
import {
  ISkillCategory,
  IWorkExperienceSkills,
} from "@/interfaces/IWorkExperienceSkills";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  skills: IWorkExperienceSkills;
}

export const WorkAccordionContentSkills = ({ skills }: IProps) => {
  return (
    <Chakra.Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={4}
      width="full"
    >
      {Object.entries(skills).map(([category, skills]) => {
        const typedCategory = category as ISkillCategory;
        const colors = SKILL_CATEGORY_COLORS[typedCategory];

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
              color="#4B5563"
              textTransform="uppercase"
              letterSpacing="wide"
              mb={3}
            >
              {category}
            </Chakra.Text>

            <Chakra.Wrap gap={2}>
              {skills.map((skill: ISkillCategory, index: number) => (
                <Chakra.WrapItem key={index}>
                  <SkillTag
                    index={index}
                    hoverBgColor={colors.tag.hoverBg}
                    hoverColor={colors.tag.hoverText}
                    color={colors.tag.text}
                    bgColor={colors.tag.bg}
                    skill={skill}
                  />
                </Chakra.WrapItem>
              ))}
            </Chakra.Wrap>
          </Chakra.Box>
        );
      })}
    </Chakra.Grid>
  );
};
