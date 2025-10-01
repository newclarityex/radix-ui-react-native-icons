import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTokens = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M4.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m6 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-6 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-6-7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m6 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-6 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></Svg>;
export default SvgTokens;