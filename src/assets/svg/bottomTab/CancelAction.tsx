import { colors } from '@theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useAppSelector } from 'src/store/hooks';

function CancelAction() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const Color = {
    buttonColor: isDarkTheme ? colors.dark.white : colors.light.white,
    borderColor: isDarkTheme ? colors.dark.dark : '#210B55',
  };
  return (
    <Svg width={75} height={75} viewBox="0 0 60 60" fill="none">
      <Path
        d="M30 52.5c12.426 0 22.5-10.074 22.5-22.5S42.426 7.5 30 7.5 7.5 17.574 7.5 30 17.574 52.5 30 52.5z"
        fill={Color.buttonColor}
        stroke={Color.borderColor}
        strokeWidth={6.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M37.5 22.5l-15 15M37.5 37.5l-15-15"
        stroke="#F45757"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CancelAction;
