import { validateOptionsBasedOnBoolean } from "../validateOptionsBasedOnBoolean";

export const getProjectTitleAndLineStyles = (
  isHoveredAndNotMobile: boolean
) => {
  //  TITLE
  const titleColor = validateOptionsBasedOnBoolean(
    isHoveredAndNotMobile,
    "transparent",
    "#FFF"
  );
  const titleBgGradient = validateOptionsBasedOnBoolean(
    isHoveredAndNotMobile,
    "linear-gradient(to right, #00D4FF, #FF00D4)",
    "none"
  );

  //  LINE
  const lineWidth = validateOptionsBasedOnBoolean(
    isHoveredAndNotMobile,
    "60px",
    "30px"
  );
  const lineBgColor = validateOptionsBasedOnBoolean(
    isHoveredAndNotMobile,
    "transparent",
    "#FFF"
  );
  const lineBgGradient = validateOptionsBasedOnBoolean(
    isHoveredAndNotMobile,
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
