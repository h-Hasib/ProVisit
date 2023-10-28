import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}>
    <Circle cx={17} cy={17} r={17} fill="#CDD2DF" opacity={0.2} {...props} />
    <Circle cx={17} cy={17} r={13} fill="#CDD2DF" {...props} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.333 17 3.334 3.333 6.666-6.666"
    />
  </Svg>
);
export default SvgComponent;
