import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDotsHorizontal = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M2.5 6.375a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m5 0a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m5 0a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25" /></Svg>;
export default SvgDotsHorizontal;