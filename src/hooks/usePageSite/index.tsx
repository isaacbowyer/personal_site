import { useIsMobileContext } from "@/context/useIsMobile";
import { useExpertiseSection } from "../useExpertiseSection";
import { useProjectsSection } from "../useProjectsSection";
import { useWorkSection } from "../useWorkSection";
import { useContactSection } from "../useContactSection";

export const usePageSite = () => {
  const { isMobile } = useIsMobileContext();
  const { state: expertiseState, methods: expertiseMethods } =
    useExpertiseSection();
  const { state: projectsState, methods: projectsMethods } =
    useProjectsSection();
  const { state: workState } = useWorkSection();
  const { state: contactState, methods: contactMethods } = useContactSection();

  return {
    state: {
      isMobile: isMobile,
      activeExpertiseItem: expertiseState.activeCard,
      expertiseItems: expertiseState.expertiseItems,
      projectItems: projectsState.projects,
      projectCategories: projectsState.categories,
      projectCategoryCounts: projectsState.categoryCounts,
      activeCategoryFilter: projectsState.activeFilter,
      workItems: workState.workItems,
      contactItems: contactState.contactItems,
    },
    methods: {
      handleClickExpertiseItem: expertiseMethods.handleClickCard,
      handleChangeActiveCategory: projectsMethods.handleChangeActiveFilter,
      handleClickContactItem: contactMethods.handleClick,
    },
  };
};
