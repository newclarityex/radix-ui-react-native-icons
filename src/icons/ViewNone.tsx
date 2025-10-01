import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgViewNone = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M13.653 1.008c.174.017.34.066.49.138l.032-.026.065.077c.454.258.76.744.76 1.303v10l-.008.153a1.5 1.5 0 0 1-1.339 1.34L13.5 14h-12l-.153-.008a1.5 1.5 0 0 1-.493-.139l-.029.027-.065-.076a1.5 1.5 0 0 1-.752-1.15L0 12.5v-10a1.5 1.5 0 0 1 1.347-1.492L1.5 1h12zM1.852 13H13.5a.5.5 0 0 0 .5-.5V2.587zM1.5 2a.5.5 0 0 0-.5.5v9.912L13.148 2z" /></Svg>;
export default SvgViewNone;