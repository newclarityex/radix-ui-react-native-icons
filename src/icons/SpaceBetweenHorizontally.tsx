import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSpaceBetweenHorizontally = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M6 8a1 1 0 0 1-1 1H1v4.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0V6h4a1 1 0 0 1 1 1zm4 1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4V1.5a.5.5 0 1 1 1 0v12a.5.5 0 0 1-1 0V9z" /></Svg>;
export default SvgSpaceBetweenHorizontally;