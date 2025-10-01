import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBorderDotted = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M1.5 6.625a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75m4 0a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75m4 0a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75m4 0a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75" /></Svg>;
export default SvgBorderDotted;