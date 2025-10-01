import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLoop = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M1.5 7a.5.5 0 0 1 .5.5A3.5 3.5 0 0 0 5.5 11h7.293l-1.147-1.146-.064-.078a.5.5 0 0 1 .693-.694l.079.065 2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 1 1-.708-.707L12.793 12H5.5A4.5 4.5 0 0 1 1 7.5a.5.5 0 0 1 .5-.5m1.225-5.918a.5.5 0 0 1 .693.694l-.065.078L2.207 3H9.5A4.5 4.5 0 0 1 14 7.5a.5.5 0 0 1-1 0A3.5 3.5 0 0 0 9.5 4H2.207l1.146 1.147.065.078a.5.5 0 0 1-.693.693l-.079-.064-2-2a.5.5 0 0 1 0-.707l2-2z" /></Svg>;
export default SvgLoop;