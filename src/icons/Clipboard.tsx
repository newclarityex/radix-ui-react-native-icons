import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClipboard = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M10.25 0a.75.75 0 0 1 .75.75V1h.5A1.5 1.5 0 0 1 13 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5v-10A1.5 1.5 0 0 1 3.5 1H4V.75A.75.75 0 0 1 4.75 0zM3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H11v.25a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 2.25V2zM5 2h5V1H5z" /></Svg>;
export default SvgClipboard;