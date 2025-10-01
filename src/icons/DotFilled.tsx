import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDotFilled = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M7.5 5.125a2.375 2.375 0 1 1 0 4.75 2.375 2.375 0 0 1 0-4.75" /></Svg>;
export default SvgDotFilled;