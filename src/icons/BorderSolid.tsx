import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBorderSolid = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M13.35 7.01a.5.5 0 0 1 0 .98l-.1.01H1.75a.5.5 0 0 1 0-1h11.5z" /></Svg>;
export default SvgBorderSolid;