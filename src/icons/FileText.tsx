import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileText = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M9.086 1a1.5 1.5 0 0 1 1.06.44l2.414 2.414.1.11a1.5 1.5 0 0 1 .34.95V12.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5v-10A1.5 1.5 0 0 1 3.5 1zM3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V4.914a.5.5 0 0 0-.084-.277l-.062-.076-2.415-2.415A.5.5 0 0 0 9.086 2zm7 8a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm-3-3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z" /></Svg>;
export default SvgFileText;