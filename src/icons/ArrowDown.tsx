import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowDown = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M7.5 2a.5.5 0 0 1 .5.5v8.793l3.147-3.147a.5.5 0 1 1 .707.708l-4 4a.5.5 0 0 1-.707 0l-4-4-.065-.079a.5.5 0 0 1 .694-.693l.078.064L7 11.293V2.5a.5.5 0 0 1 .5-.5" /></Svg>;
export default SvgArrowDown;