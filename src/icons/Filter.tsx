import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilter = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M9.6 10.01a.5.5 0 0 1 0 .98l-.1.01h-4a.5.5 0 0 1 0-1h4zm2-3a.5.5 0 0 1 0 .98l-.1.01h-8a.5.5 0 0 1 0-1h8zM13.5 4a.5.5 0 0 1 0 1h-12a.5.5 0 0 1 0-1z" /></Svg>;
export default SvgFilter;