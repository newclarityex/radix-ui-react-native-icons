import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCrossCircled = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M7.5.877a6.623 6.623 0 1 1 0 13.246A6.623 6.623 0 0 1 7.5.877m0 .95A5.674 5.674 0 1 0 7.5 13.17a5.674 5.674 0 0 0-.002-11.345m1.647 3.32a.5.5 0 1 1 .707.707L8.207 7.5l1.647 1.647.064.078a.5.5 0 0 1-.693.693l-.078-.064L7.5 8.207 5.854 9.854a.5.5 0 0 1-.707-.707L6.793 7.5 5.147 5.854l-.065-.079a.5.5 0 0 1 .694-.693l.078.065L7.5 6.793z" /></Svg>;
export default SvgCrossCircled;