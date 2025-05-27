import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";
import { ProjectImagesContainer } from "@/components/organisms/ProjectImagesContainer";
import { TemplateProductSectionContainer } from "@/components/templates/TemplateProjectSectionContainer";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  images: string[];
}

export const ProjectGallerySection = ({ images }: IProps) => {
  return (
    <TemplateProductSectionContainer
      bgGradient="linear-gradient(to bottom right, #1a202c, #2d3748, #1a202c)"
      bgImage={`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="hexgrid" width="28" height="24" patternUnits="userSpaceOnUse"><path d="M 14 2 L 22 7 L 22 17 L 14 22 L 6 17 L 6 7 Z" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23hexgrid)"/></svg>');`}
      main={
        <Chakra.VStack width="full" maxW="1200px" gap={8} id="gallery">
          <TitleWithHeader title="GALLERY" />

          <ProjectImagesContainer images={images} />
        </Chakra.VStack>
      }
    />
  );
};
