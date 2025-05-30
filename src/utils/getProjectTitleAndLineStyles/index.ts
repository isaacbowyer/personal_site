import { validateOptionsBasedOnBoolean } from "../validateOptionsBasedOnBoolean";

export const getProjectTitleAndLineStyles = (isHovered: boolean) => {
  //  TITLE
  const titleColor = validateOptionsBasedOnBoolean(
    isHovered,
    "transparent",
    "#FFF"
  );
  const titleBgGradient = validateOptionsBasedOnBoolean(
    isHovered,
    "linear-gradient(to right, #00D4FF, #FF00D4)",
    "none"
  );

  //  LINE
  const lineWidth = validateOptionsBasedOnBoolean(isHovered, "60px", "30px");
  const lineBgColor = validateOptionsBasedOnBoolean(
    isHovered,
    "transparent",
    "#FFF"
  );
  const lineBgGradient = validateOptionsBasedOnBoolean(
    isHovered,
    "linear-gradient(to right, #00D4FF, #FF00D4)",
    ""
  );

  return {
    titleProps: {
      color: titleColor,
      bgGradient: titleBgGradient,
    },
    lineProps: {
      width: lineWidth,
      bgColor: lineBgColor,
      bgGradient: lineBgGradient,
    },
  };
};
