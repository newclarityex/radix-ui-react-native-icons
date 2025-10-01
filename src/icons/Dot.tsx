import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDot = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M7.5 4.875a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25m0 1a1.625 1.625 0 1 0 0 3.25 1.625 1.625 0 0 0 0-3.25" /></Svg>;
export default SvgDot;