import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function Coffee() {
  return (
    <Svg width={63} height={65} viewBox="0 0 63 65" fill="none">
      <G opacity={0.1} stroke="#fff" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M21.723 14.815l1.762 7.418M29.141 13.053l1.762 7.418M36.56 11.29l1.762 7.419M19.312 62.41l40.802-9.692M31.205 59.585a20.97 20.97 0 01-16.298-15.722l-2.643-11.128 40.802-9.69 2.643 11.128a20.97 20.97 0 01-7.488 21.37" />
        <Path d="M53.066 23.044a7.625 7.625 0 019.181 5.657l.44 1.855a7.625 7.625 0 01-5.656 9.18l-.788.187" />
      </G>
    </Svg>
  );
}

export default Coffee;
