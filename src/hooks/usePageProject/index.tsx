import { useIsMobileContext } from "@/context/useIsMobile";
import { LINKS } from "@/data/links";
import { PROJECTS } from "@/data/projects";
import { IBreadcrumbItem } from "@/interfaces/IBreadcrumItem";
import { IClientFeedback } from "@/interfaces/IClientFeedback";
import { findItemByName } from "@/utils/findProjectById";
import { transformProductQueryUrl } from "@/utils/transformProductQueryUrl";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const usePageProject = () => {
  const { isMobile } = useIsMobileContext();
  const router = useRouter();
  const queryProject = String(router.query.slug);
  const projectName = transformProductQueryUrl(queryProject);
  const project = findItemByName(PROJECTS, projectName);

  const breadcrumLinks: IBreadcrumbItem[] = [
    { label: "Home", href: LINKS.INITAL },
    { label: "Projects", href: LINKS.INITAL },
    { label: "Project" },
  ];

  useEffect(() => {
    if (!project || project.title !== projectName) {
      router.replace("/404");
    }
  }, [project, projectName, router]);

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
      breadcrums: breadcrumLinks,
    },
    methods: {},
  };
};
