import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function France() {
  return (
    <Svg width={25} height={16} viewBox="0 0 25 16" fill="none">
      <Rect x={0.5} width={24} height={16} rx={2} fill="#EF3636" />
      <Path fill="#F8F8F8" d="M8.41992 0H16.42392V16H8.41992z" />
      <Path d="M.5 2a2 2 0 012-2h6v16h-6a2 2 0 01-2-2V2z" fill="#0052B4" />
    </Svg>
  );
}

export default France;
