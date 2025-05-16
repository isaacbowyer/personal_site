import { theme } from "@/theme";

export const getCustomLinkColor = (hoveredLabel: string, label: string) => {
  return hoveredLabel && hoveredLabel !== label
    ? theme.colors.gray.light
    : theme.colors.black;
};
