import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSpaceEvenlyVertically = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M13.5 14a.5.5 0 0 1 0 1h-12a.5.5 0 0 1 0-1zM8 8a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm0-6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm5.5-2a.5.5 0 0 1 0 1h-12a.5.5 0 1 1 0-1z" /></Svg>;
export default SvgSpaceEvenlyVertically;