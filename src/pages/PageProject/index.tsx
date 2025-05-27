import { TemplateContainer } from "@/components/templates/TemplateContainer";
import { usePageProject } from "@/hooks/usePageProject";
import * as Chakra from "@chakra-ui/react";
import { ProjectGallerySection } from "./components/ProjectGallerySection";
import { ProjectOverviewSection } from "./components/ProjectOverviewSection";
import { ProjectHomeSection } from "./components/ProjectHomeSection";
import { ProjectClientSection } from "./components/ProjectClientSection";

export const PageProject = () => {
  const { state } = usePageProject();

  return (
    <TemplateContainer
      main={
        <Chakra.VStack w="full" h="full" gap={0}>
          <ProjectHomeSection
            featuredImageUrl={state.featuredImageUrl}
            description={state.description}
            title={state.title}
          />

          <ProjectOverviewSection
            technologies={state.technologies}
            overview={state.overview}
          />

          <ProjectGallerySection images={state.galleryImageUrls} />

          <ProjectClientSection
            clientName={state.clientFeedback.name}
            clientRole={state.clientFeedback.role}
            comment={state.clientFeedback.comment}
          />
        </Chakra.VStack>
      }
    />
  );
};
