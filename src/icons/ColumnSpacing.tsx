import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgColumnSpacing = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M7.5 1a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 .5-.5m4.182 4.182a.45.45 0 0 1 .566-.058l.07.058 2 2 .058.07a.45.45 0 0 1-.058.566l-2 2a.45.45 0 0 1-.636-.636l1.231-1.232H9.5a.45.45 0 0 1 0-.9h3.413l-1.231-1.232-.058-.07a.45.45 0 0 1 .058-.566m-8.93-.058a.45.45 0 0 1 .624.624l-.058.07L2.087 7.05H5.5l.09.01a.45.45 0 0 1 0 .88l-.09.01H2.087l1.231 1.232.058.07a.451.451 0 0 1-.624.624l-.07-.058-2-2a.45.45 0 0 1 0-.636l2-2z" /></Svg>;
export default SvgColumnSpacing;