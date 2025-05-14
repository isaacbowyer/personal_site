export const getCustomLinkColor = (hoveredLabel: string, label: string) => {
  return hoveredLabel && hoveredLabel !== label ? "gray" : "black";
};
