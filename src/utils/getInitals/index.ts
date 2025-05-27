export const getInitials = (name: string) => {
  if (!name) return "";

  return name
    .split(" ")
    .map((part) => part[0].toUpperCase())
    .join("");
};
