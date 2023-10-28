import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { useAppSelector } from 'src/store/hooks';

function BriefcaseSvg() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      {/* Backgroud */}
      <Rect
        width={40}
        height={40}
        rx={8}
        fill={isDarkTheme ? '#7d5ad0' : '#2e64ef'}
        fillOpacity={0.1}
      />
      {/* ============ */}
      <Path
        opacity={0.2}
        d="M26.75 21.108v5.017h-13.5V21.11A15.617 15.617 0 0020 22.625c2.34.003 4.646-.518 6.75-1.517z"
        fill="#2E64EF"
        stroke="#2E64EF"
        strokeWidth={1.5}
      />
      <Path
        d="M26.875 15.625h-13.75a.625.625 0 00-.625.625v10c0 .345.28.625.625.625h13.75c.345 0 .625-.28.625-.625v-10a.625.625 0 00-.625-.625zM23.125 15.625v-1.25a1.25 1.25 0 00-1.25-1.25h-3.75a1.25 1.25 0 00-1.25 1.25v1.25"
        stroke="#2E64EF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.5 19.867a14.946 14.946 0 01-7.5 2.008 14.866 14.866 0 01-7.5-2.008M19.063 19.375h1.875"
        stroke="#2E64EF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BriefcaseSvg;
