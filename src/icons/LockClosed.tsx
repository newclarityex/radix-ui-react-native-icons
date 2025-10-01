import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLockClosed = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}><Path fill="currentColor" d="M7.501.978c1.074 0 1.968.345 2.59 1.014.616.664.909 1.587.909 2.642V6h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V4.636c0-1.055.293-1.979.91-2.643.622-.67 1.517-1.015 2.591-1.015M3 13h9V7H3zM7.501 1.978c-.855 0-1.461.27-1.857.696C5.243 3.105 5 3.76 5 4.636V6h5V4.634c0-.877-.241-1.531-.642-1.962-.395-.426-1.001-.694-1.857-.694" /></Svg>;
export default SvgLockClosed;