import * as Chakra from "@chakra-ui/react";
import { theme } from "@/theme";
import { getBottomPathForProfileBorder } from "@/utils/getBottomPathForProfileBorder";
import { getHexPoints } from "@/utils/getHexPoints";
import { getTopPathForProfileBorder } from "@/utils/getTopPathForProfileBorder";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import { useState, useEffect, useRef } from "react";
import NextLink from "next/link";

interface IProps {
  src?: string;
  alt?: string;
  borderWidth?: number;
  gap?: number;
}

export const WebProfileAvatar = ({
  src = "images/profile.png",
  alt = "profile image",
  borderWidth = 10,
  gap = 12,
}: IProps) => {
  const imageSize = Chakra.useBreakpointValue({
    base: 0,
    md: 500,
    lg: 600,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [animated, setAnimated] = useState(false);
  const topPathRef = useRef<SVGPathElement>(null);
  const bottomPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!topPathRef.current || !bottomPathRef.current) return;

    const paths = [topPathRef.current, bottomPathRef.current];

    paths.forEach((path) => {
      const length = path.getTotalLength();

      if (animated) {
        path.style.transition = "stroke-dashoffset 2s ease";
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = "0";
      } else {
        path.style.transition = "none";
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      }
    });
  }, [animated]);

  const borderColorNormal = theme.colors.white;
  const borderColorHover = theme.colors.blue.light;

  const width = imageSize || 0;
  const height = Math.round((width * Math.sqrt(3)) / 2);
  const shortStrokeLength = 60;

  const outerPoints = getHexPoints(width, height, 0);
  const innerInset = borderWidth + gap;
  const innerPoints = getHexPoints(width, height, innerInset);

  const polygonPoints = innerPoints.map(([x, y]) => `${x},${y}`).join(" ");

  return (
    <Chakra.Link
      href={"#contact"}
      _focus={{ boxShadow: "none", outline: "none" }}
      _hover={{
        textDecoration: "none",
      }}
    >
      <div
        style={{
          position: "relative",
          width,
          height,
          userSelect: "none",
          transition: "all 0.3s ease",
        }}
        aria-label={alt}
        role="img"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          setIsHovered(true);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          setIsHovered(false);
        }}
      >
        {/* Border Layer */}
        <svg
          width={width}
          height={height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            overflow: "visible",
          }}
        >
          <defs>
            <filter
              id="dropShadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#000"
                floodOpacity="0.25"
              />
            </filter>
          </defs>

          {/* Top and bottom borders */}
          <path
            ref={topPathRef}
            d={getTopPathForProfileBorder(outerPoints, shortStrokeLength)}
            fill="none"
            stroke={validateOptionsBasedOnBoolean(
              isHovered,
              borderColorHover,
              borderColorNormal
            )}
            strokeWidth={borderWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="url(#dropShadow)"
            style={{
              strokeDasharray: 0,
              strokeDashoffset: 0,
            }}
          />
          <path
            ref={bottomPathRef}
            d={getBottomPathForProfileBorder(outerPoints, shortStrokeLength)}
            fill="none"
            stroke={validateOptionsBasedOnBoolean(
              isHovered,
              borderColorHover,
              borderColorNormal
            )}
            strokeWidth={borderWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="url(#dropShadow)"
            style={{
              strokeDasharray: 0,
              strokeDashoffset: 0,
            }}
          />
        </svg>

        {/* Image with animated hex reveal */}
        <svg
          width={width}
          height={height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 3,
            overflow: "visible",
          }}
        >
          <defs>
            <clipPath id="hexRevealClip">
              <polygon
                points={polygonPoints}
                style={{
                  transformOrigin: "center center",
                  transformBox: "fill-box",
                  transform: animated ? "scale(1)" : "scale(0)",
                  transition: "transform 1s ease-out",
                }}
              />
            </clipPath>
          </defs>

          <image
            href={src}
            width="490"
            height="720"
            x="45"
            y="0"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#hexRevealClip)"
          />
        </svg>
      </div>
    </Chakra.Link>
  );
};
