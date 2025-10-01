import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPause = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M5.5 2.2a.55.55 0 0 1 .55.55v9.5a.55.55 0 1 1-1.1 0v-9.5a.55.55 0 0 1 .55-.55m4 0a.55.55 0 0 1 .55.55v9.5a.55.55 0 1 1-1.1 0v-9.5a.55.55 0 0 1 .55-.55" /></Svg>;
export default SvgPause;