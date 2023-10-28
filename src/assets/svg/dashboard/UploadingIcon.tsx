import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#DFE3EC"
      d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20ZM2 20c0 9.941 8.059 18 18 18s18-8.059 18-18S29.941 2 20 2 2 10.059 2 20Z"
    />
    <Path
      fill="#2E64EF"
      d="M20 39c0 .552-.448 1.003-1 .975a20.001 20.001 0 1 1 13.862-35.29c.423.355.445.99.069 1.394-.376.405-1.007.426-1.432.073a18 18 0 1 0-12.498 31.82c.55.03.999.476.999 1.028Z"
    />
    <Path
      stroke="#9AA4C0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m25.625 14.375-11.25 11.25M25.625 25.625l-11.25-11.25"
    />
  </Svg>
);
export default SvgComponent;
