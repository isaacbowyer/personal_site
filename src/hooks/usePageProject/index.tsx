import { useIsMobileContext } from "@/context/useIsMobile";
import { PROJECTS } from "@/data/projects";
import { IClientFeedback } from "@/interfaces/IClientFeedback";
import { findItemById } from "@/utils/findProjectById";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const usePageProject = () => {
  const { isMobile } = useIsMobileContext();
  const router = useRouter();
  const projectId = Number(router.query.id);
  const project = findItemById(PROJECTS, projectId);

  useEffect(() => {
    if (!project || project.id !== 1) {
      router.replace("/404");
    }
  }, [project, router]);

  const clientFeedback: IClientFeedback = {
    comment: project?.clientFeedback?.comment || "",
    name: project?.clientFeedback?.name || "",
    role: project?.clientFeedback?.role || "",
  };
  return {
    state: {
      isMobile: isMobile,
      id: project?.id || 0,
      title: project?.title || "",
      description: project?.description || "",
      overview: project?.overview || "",
      technologies: project?.technologies || [],
      featuredImageUrl: project?.images?.featuredImage || "",
      galleryImageUrls: project?.images?.galleryImages || [],
      clientFeedback: clientFeedback,
    },
    methods: {},
  };
};
