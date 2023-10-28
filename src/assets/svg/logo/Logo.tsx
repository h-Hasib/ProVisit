import * as React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
interface props {
  color: string;
}
function Logo({ color }: props) {
  return (
    <Svg width={164} height={120} viewBox="0 0 852 622" fill="none">
      <Path
        d="M486.24 57.506l-276.208 249.02L0 0h464.181a32.959 32.959 0 0118.654 5.816 33.003 33.003 0 0112.091 15.36 33.021 33.021 0 01-8.686 36.33z"
        fill={color}
      />
      <Path
        // style={{
        //   mixBlendMode: 'multiply',
        // }}
        d="M403.575 57.506a33.03 33.03 0 008.7-36.295 33.008 33.008 0 00-12.059-15.364A32.959 32.959 0 00381.59 0H0l178.447 260.463L403.575 57.506z"
        fill={color}
      />
      <Path
        d="M852 0L426 621.707l-79.367-115.892a158.313 158.313 0 01-27.422-95.392 158.291 158.291 0 0134.751-92.968L608.037 0H852z"
        fill={color}
      />
      <Path
        // style={{
        //   mixBlendMode: 'multiply',
        // }}
        d="M607.671 0L353.595 317.748a158.305 158.305 0 00-34.751 92.969 158.323 158.323 0 0027.423 95.392L425.634 622C341.504 394.545 607.671 0 607.671 0z"
        fill={color}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_588_563"
          x1={508.746}
          y1={-29.8777}
          x2={-18.5669}
          y2={290.057}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#BCD2EA" />
          <Stop offset={0.519343} stopColor="#E9F3FD" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_588_563"
          x1={383.422}
          y1={181.832}
          x2={101.64}
          y2={32.801}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B5D1EE" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_588_563"
          x1={864.466}
          y1={-60.5991}
          x2={163.211}
          y2={164.278}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={0.519343} stopColor="#E9F3FD" />
          <Stop offset={1} stopColor="#BCD2EA" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_588_563"
          x1={291.681}
          y1={669.533}
          x2={196.708}
          y2={397.352}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#B8D1ED" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Logo;
