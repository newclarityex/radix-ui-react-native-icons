import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEnterFullScreen = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M2.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m10 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 .5-.5m-7-7a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3l.01-.1A.5.5 0 0 1 2.5 2zm7.1.01a.5.5 0 0 1 .4.49v3a.5.5 0 0 1-1 0V3H9.5a.5.5 0 0 1 0-1h3z" /></Svg>;
export default SvgEnterFullScreen;