import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { useAppSelector } from 'src/store/hooks';

function CheckSquareSvg() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Rect width={40} height={40} rx={8} fill="#7D5AD0" fillOpacity={0.1} />
      {/* Backgroud */}
      <Rect
        width={40}
        height={40}
        rx={8}
        fill={isDarkTheme ? '#7D5AD0' : '#7d5ad0'}
        fillOpacity={0.1}
      />
      {/* ============ */}
      <Path
        opacity={0.2}
        d="M14.998 25.813l-.81-.811V14.188h11.624v11.624H14.998z"
        fill="#7D5AD0"
        stroke="#7D5AD0"
        strokeWidth={1.5}
      />
      <Path
        d="M13.438 21.195v-7.133a.624.624 0 01.624-.624h11.876a.624.624 0 01.625.624v11.876a.624.624 0 01-.625.625h-5.344"
        stroke="#7D5AD0"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 21.875l-5 5-2.5-2.5"
        stroke="#7D5AD0"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CheckSquareSvg;
