import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function Sweden() {
  return (
    <Svg width={25} height={16} viewBox="0 0 25 16" fill="none">
      <Rect x={0.5} width={24} height={16} rx={3} fill="#0052B4" />
      <Path fill="#FFE15A" d="M0.5 7H24.5V9H0.5z" />
      <Path transform="rotate(-90 7.5 16)" fill="#FFE15A" d="M7.5 16H23.5V18H7.5z" />
    </Svg>
  );
}

export default Sweden;
