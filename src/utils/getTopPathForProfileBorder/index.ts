import { shorten } from "../shortern";

export const getTopPathForProfileBorder = (
  outerPoints: [number, number][],
  shortStrokeLength: number
) => {
  const p0 = outerPoints[0];
  const p1 = outerPoints[1];
  const p5 = outerPoints[5];

  const p5Short = shorten(p5, outerPoints[4], shortStrokeLength);
  const p1Short = shorten(p1, outerPoints[2], shortStrokeLength);

  return `M ${p5Short[0]} ${p5Short[1]} L ${p5[0]} ${p5[1]} L ${p0[0]} ${p0[1]} L ${p1[0]} ${p1[1]} L ${p1Short[0]} ${p1Short[1]}`;
};
