import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBadge = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M11.756 5.013a2.5 2.5 0 0 1 0 4.974L11.5 10h-8l-.256-.013a2.5 2.5 0 0 1 0-4.974L3.5 5h8zM3.5 6a1.5 1.5 0 1 0 0 3h8a1.5 1.5 0 0 0 0-3zm7 1a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1z" /></Svg>;
export default SvgBadge;