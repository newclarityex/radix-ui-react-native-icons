import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTransparencyGrid = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M3 15H0v-3h3zm6 0H6v-3h3zm6 0h-3v-3h3zm-9-3H3V9h3zm6 0H9V9h3zM3 9H0V6h3zm6 0H6V6h3zm6 0h-3V6h3zM6 6H3V3h3zm6 0H9V3h3zM3 3H0V0h3zm6 0H6V0h3zm6 0h-3V0h3z" opacity={0.25} /></Svg>;
export default SvgTransparencyGrid;