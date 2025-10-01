import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlignCenter = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" fillRule="evenodd" d="M6 7.05V4h3v3.05zm-1 0H1.5a.45.45 0 0 0 0 .9H5v3.3c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.3h3.5a.45.45 0 0 0 0-.9H10v-3.3A.75.75 0 0 0 9.25 3h-3.5a.75.75 0 0 0-.75.75zm4 .9V11H6V7.95z" clipRule="evenodd" /></Svg>;
export default SvgAlignCenter;