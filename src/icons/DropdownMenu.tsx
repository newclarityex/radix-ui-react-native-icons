import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDropdownMenu = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M14.581 11.109a.4.4 0 0 1 0 .783l-.081.009h-7a.4.4 0 0 1 0-.801h7zm0-2a.4.4 0 0 1 0 .783L14.5 9.9h-7a.401.401 0 0 1 0-.801h7zM2.5 9.25 0 6h5zM14.581 7.11a.4.4 0 0 1 0 .783L14.5 7.9h-7a.401.401 0 0 1 0-.801h7zm0-2a.4.4 0 0 1 0 .783L14.5 5.9h-7a.401.401 0 0 1 0-.801h7zm0-2a.4.4 0 0 1 0 .783l-.081.009h-7a.401.401 0 0 1 0-.801h7z" /></Svg>;
export default SvgDropdownMenu;