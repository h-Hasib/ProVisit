import * as React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';

interface Props {
  size: number;
  color?: string;
}

function SadEmoji({ size, color = 'red' }: Props) {
  return (
    <Svg width={size} height={size} viewBox={'0 0 280 280'}>
      <G
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="none"
        fillRule="nonzero"
        opacity={1}>
        <Path
          d="M45 90C20.187 90 0 69.813 0 45S20.187 0 45 0s45 20.187 45 45-20.187 45-45 45zm0-83C24.047 7 7 24.047 7 45s17.047 38 38 38 38-17.047 38-38S65.953 7 45 7z"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={color}
          fillRule="nonzero"
          opacity={1}
        />
        <Circle
          cx={30.85}
          cy={33.68}
          r={7}
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={color}
          fillRule="nonzero"
          opacity={1}
        />
        <Circle
          cx={59.15}
          cy={33.68}
          r={7}
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={color}
          fillRule="nonzero"
          opacity={1}
        />
        <Path
          d="M61.691 65.942a3.49 3.49 0 01-2.212-.789c-4.136-3.379-9.143-5.165-14.479-5.165s-10.344 1.786-14.479 5.164a3.5 3.5 0 11-4.429-5.42c5.322-4.35 12.038-6.744 18.908-6.744s13.585 2.395 18.907 6.743a3.5 3.5 0 01-2.216 6.211z"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={color}
          fillRule="nonzero"
          opacity={1}
        />
      </G>
    </Svg>
  );
}

export default SadEmoji;
