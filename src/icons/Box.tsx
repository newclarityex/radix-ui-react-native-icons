import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBox = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M12.653 1.008A1.5 1.5 0 0 1 14 2.5v10l-.008.153a1.5 1.5 0 0 1-1.339 1.34L12.5 14h-10l-.153-.008a1.5 1.5 0 0 1-1.34-1.339L1 12.5v-10a1.5 1.5 0 0 1 1.347-1.492L2.5 1h10zM2.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5z" /></Svg>;
export default SvgBox;