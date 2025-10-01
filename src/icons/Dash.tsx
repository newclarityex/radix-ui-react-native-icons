import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDash = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M9.6 7.01a.5.5 0 0 1 0 .98L9.5 8h-4a.5.5 0 0 1 0-1h4z" /></Svg>;
export default SvgDash;