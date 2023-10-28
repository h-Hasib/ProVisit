import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { useAppSelector } from 'src/store/hooks';

function UserSvg() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      {/* Backgroud */}
      <Rect
        width={40}
        height={40}
        rx={8}
        fill={isDarkTheme ? '#208CE9' : '#208ce9'}
        fillOpacity={0.1}
      />
      {/* ============ */}
      <Path
        opacity={0.2}
        d="M24.25 17.5a4.25 4.25 0 11-8.5 0 4.25 4.25 0 018.5 0z"
        fill={isDarkTheme ? '#208ce9' : '#208CE9'}
        stroke="#208CE9"
        strokeWidth={1.5}
      />
      <Path
        d="M20 22.5a5 5 0 100-10 5 5 0 000 10z"
        stroke="#208CE9"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M12.422 26.875a8.75 8.75 0 0115.156 0"
        stroke="#208CE9"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default UserSvg;
