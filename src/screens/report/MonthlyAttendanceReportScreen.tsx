import { colors, textStyles, typography } from '@theme';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import AttendanceCardMonthly from 'src/components/report/AttendanceCardMonthly';
import SummaryCard from 'src/components/report/SummaryCard';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';

export default function MonthlyAttendanceReportScreen() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <ScreenWrapper>
      <View style={styles.dayStartBtnContainer}>
        <Text style={customTextStyles.startLeftText(isDarkTheme)}>
          Monthly Attendance Reports from All of Your Employees
        </Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        <SummaryCard />
      </View>
      <View style={{ paddingTop: 20, left: 5 }}>
        <AttendanceCardMonthly
          name={'Dianne Russell'}
          designation={'Operations'}
          isActive={false}
        />
      </View>
      <View style={{ paddingTop: 5, left: 5 }}>
        <AttendanceCardMonthly
          name={'Dianne Russell'}
          designation={'Operations'}
          isActive={false}
        />
      </View>
      <View style={{ paddingTop: 5, left: 5 }}>
        <AttendanceCardMonthly
          name={'Dianne Russell'}
          designation={'Operations'}
          isActive={false}
        />
      </View>
      <View style={{ paddingTop: 5, left: 5 }}>
        <AttendanceCardMonthly
          name={'Dianne Russell'}
          designation={'Operations'}
          isActive={false}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  dayStartBtnContainer: {
    ...commonStyles.rowSpaceBetween,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  titleBtn: {
    backgroundColor: ' rgba(102, 43, 242, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    ...commonStyles.rowStart,
  },
  titleBtnTxt: {
    color: colors.light.earthBlue,
    ...textStyles.semiBold13,
  },
});

const customTextStyles = {
  startLeftText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold800,
    fontSize: 20,
    lineHeight: 30,
    width: responsiveWidth(90),
  }),
};
