import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTable = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M12.653 1.008A1.5 1.5 0 0 1 14 2.5v10l-.008.153a1.5 1.5 0 0 1-1.339 1.34L12.5 14h-10l-.153-.008a1.5 1.5 0 0 1-1.34-1.339L1 12.5v-10a1.5 1.5 0 0 1 1.347-1.492L2.5 1h10zM2 12.5a.5.5 0 0 0 .5.5H7v-3H2zm6 .5h4.5a.5.5 0 0 0 .5-.5V10H8zM2 6v3h5V6zm6 0v3h5V6zM2.5 2a.5.5 0 0 0-.5.5V5h5V2zM8 5h5V2.5a.5.5 0 0 0-.5-.5H8z" /></Svg>;
export default SvgTable;