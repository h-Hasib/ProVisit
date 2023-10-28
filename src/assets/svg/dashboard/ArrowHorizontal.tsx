import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#6D7A9D"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.938 6.75 1.688 9M16.313 9l-2.25 2.25M1.688 9h14.624"
    />
  </Svg>
);
export default SvgComponent;
