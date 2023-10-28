import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SquareFour() {
  return (
    <Svg width={63} height={65} viewBox="0 0 63 65" fill="none">
      <G opacity={0.1} stroke="#fff" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M28.608 19.057l-14.837 3.524 3.524 14.837 14.837-3.524-3.524-14.837zM50.864 13.771l-14.837 3.524 3.524 14.837 14.837-3.524-3.524-14.837zM33.894 41.313l-14.837 3.524 3.524 14.837 14.837-3.524-3.524-14.837zM56.15 36.027L41.313 39.55l3.523 14.837 14.838-3.524-3.524-14.837z" />
      </G>
    </Svg>
  );
}

export default SquareFour;
