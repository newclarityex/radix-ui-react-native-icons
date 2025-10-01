import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSlider = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M8.78 4.764A2.75 2.75 0 0 1 11.204 7H14.5l.1.01a.5.5 0 0 1 0 .98l-.1.01h-3.297A2.75 2.75 0 0 1 8.5 10.25l-.281-.014A2.75 2.75 0 0 1 5.796 8H.5a.5.5 0 0 1 0-1h5.297A2.75 2.75 0 0 1 8.5 4.75zM8.5 5.7a1.801 1.801 0 1 0 .001 3.602A1.801 1.801 0 0 0 8.5 5.7" /></Svg>;
export default SvgSlider;