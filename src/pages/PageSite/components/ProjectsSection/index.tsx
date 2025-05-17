import * as Chakra from "@chakra-ui/react";
import { AnimatedTitle } from "@/components/atoms/AnimatedTitle";
import { theme } from "@/theme";
import { IIsMobileState } from "@/interfaces/IIsMobileState";
interface IProps extends IIsMobileState {}

export const ProjectsSection = ({ isMobile }: IProps) => {
  return (
    <Chakra.VStack
      w="full"
      h="full"
      align={{ base: "center", md: "flex-start" }}
      id="projects"
    >
      <AnimatedTitle isMobile={isMobile}>PROJECTS</AnimatedTitle>

      <Chakra.Text
        color={theme.colors.gray.medium}
        textAlign={{ base: "center", md: "start" }}
        fontSize={{ base: "lg", md: "xl" }}
      >
        List of my previous and ongoing projects
      </Chakra.Text>
    </Chakra.VStack>
  );
};
