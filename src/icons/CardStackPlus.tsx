import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCardStackPlus = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M12.5 2A1.5 1.5 0 0 1 14 3.5v6c0 .653-.418 1.206-1 1.412v.588a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5v-.588c-.582-.206-1-.76-1-1.412v-6A1.5 1.5 0 0 1 2.5 2zM3 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V11H3zM2.5 3a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zm5 1a.5.5 0 0 1 .5.5V6h1.5a.5.5 0 0 1 0 1H8v1.5a.5.5 0 0 1-1 0V7H5.5a.5.5 0 0 1 0-1H7V4.5a.5.5 0 0 1 .5-.5" /></Svg>;
export default SvgCardStackPlus;