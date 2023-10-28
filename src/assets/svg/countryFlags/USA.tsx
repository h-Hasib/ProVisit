import * as React from 'react';
import Svg, { G, Mask, Path } from 'react-native-svg';

function USA() {
  return (
    <Svg width={24} height={18} viewBox="0 0 24 18" fill="none">
      <Mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={18}>
        <Path fill="#fff" d="M0 0H24V18H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 4a4 4 0 014-4h16a4 4 0 014 4v10a4 4 0 01-4 4H4a4 4 0 01-4-4V4z"
          fill="#F7FCFF"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 11v1.5h24V11H0zM0 13.75v1.5h24v-1.5H0zM0 5.5V7h24V5.5H0zM0 16.5V18h24v-1.5H0zM0 8.25v1.5h24v-1.5H0zM0 0v1.5h24V0H0zM0 2.75v1.5h24v-1.5H0z"
          fill="#E31D1C"
        />
        <Path fill="#2E42A5" d="M0 0H15V9.75H0z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.292 2.204l-.545.382.184-.68-.484-.43h.632l.212-.554.248.554h.539l-.423.43.163.68-.526-.382zm3 0l-.545.382.184-.68-.484-.43h.632L4.29.922l.248.554h.539l-.423.43.163.68-.526-.382zm2.455.382l.545-.382.526.382-.163-.68.423-.43h-.539L7.291.922l-.212.554h-.632l.484.43-.184.68zm3.544-.382l-.544.382.184-.68-.484-.43h.632l.212-.554.248.554h.539l-.423.43.163.68-.527-.382zM.747 5.586l.545-.382.526.382-.163-.68.423-.43h-.539l-.248-.554-.212.554H.447l.484.43-.184.68zm3.545-.382l-.545.382.184-.68-.484-.43h.632l.212-.554.248.554h.539l-.423.43.163.68-.526-.382zm2.455.382l.545-.382.526.382-.163-.68.423-.43h-.539l-.248-.554-.212.554h-.632l.484.43-.184.68zm3.544-.382l-.544.382.184-.68-.484-.43h.632l.212-.554.248.554h.539l-.423.43.163.68-.527-.382zM.747 8.586l.545-.382.526.382-.163-.68.423-.43h-.539l-.248-.554-.212.554H.447l.484.43-.184.68zm3.545-.382l-.545.382.184-.68-.484-.43h.632l.212-.554.248.554h.539l-.423.43.163.68-.526-.382zm2.455.382l.545-.382.526.382-.163-.68.423-.43h-.539l-.248-.554-.212.554h-.632l.484.43-.184.68zm3.544-.382l-.544.382.184-.68-.484-.43h.632l.212-.554.248.554h.539l-.423.43.163.68-.527-.382zm2.456-5.618l.544-.382.527.382-.163-.68.423-.43h-.539l-.248-.554-.212.554h-.632l.484.43-.184.68zm.544 2.618l-.544.382.184-.68-.484-.43h.632l.212-.554.248.554h.539l-.423.43.163.68-.527-.382zm-.544 3.382l.544-.382.527.382-.163-.68.423-.43h-.539l-.248-.554-.212.554h-.632l.484.43-.184.68zM2.792 3.704l-.545.382.184-.68-.484-.43h.632l.212-.554.248.554h.539l-.423.43.163.68-.526-.382zm2.455.382l.545-.382.526.382-.163-.68.423-.43h-.539l-.248-.554-.212.554h-.632l.484.43-.184.68zm3.545-.382l-.545.382.184-.68-.484-.43h.632l.212-.554.248.554h.539l-.423.43.163.68-.526-.382zM2.247 7.086l.545-.382.526.382-.163-.68.423-.43h-.539l-.248-.554-.212.554h-.632l.484.43-.184.68zm3.545-.382l-.545.382.184-.68-.484-.43h.632l.212-.554.248.554h.539l-.423.43.163.68-.526-.382zm2.455.382l.545-.382.526.382-.163-.68.423-.43h-.539l-.248-.554-.212.554h-.632l.484.43-.184.68zm3.544-3.382l-.544.382.184-.68-.484-.43h.632l.212-.554.248.554h.539l-.423.43.163.68-.527-.382zm-.544 3.382l.544-.382.527.382-.163-.68.423-.43h-.539l-.248-.554-.212.554h-.632l.484.43-.184.68z"
          fill="#F7FCFF"
        />
      </G>
    </Svg>
  );
}

export default USA;