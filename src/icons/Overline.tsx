import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOverline = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M10.5 3.75a.5.5 0 0 1 .5.5v5.3a3.5 3.5 0 0 1-7 0v-5.3a.5.5 0 1 1 1 0v5.3a2.5 2.5 0 0 0 5 0v-5.3a.5.5 0 0 1 .5-.5m1.081-2.641a.4.4 0 0 1 0 .783l-.08.009h-8a.401.401 0 0 1 0-.801h8z" /></Svg>;
export default SvgOverline;