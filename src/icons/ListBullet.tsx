import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgListBullet = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M1.5 9.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m12.1.26a.5.5 0 0 1 0 .98l-.1.01h-9a.5.5 0 1 1 0-1h9zM1.5 6.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m12.1.26a.5.5 0 0 1 0 .98l-.1.01h-9a.5.5 0 0 1 0-1h9zM1.5 3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m12.1.26a.5.5 0 0 1 0 .98l-.1.01h-9a.5.5 0 0 1 0-1h9z" /></Svg>;
export default SvgListBullet;