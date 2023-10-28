import { colors } from '@theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useAppSelector } from 'src/store/hooks';

function WhiteLine2() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <Svg width={30} height={108} viewBox="0 0 30 108" fill="none">
      <Path
        d="M142.398 71.198c0 39.292-31.853 71.145-71.146 71.145C31.96 142.343.107 110.49.107 71.198.107 31.906 31.96.053 71.252.053c39.293 0 71.146 31.853 71.146 71.145zm-140.709 0c0 38.419 31.145 69.563 69.563 69.563 38.419 0 69.563-31.144 69.563-69.563 0-38.419-31.144-69.563-69.563-69.563-38.418 0-69.563 31.144-69.563 69.563z"
        fill={isDarkTheme ? colors.dark.dark : colors.light.white}
      />
    </Svg>
  );
}

export default WhiteLine2;
