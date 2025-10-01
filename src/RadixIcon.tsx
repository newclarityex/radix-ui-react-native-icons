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
  return icons[name]({ width: size, height: size, color });
}

export default RadixIcon;
