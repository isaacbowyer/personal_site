const blue = {
  light: "#77C7FF",
  medium: "#60a5fa",
  vivid: "#228BE6",
  dark: "#1e40af",
};

const gray = {
  dim: "#EDF2F7",
  light: "#A1A1A1",
  medium: "#4A5568",
  dark: "#1A202C",
};

const textColors = {
  primary: gray.dark,
  secondary: gray.medium,
  muted: gray.light,
  inverted: "#FFFFFF",
};

const backgroundColors = {
  default: "#FFFFFF",
  muted: gray.dim,
  dark: gray.dark,
  light: "#F7FAFC",
};

const buttonColors = {
  primary: {
    background: blue.vivid,
    text: "#FFFFFF",
    hover: "#1e60d1",
    active: "#184cab",
    disabled: gray.light,
  },
  secondary: {
    background: gray.dim,
    text: gray.dark,
    hover: "#E2E8F0",
    active: "#CBD5E0",
    disabled: gray.light,
  },
};

const gradients = {
  sunset:
    "linear-gradient(to bottom, #ff9a9e, #fad0c4, #fad0c4, #fbc7a4, #f6d365)",
  light_blue: "linear-gradient(to bottom, #4A90E2, #7AB8F5, #B3D9FF)",
  blue: "linear-gradient(to bottom right, #3b82f6, #22d3ee)",
  purple: "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
  orange: "linear-gradient(to bottom right, #f59e0b, #fb923c)",
  gray: "linear-gradient(to bottom right,#f9fafb,#f3f4f6)",
};

export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#111111",
    blue: blue,
    gray: gray,
    text: textColors,
    backgrounds: backgroundColors,
    buttons: buttonColors,
    gradients: gradients,
  },
};
