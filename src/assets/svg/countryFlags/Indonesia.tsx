import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function Indonesia() {
  return (
    <Svg width={25} height={16} viewBox="0 0 25 16" fill="none">
      <Rect x={0.5} width={24} height={16} rx={2} fill="#EA4646" />
      <Path d="M.5 8h24v6a2 2 0 01-2 2h-20a2 2 0 01-2-2V8z" fill="#F8F8F8" />
    </Svg>
  );
}

export default Indonesia;
