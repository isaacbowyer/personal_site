import React from "react";

interface IProps {
  src?: string;
  alt?: string;
  size?: string;
  borderColor?: string;
  borderWidth?: string;
}

export const HexagonalPfileImage = ({
  src = "images/profile_img.svg",
  alt = "profile image",
  size = "550px",
  borderColor = "#74c0fc",
  borderWidth = "8px",
}: IProps) => {
  // Calculate the inner padding (space between border and image)
  const innerPadding = "12px";

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
      }}
    >
      {/* Outer border with curved corners */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: borderColor,
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 50%, 90% 80%, 50% 100%, 10% 80%, 0% 50%, 10% 20%)",
          borderRadius: "24px",
          zIndex: 1,
        }}
      />

      {/* White space between border and image */}
      <div
        style={{
          position: "absolute",
          top: borderWidth,
          left: borderWidth,
          right: borderWidth,
          bottom: borderWidth,
          background: "white",
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 50%, 90% 80%, 50% 100%, 10% 80%, 0% 50%, 10% 20%)",
          borderRadius: "18px",
          zIndex: 2,
        }}
      />

      {/* Inner image container */}
      <div
        style={{
          position: "absolute",
          top: `calc(${borderWidth} + ${innerPadding})`,
          left: `calc(${borderWidth} + ${innerPadding})`,
          right: `calc(${borderWidth} + ${innerPadding})`,
          bottom: `calc(${borderWidth} + ${innerPadding})`,
          zIndex: 3,
          overflow: "hidden",
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 50%, 90% 80%, 50% 100%, 10% 80%, 0% 50%, 10% 20%)",
          borderRadius: "12px",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};
