import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRulerHorizontal = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M14.6 4.01a.5.5 0 0 1 .4.49v6a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-6l.01-.1A.5.5 0 0 1 .5 4h14zM1 10h13V5h-1.075v1.5a.425.425 0 1 1-.85 0V5h-1.15v1.5a.425.425 0 1 1-.85 0V5h-1.15v2.5a.425.425 0 1 1-.85 0V5h-1.15v1.5a.425.425 0 1 1-.85 0V5h-1.15v1.5a.425.425 0 1 1-.85 0V5h-1.15v2.5a.425.425 0 1 1-.85 0V5H1z" /></Svg>;
export default SvgRulerHorizontal;