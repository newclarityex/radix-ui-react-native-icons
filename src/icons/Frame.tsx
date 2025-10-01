import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFrame = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M10.5 1a.5.5 0 0 1 .5.5V4h2.5l.1.01a.5.5 0 0 1 0 .98l-.1.01H11v5h2.5l.1.01a.5.5 0 0 1 0 .98l-.1.01H11v2.5l-.01.1a.5.5 0 0 1-.98 0l-.01-.1V11H5v2.5a.5.5 0 0 1-1 0V11H1.5a.5.5 0 0 1 0-1H4V5H1.5a.5.5 0 0 1 0-1H4V1.5a.5.5 0 0 1 1 0V4h5V1.5a.5.5 0 0 1 .5-.5M5 10h5V5H5z" /></Svg>;
export default SvgFrame;