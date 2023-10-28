import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { useAppSelector } from 'src/store/hooks';

function CalenderBlankSvg() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      {/* Backgroud */}
      <Rect
        width={40}
        height={40}
        rx={8}
        fill={isDarkTheme ? '#e9af59' : '#E9AF59'}
        fillOpacity={0.1}
      />
      {/* ============ */}
      <Path
        opacity={0.2}
        d="M26.125 13.875v2.25h-12.25v-2.25h12.25z"
        fill="#E9AF59"
        stroke="#E9AF59"
        strokeWidth={1.5}
      />
      <Path
        d="M26.25 13.125h-12.5a.625.625 0 00-.625.625v12.5c0 .345.28.625.625.625h12.5c.345 0 .625-.28.625-.625v-12.5a.625.625 0 00-.625-.625zM23.75 11.875v2.5M16.25 11.875v2.5M13.125 16.875h13.75"
        stroke="#E9AF59"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CalenderBlankSvg;
