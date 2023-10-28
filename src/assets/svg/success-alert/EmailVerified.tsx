import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function EmailVerified() {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none">
      <Path
        opacity={0.2}
        d="M15.625 44.805v-22.93a3.125 3.125 0 013.125-3.125h62.5a3.125 3.125 0 013.125 3.125v22.93c0 32.812-27.852 43.672-33.398 45.508a2.813 2.813 0 01-1.954 0c-5.546-1.836-33.398-12.696-33.398-45.508z"
        fill="#fff"
      />
      <Path
        d="M15.625 44.805v-22.93a3.125 3.125 0 013.125-3.125h62.5a3.125 3.125 0 013.125 3.125v22.93c0 32.812-27.852 43.672-33.398 45.508a2.813 2.813 0 01-1.954 0c-5.546-1.836-33.398-12.696-33.398-45.508z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M67.188 40.625L44.258 62.5 32.812 51.562"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EmailVerified;
