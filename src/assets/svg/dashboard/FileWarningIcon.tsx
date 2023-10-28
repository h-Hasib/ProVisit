import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#DFE3EC"
      d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20ZM2 20c0 9.941 8.059 18 18 18s18-8.059 18-18S29.941 2 20 2 2 10.059 2 20Z"
    />
    <Path
      fill="#E9AF59"
      d="M20 39a.962.962 0 0 1-1 .975 20 20 0 1 1 19.977-13.662c-.174.524-.756.778-1.27.578-.515-.2-.767-.78-.596-1.304a17.999 17.999 0 1 0-18.11 12.385c.55.03.999.476.999 1.028Z"
    />
    <Path
      stroke="#E9AF59"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 18.125v3.125M18.922 13.125 12.047 25a1.25 1.25 0 0 0 1.078 1.875h13.75A1.25 1.25 0 0 0 27.953 25l-6.875-11.875a1.24 1.24 0 0 0-2.156 0v0Z"
    />
    <Path fill="#E9AF59" d="M20 25a.937.937 0 1 0 0-1.875A.937.937 0 0 0 20 25Z" />
  </Svg>
);
export default SvgComponent;
