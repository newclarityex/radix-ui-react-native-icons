import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilePlus = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M9.598 1.01a.5.5 0 0 1 .256.136l2.926 2.927c.14.14.22.332.22.53V12.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5v-10A1.5 1.5 0 0 1 3.5 1h6zM3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V4.707L9.293 2zm4 2.75a.5.5 0 0 1 .5.5V7h1.75a.5.5 0 0 1 0 1H8v1.75a.5.5 0 0 1-1 0V8H5.25a.5.5 0 0 1 0-1H7V5.25a.5.5 0 0 1 .5-.5" /></Svg>;
export default SvgFilePlus;