import * as Chakra from "@chakra-ui/react";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { FloatingCirclesBackground } from "@/components/molecules/FloatingCirclesBackground";
import { NavBarContainer } from "@/components/molecules/NavBarContainer";
import { BiChevronRight } from "react-icons/bi";
import { ProjectHomeTitle } from "@/components/molecules/ProjectHomeTitle";
import { ProjectFeaturedImage } from "@/components/atoms/ProjectFeaturedImage";
import { TemplateProductSectionContainer } from "@/components/templates/TemplateProjectSectionContainer";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { IBreadcrumbItem } from "@/interfaces/IBreadcrumItem";

interface IProps {
  title: string;
  featuredImageUrl: string;
  description: string;
  breadcrums: IBreadcrumbItem[];
}

export const ProjectHomeSection = ({
  title,
  featuredImageUrl,
  description,
  breadcrums,
}: IProps) => {
  return (
    <TemplateProductSectionContainer
      bgGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      bgImage={`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`}
      isHomeSection={true}
      main={
        <Chakra.VStack zIndex={1} position="relative">
          <NavBarContainer isLightMode />

          <FloatingCirclesBackground />

          <Chakra.Grid
            templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
            maxW="1200px"
            width="full"
            minH="100vh"
            id="home"
          >
            <Chakra.VStack
              width="full"
              align={{ base: "center", md: "flex-start" }}
              justifyContent="center"
              gap={16}
            >
              <Chakra.VStack
                width="full"
                align={{ base: "center", md: "flex-start" }}
                gap={4}
              >
                <Breadcrumbs items={breadcrums} />
                <ProjectHomeTitle title={title} description={description} />
              </Chakra.VStack>

              <ButtonLink
                href="#gallery"
                label="View Project Images"
                icon={<BiChevronRight />}
                bgGradient="linear-gradient(to right, #A0F0FF, #BDBDFF)"
                hoverBgGradient="linear-gradient(to right, #7DE2FF, #A3A3FF)"
              />
            </Chakra.VStack>

            <ProjectFeaturedImage imageUrl={featuredImageUrl} />
          </Chakra.Grid>
        </Chakra.VStack>
      }
    />
  );
};
