import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStack = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}><Path fill="currentColor" d="M12.838 8.277a.5.5 0 0 1 .498.843l-.082.06-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25-.082-.06a.5.5 0 0 1 .498-.843l.092.042 5.246 3.1 5.246-3.1zM7.306 1.79a.5.5 0 0 1 .448.03l5.5 3.25a.5.5 0 0 1 0 .862l-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25a.5.5 0 0 1 0-.862l5.5-3.25zM2.982 5.5 7.5 8.17 12.017 5.5 7.5 2.83z" /></Svg>;
export default SvgStack;