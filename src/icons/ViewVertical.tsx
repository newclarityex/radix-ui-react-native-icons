import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgViewVertical = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M13.653 1.008A1.5 1.5 0 0 1 15 2.5v10l-.008.153a1.5 1.5 0 0 1-1.339 1.34L13.5 14h-12l-.153-.008a1.5 1.5 0 0 1-1.34-1.339L0 12.5v-10a1.5 1.5 0 0 1 1.347-1.492L1.5 1h12zM1.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5H7V2zM8 13h5.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H8z" /></Svg>;
export default SvgViewVertical;