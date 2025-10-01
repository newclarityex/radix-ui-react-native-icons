import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBorderWidth = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M14 12.75H1v-2.5h13zM14 8H1V6h13zm0-4H1V3h13z" /></Svg>;
export default SvgBorderWidth;