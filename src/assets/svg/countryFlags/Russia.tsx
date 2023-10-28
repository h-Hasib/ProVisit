import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function Russia() {
  return (
    <Svg width={25} height={16} viewBox="0 0 25 16" fill="none">
      <Rect x={0.5} width={24} height={16} rx={2} fill="#0052B4" />
      <Path d="M.5 10.286h24V14a2 2 0 01-2 2h-20a2 2 0 01-2-2v-3.714z" fill="#D80027" />
      <Path d="M.5 2a2 2 0 012-2h20a2 2 0 012 2v3.333H.5V2z" fill="#F8F8F8" />
    </Svg>
  );
}

export default Russia;
