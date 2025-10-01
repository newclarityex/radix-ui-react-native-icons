import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPieChart = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M7.5.85a6.65 6.65 0 1 1 0 13.3 6.65 6.65 0 0 1 0-13.3m0 1a5.65 5.65 0 1 0 0 11.301 5.65 5.65 0 0 0 0-11.301m0 1.25A4.4 4.4 0 0 1 11.871 8h-4.87V3.128q.245-.027.5-.028" /></Svg>;
export default SvgPieChart;