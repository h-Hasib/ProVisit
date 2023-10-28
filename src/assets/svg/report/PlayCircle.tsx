import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function PlayCircle() {
  return (
    <Svg width={63} height={65} viewBox="0 0 63 65" fill="none">
      <G opacity={0.1} stroke="#fff" strokeWidth={5}>
        <Path
          d="M42.008 58.978c12.292-2.92 19.89-15.25 16.97-27.542-2.92-12.291-15.25-19.89-27.542-16.97-12.291 2.92-19.889 15.25-16.97 27.542 2.92 12.291 15.25 19.89 27.542 16.97z"
          strokeMiterlimit={10}
        />
        <Path
          d="M44.141 34.96l-12.89-4.775 3.524 14.837 9.366-10.062z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

export default PlayCircle;
