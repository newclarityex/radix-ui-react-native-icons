import React from "react";
import Svg from "react-native-svg";
import { icons } from "./IconRegistry";

export type RadixIconName = keyof typeof icons;

interface RadixIconProps {
  name?: RadixIconName;
  size?: number;
  color?: string;
}

function RadixIcon({
  name = "hand",
  size = 24,
  color = "black",
}: RadixIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 15" fill={color}>
      {icons[name]}
    </Svg>
  );
}

export default RadixIcon;
