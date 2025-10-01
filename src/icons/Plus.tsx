import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlus = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M7.5 2.25a.5.5 0 0 1 .5.5V7h4.25a.5.5 0 0 1 0 1H8v4.25a.5.5 0 0 1-1 0V8H2.75a.5.5 0 0 1 0-1H7V2.75a.5.5 0 0 1 .5-.5" /></Svg>;
export default SvgPlus;