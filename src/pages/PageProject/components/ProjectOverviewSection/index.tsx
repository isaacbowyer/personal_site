import { CustomText } from "@/components/atoms/CustomText";
import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";
import { ProductTechStack } from "@/components/organisms/ProductTechStack";
import { TemplateProductSectionContainer } from "@/components/templates/TemplateProjectSectionContainer";
import * as Chakra from "@chakra-ui/react";
import { BiCode } from "react-icons/bi";

interface IProps {
  overview: string;
  technologies: string[];
}

export const ProjectOverviewSection = ({ overview, technologies }: IProps) => {
  return (
    <TemplateProductSectionContainer
      bgGradient="linear-gradient(to bottom right, #f9fafb, #f3f4f6)"
      bgImage={`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(102,126,234,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');`}
      main={
        <Chakra.VStack id="overview" w="full" maxW="1200px" gap={8}>
          <TitleWithHeader title="OVERVIEW" />

          <Chakra.HStack
            bg="white"
            opacity={1}
            p={8}
            rounded="lg"
            borderX="4px solid"
            borderColor="blue.400"
            mb={6}
            width="full"
            zIndex={1}
          >
            <Chakra.Text fontSize="xl" whiteSpace="pre-line">
              {overview}
            </Chakra.Text>
          </Chakra.HStack>

          <Chakra.HStack
            gap={2}
            textAlign={{ base: "center", md: "start" }}
            align={"center"}
            justifyContent={{ base: "center", md: "start" }}
            w="full"
          >
            <BiCode size={24} className="text-gray-600" />
            <CustomText.Header fontWeight="bold">
              Technologies & Tools
            </CustomText.Header>
          </Chakra.HStack>

          <ProductTechStack technologies={technologies} />
        </Chakra.VStack>
      }
    />
  );
};
