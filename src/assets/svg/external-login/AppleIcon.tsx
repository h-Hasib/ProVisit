import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useAppSelector } from 'src/store/hooks';
import { colors } from 'src/theme/colors';

function AppleIcon() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const Color = {
    logo: isDarkTheme ? colors.dark.dark : colors.light.white,
    outerCircle: isDarkTheme ? '#ffffff' : '#283544',
  };
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="">
      <Path
        d="M24.375 13c0 6.279-5.09 11.375-11.375 11.375S1.625 19.279 1.625 13C1.625 6.715 6.715 1.625 13 1.625S24.375 6.715 24.375 13z"
        fill={Color.outerCircle}
      />
      <Path
        d="M18.332 10.122c-.062.036-1.54.8-1.54 2.494.07 1.933 1.865 2.61 1.895 2.61-.03.037-.27.923-.982 1.853-.565.801-1.192 1.608-2.143 1.608-.906 0-1.23-.533-2.275-.533-1.122 0-1.44.534-2.299.534-.951 0-1.625-.851-2.22-1.644-.774-1.039-1.431-2.668-1.455-4.233-.015-.829.155-1.644.588-2.336.612-.967 1.703-1.623 2.894-1.644.913-.029 1.726.584 2.283.584.534 0 1.532-.584 2.661-.584.488 0 1.788.137 2.593 1.29zM13 8.665c-.162-.757.287-1.514.704-1.997.534-.584 1.378-.98 2.105-.98a2.71 2.71 0 01-.774 2.04c-.472.584-1.284 1.024-2.034.937z"
        fill={Color.logo}
      />
    </Svg>
  );
}

export default AppleIcon;
