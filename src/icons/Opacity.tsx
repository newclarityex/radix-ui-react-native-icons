import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOpacity = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M7.5 1.5c3 2.75 4.5 5 4.5 7.5a4.5 4.5 0 1 1-9 0c0-2.5 1.5-4.75 4.5-7.5m0 1.376C5.028 5.274 4 7.112 4 9a3.5 3.5 0 1 0 7 0c0-1.888-1.028-3.726-3.5-6.124" /></Svg>;
export default SvgOpacity;