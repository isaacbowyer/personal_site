import * as Chakra from "@chakra-ui/react";
import { ViewProjectButton } from "../ViewProjectButton";
import { getProjectTitleAndLineStyles } from "@/utils/getProjectTitleAndLineStyles";

interface IProps {
  title: string;
  description: string;
  shouldDisplayButton: boolean;
  isMobile: boolean;
  isHovered: boolean;
}
export const ProjectCardContent = ({
  title,
  description,
  isMobile,
  isHovered,
  shouldDisplayButton,
}: IProps) => {
  const isHoveredAndNotMobile = isHovered && !isMobile;

  const { titleProps, lineProps } = getProjectTitleAndLineStyles(
    isHoveredAndNotMobile
  );

  return (
    <Chakra.VStack
      align="start"
      p={8}
      gap={6}
      flex="1"
      position="relative"
      w="full"
    >
      <Chakra.VStack align="start" gap={3} w="full">
        <Chakra.Text
          fontSize="2xl"
          fontWeight="800"
          lineHeight={1.3}
          color={titleProps.color}
          bgGradient={titleProps.bgGradient}
          bgClip={isHovered ? "text" : undefined}
          transition="all 0.3s ease"
        >
          {title}
        </Chakra.Text>

        <Chakra.Box
          w={lineProps.width}
          h="2px"
          bg={lineProps.bgColor}
          bgGradient={lineProps.bgGradient}
          transition="width 0.3s ease, background 0.3s ease"
        />
      </Chakra.VStack>

      <Chakra.Text fontSize="md" color="gray.300" lineHeight={1.6} flexGrow={1}>
        {description}
      </Chakra.Text>

      {shouldDisplayButton && (
        <ViewProjectButton isHovered={isHovered} isMobile={isMobile} />
      )}
    </Chakra.VStack>
  );
};
