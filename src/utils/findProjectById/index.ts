export const findItemByName = <T extends { title: string }>(
  items: T[],
  title: string
): T | undefined => {
  return items.find((item) => item.title === title);
};
