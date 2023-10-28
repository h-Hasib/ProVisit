import { colors } from '@theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useAppSelector } from 'src/store/hooks';

function WhiteLine1() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <Svg width={110} height={47} viewBox="0 0 110 47" fill="none">
      <Path
        d="M109.379-33.485c0 43.915-35.6 79.516-79.515 79.516s-79.516-35.6-79.516-79.516c0-43.915 35.6-79.515 79.516-79.515 43.915 0 79.515 35.6 79.515 79.515zm-158.07 0c0 43.385 35.17 78.554 78.555 78.554 43.384 0 78.554-35.17 78.554-78.554s-35.17-78.554-78.554-78.554c-43.385 0-78.555 35.17-78.555 78.554z"
        fill={isDarkTheme ? colors.dark.dark : colors.light.white}
      />
    </Svg>
  );
}

export default WhiteLine1;
