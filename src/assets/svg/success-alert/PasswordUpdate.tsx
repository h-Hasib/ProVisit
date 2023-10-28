import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PasswordUpdate() {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none">
      <Path
        opacity={0.2}
        d="M18.75 36.375h62.5a1.125 1.125 0 011.125 1.125v43.75a1.125 1.125 0 01-1.125 1.125h-62.5c-.298 0-.584-.118-.796-.33l-1.41 1.411 1.41-1.41a1.125 1.125 0 01-.329-.796V37.5a1.125 1.125 0 011.125-1.125zm25.798 26.471A9.812 9.812 0 1055.451 46.53a9.812 9.812 0 00-10.903 16.317z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={4}
      />
      <Path
        d="M50 62.5a7.813 7.813 0 100-15.625A7.813 7.813 0 0050 62.5zM50 62.5v9.375"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M81.25 34.375h-62.5a3.125 3.125 0 00-3.125 3.125v43.75c0 1.726 1.4 3.125 3.125 3.125h62.5c1.726 0 3.125-1.4 3.125-3.125V37.5c0-1.726-1.4-3.125-3.125-3.125zM35.938 34.375V20.312a14.063 14.063 0 0128.124 0"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PasswordUpdate;
