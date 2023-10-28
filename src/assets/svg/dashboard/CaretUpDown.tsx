import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#6D7A9D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.75 16.5 12 21l5.25-4.5M6.75 7.5 12 3l5.25 4.5"
    />
  </Svg>
);
export default SvgComponent;
