import { colors } from '@theme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ViewStyle } from 'react-native';
import ShimmerPlaceHolder, { ShimmerPlaceholderProps } from 'react-native-shimmer-placeholder';
import { useAppSelector } from 'src/store/hooks';

interface SkeletonProps extends ShimmerPlaceholderProps {
  width: number | string;
  height: number | string;
  borderRadius?: number;
  style?: ViewStyle;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius,
  style,
  shimmerColors,
}) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <ShimmerPlaceHolder
      LinearGradient={LinearGradient}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        marginBottom: 10,
        ...style,
      }}
      shimmerColors={
        shimmerColors || [
          isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
          isDarkTheme ? 'rgba(0, 0, 0, 0.16)' : 'rgba(0,0,0,0.08)',
          isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
        ]
      }
    />
  );
};

export default Skeleton;
