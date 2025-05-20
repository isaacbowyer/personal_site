import { shortenBorder } from "../shorternBorder";

export const getBottomPathForProfileBorder = (
  outerPoints: [number, number][],
  shortStrokeLength: number
) => {
  const p2 = outerPoints[2];
  const p3 = outerPoints[3];
  const p4 = outerPoints[4];

  const p4Short = shortenBorder(p4, outerPoints[5], shortStrokeLength);
  const p2Short = shortenBorder(p2, outerPoints[1], shortStrokeLength);

  return `M ${p2Short[0]} ${p2Short[1]} L ${p2[0]} ${p2[1]} L ${p3[0]} ${p3[1]} L ${p4[0]} ${p4[1]} L ${p4Short[0]} ${p4Short[1]}`;
};
