import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStretchHorizontally = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M1 9v4.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0V6h13V1.5a.5.5 0 1 1 1 0v12a.5.5 0 0 1-1 0V9z" /></Svg>;
export default SvgStretchHorizontally;