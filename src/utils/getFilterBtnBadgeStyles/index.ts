import { validateOptionsBasedOnBoolean } from "../validateOptionsBasedOnBoolean";

export const getFilterBtnBadgeStyles = (isActive: boolean) => {
  const bgColor = validateOptionsBasedOnBoolean(
    isActive,
    "rgba(255, 255, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );
  const color = validateOptionsBasedOnBoolean(isActive, "#FFF", "#A0AEC0");

  return {
    bgColor,
    color,
  };
};
