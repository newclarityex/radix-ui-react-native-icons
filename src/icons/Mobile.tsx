import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMobile = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M10.5 1A1.5 1.5 0 0 1 12 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 3 12.5v-10A1.5 1.5 0 0 1 4.5 1zm-6 1a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5zm4.57 9.657a.35.35 0 0 1 0 .686L9 12.35H6a.35.35 0 1 1 0-.7h3z" /></Svg>;
export default SvgMobile;