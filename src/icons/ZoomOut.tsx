import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgZoomOut = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M6.5 2a4.5 4.5 0 0 1 3.515 7.308l2.839 2.839.064.078a.5.5 0 0 1-.693.693l-.079-.064-2.838-2.84A4.5 4.5 0 1 1 6.5 2m0 1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m1.85 3.01a.5.5 0 0 1 0 .98l-.1.01h-3.5a.5.5 0 0 1 0-1h3.5z" /></Svg>;
export default SvgZoomOut;