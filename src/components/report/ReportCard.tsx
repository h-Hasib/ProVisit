import { typography } from '@theme';
import React, { memo } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
interface Props {
  onPress?: () => void;
  title: string;
  description: string;
  svg: React.ReactElement<SvgProps>;
}

const ReportCard: React.FC<Props> = ({ title, description, svg, onPress }: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        commonStyles.shadow0,
        styles.card,
        { backgroundColor: isDarkTheme ? '#1B2E44' : '#FFF' },
      ]}>
      <View style={{ paddingRight: 10 }}>
        <Animated.View>{svg}</Animated.View>
      </View>
      <View>
        <Text style={[styles.title, { color: isDarkTheme ? '#FFFFFF' : '#1D1E25' }]}>{title}</Text>
        <Text style={[styles.description, { color: isDarkTheme ? '#9AA4C0' : '#6D7A9D' }]}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ReportCard);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 18,
    borderRadius: 15,
  },
  title: {
    fontFamily: typography.manropeRegular400,
    fontWeight: '700',
    fontSize: 14,
    fontStyle: 'normal',
    letterSpacing: 0.14,
  },
  description: {
    fontFamily: typography.manropeRegular400,
    fontWeight: '400',
    fontSize: 12,
    fontStyle: 'normal',
    letterSpacing: 0.12,
  },
});
