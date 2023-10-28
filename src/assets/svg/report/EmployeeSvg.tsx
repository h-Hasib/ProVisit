import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { useAppSelector } from 'src/store/hooks';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function EmployeeSvg() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      {/* Backgroud */}
      <Rect
        width={40}
        height={40}
        rx={8}
        fill={isDarkTheme ? '#0db050' : '#0DB050'}
        fillOpacity={0.1}
      />
      {/* ============ */}
      <Path
        opacity={0.2}
        d="M20.188 18.438a3.313 3.313 0 11-6.626 0 3.313 3.313 0 016.626 0z"
        fill="#0DB050"
        stroke="#0DB050"
        strokeWidth={1.5}
      />
      <Path
        d="M16.875 22.5a4.062 4.062 0 100-8.125 4.062 4.062 0 000 8.125z"
        stroke="#0DB050"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M22.14 14.523c.36-.097.73-.147 1.102-.148a4.062 4.062 0 010 8.125"
        stroke="#0DB050"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.25 25.422a6.875 6.875 0 0111.25 0M23.242 22.5a6.868 6.868 0 015.625 2.922"
        stroke="#0DB050"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EmployeeSvg;
