import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAllSides = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M7.5 14.25 5.25 12h4.5zM3 9.75.75 7.5 3 5.25zM14.25 7.5 12 9.75v-4.5zM9.75 3h-4.5L7.5.75z" /></Svg>;
export default SvgAllSides;