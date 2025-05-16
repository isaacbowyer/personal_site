import { theme } from "@/theme";

export const getCustomLinkColor = (hoveredLabel: string, label: string) => {
  return hoveredLabel && hoveredLabel !== label
    ? theme.colors.gray.medium
    : theme.colors.black;
};
