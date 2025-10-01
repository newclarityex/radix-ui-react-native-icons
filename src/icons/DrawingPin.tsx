import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDrawingPin = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M9.621 1.136a.5.5 0 0 1 .707 0l3.536 3.535a.5.5 0 0 1-.707.707l-.653-.652-3.637 4.848 1.108 1.108a.5.5 0 1 1-.707.707L6.793 8.913v.001l-3.27 3.27a.5.5 0 0 1-.708-.706l3.27-3.27v-.002L3.612 5.732a.5.5 0 1 1 .707-.707l1.108 1.108 4.848-3.637-.653-.653a.5.5 0 0 1 0-.707M6.14 6.847 8.153 8.86l3.637-4.85-.802-.8z" /></Svg>;
export default SvgDrawingPin;