import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}>
    <Path
      fill="#DFE3EC"
      d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20ZM2 20c0 9.941 8.059 18 18 18s18-8.059 18-18S29.941 2 20 2 2 10.059 2 20Z"
    />
    <Path
      fill="#0DB050"
      d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20ZM2 20c0 9.941 8.059 18 18 18s18-8.059 18-18S29.941 2 20 2 2 10.059 2 20Z"
    />
    <Path
      stroke="#0DB050"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m26.875 15.625-8.75 8.75L13.75 20"
    />
  </Svg>
);
export default SvgComponent;
