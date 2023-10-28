import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function Germany() {
  return (
    <Svg width={25} height={16} viewBox="0 0 25 16" fill="none">
      <Rect x={0.5} width={24} height={16} rx={2} fill="#D80027" />
      <Path d="M.5 10.285h24V14a2 2 0 01-2 2h-20a2 2 0 01-2-2v-3.714z" fill="#E9AF59" />
      <Path d="M.5 2a2 2 0 012-2h20a2 2 0 012 2v3.333H.5V2z" fill="#1F1F1F" />
    </Svg>
  );
}

export default Germany;
