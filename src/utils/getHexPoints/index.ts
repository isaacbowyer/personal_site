import { degreesToRadius } from "../degreesToRadius";

export const getHexPoints = (
  w: number,
  h: number,
  offset = 0
): [number, number][] => {
  const cx = w / 2;
  const cy = h / 2;
  const anglesDeg = [270, 330, 30, 90, 150, 210];
  const radius = Math.min(w / 2, h / 2) - offset;

  return anglesDeg.map((angle) => {
    const rad = degreesToRadius(angle);
    const x = cx + radius * Math.cos(rad);
    const y = cy + radius * Math.sin(rad);
    return [x, y];
  });
};
