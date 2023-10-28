import { colors } from '@theme';
import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from 'src/components/common/Header';
import TabComponent from 'src/components/common/TabComponent';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import { useAppSelector } from 'src/store/hooks';
import MonthlyAttendanceReportScreen from './MonthlyAttendanceReportScreen';
import TodayAttendanceReportScreen from './TodayAttendanceReportScreen';
import YearlyAttendanceReportScreen from './YearlyAttendanceReportScreen';

const tabs = [
  { name: 'Today', content: <TodayAttendanceReportScreen /> },
  { name: 'Monthly', content: <MonthlyAttendanceReportScreen /> },
  { name: 'Yearly', content: <YearlyAttendanceReportScreen /> },
];

export default function AttendanceReportScreen() {
  const { isDarkTheme } = useAppSelector(state => state.app);

  return (
    <ScreenWrapper>
      <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
        <Header title="Attendance Reports" />
      </View>
      <ScrollView style={customStyles.contentContainer(isDarkTheme)}>
        <TabComponent tabs={tabs} />
        {/* <View style={{ height: 100 }} /> */}
      </ScrollView>
    </ScreenWrapper>
  );
}

const customStyles = {
  contentContainer: (isDarkTheme: boolean) => ({
    flex: 1,
    backgroundColor: isDarkTheme ? colors.dark.background : colors.light.background,
    paddingHorizontal: 16,
    paddingTop: 20,
  }),
};
