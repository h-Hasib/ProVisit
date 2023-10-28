import * as React from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';

function FacebookIcon() {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none">
      <Circle cx={13} cy={13} r={11.375} fill="url(#paint0_linear_102_3099)" />
      <Path
        d="M17.236 16.479l.505-3.21h-3.16v-2.083c0-.879.44-1.736 1.856-1.736h1.438V6.717S16.57 6.5 15.324 6.5c-2.604 0-4.305 1.538-4.305 4.321v2.447H8.125v3.21h2.894v7.762a11.75 11.75 0 003.562 0V16.48h2.655z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_102_3099"
          x1={13}
          y1={1.625}
          x2={13}
          y2={24.3075}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#18ACFE" />
          <Stop offset={1} stopColor="#0163E0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default FacebookIcon;
