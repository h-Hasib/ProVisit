import { colors, textStyles } from '@theme';
import { CalendarCheck, CalendarX } from 'phosphor-react-native';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Userpic } from 'react-native-userpic';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import TimerCard from '../common/TimerCard';
interface Props {
  name: string;
  image?: string;
  designation: string;
  isActive: boolean;
}
const AttendanceCardMonthly = ({ name, image, designation, isActive }: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View
      style={[
        commonStyles.shadow2,
        styles.card,
        { backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white },
      ]}>
      <View style={[commonStyles.rowStart, { marginBottom: 30 }]}>
        <View>
          {image ? (
            <Userpic source={{ uri: image }} size={40} colorize={true} />
          ) : (
            <Userpic name={name} size={40} colorize={true} />
          )}
          <View style={[styles.isActive, { backgroundColor: isActive ? '#0DB050' : '#233852' }]} />
        </View>

        <View style={{ paddingLeft: 8 }}>
          <Text
            numberOfLines={1}
            style={[
              textStyles.bold16,
              { color: isDarkTheme ? colors.dark.white : colors.light.dark, width: 140 },
            ]}>
            {name}
          </Text>
          <Text
            style={[
              textStyles.regular12,
              { color: isDarkTheme ? colors.dark.grey1 : colors.light.grey1 },
            ]}>
            {designation}
          </Text>
        </View>
      </View>
      <TimerCard
        leftIcon={<CalendarCheck size={32} weight="bold" color={colors.light.grey2} />}
        rightIcon={<CalendarX size={32} weight="bold" color={colors.light.grey2} />}
        leftColumnName={'Present'}
        leftColumnValue={'25 Days'}
        rightColumnName={'Absent'}
        rightColumnValue={'2 Days'}
      />
    </View>
  );
};

export default memo(AttendanceCardMonthly);

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 15,
    marginBottom: '3%',
  },
  isActive: {
    position: 'absolute',
    top: 28,
    right: 0,
    width: 11,
    height: 11,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FFF',
  },
});
