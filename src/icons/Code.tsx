import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCode = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M9.036 2.314a.5.5 0 1 1 .928.371l-4 10a.5.5 0 1 1-.928-.37zm2.11 2.832a.5.5 0 0 1 .63-.064l.077.064 2 2 .065.078a.5.5 0 0 1-.065.63l-2 2a.5.5 0 1 1-.707-.708L12.793 7.5l-1.647-1.647-.064-.078a.5.5 0 0 1 .064-.629m-8 0a.5.5 0 0 1 .707.707L2.207 7.5l1.646 1.646.065.078a.5.5 0 0 1-.693.694l-.079-.065-2-2a.5.5 0 0 1 0-.707z" /></Svg>;
export default SvgCode;