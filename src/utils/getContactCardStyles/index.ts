import { validateOptionsBasedOnBoolean } from "../validateOptionsBasedOnBoolean";

export const getContactCardStyles = (isHovered: boolean) => {
  const gradient = "linear-gradient(to right, #63B3ED, #9F7AEA)";

  const bgColor = validateOptionsBasedOnBoolean(isHovered, gradient, "#77C7FF");
  const bgGradient = validateOptionsBasedOnBoolean(isHovered, gradient, "none");
  const bgClip = validateOptionsBasedOnBoolean(isHovered, "text", "border-box");
  const color = validateOptionsBasedOnBoolean(isHovered, "transparent", "#FFF");

  return {
    bgColor,
    bgGradient,
    bgClip,
    color,
  };
};
