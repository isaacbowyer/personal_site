export const shortenBorder = (
  from: [number, number],
  to: [number, number],
  len: number
) => {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const dist = Math.sqrt(dx ** 2 + dy ** 2);
  const ratio = len / dist;
  return [from[0] + dx * ratio, from[1] + dy * ratio] as [number, number];
};
