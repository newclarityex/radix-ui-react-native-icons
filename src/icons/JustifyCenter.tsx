import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgJustifyCenter = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" fillRule="evenodd" d="M7.95 6H11v3H7.95zm0-1V1.5a.45.45 0 0 0-.9 0V5h-3.3a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.3v3.5a.45.45 0 1 0 .9 0V10h3.3a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75zm-.9 4H4V6h3.05z" clipRule="evenodd" /></Svg>;
export default SvgJustifyCenter;