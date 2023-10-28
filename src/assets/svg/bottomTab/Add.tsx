import * as React from 'react';
import Svg, { Circle, Defs, G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent({ borderColor }: { borderColor: string }) {
  return (
    <Svg
      width={92}
      height={92}
      viewBox="0 0 92 92"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <Path d="M80 42a33.999 33.999 0 11-68 0h68z" fill={borderColor || '#d9d9d9'} />
      <G filter="url(#filter0_d_8_10)">
        <G filter="url(#filter1_d_8_10)">
          <Circle cx={46} cy={42} r={30} fill="#662BF2" />
        </G>
        <Path
          d="M37.837 42h16.5M46.087 33.75v16.5"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default SvgComponent;
