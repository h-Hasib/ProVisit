// ReportTaskListScreen.tsx

import React from 'react';
import { View } from 'react-native';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import ReportSummary from 'src/components/report/ReportSummary';
import SummaryCard from 'src/components/report/SummaryCard';

export default function MonthlySummaryScreen() {
  return (
    <ScreenWrapper>
      <View style={{ paddingTop: 20 }}>
        <SummaryCard />
      </View>
      <View style={{ paddingTop: 20, left: 5 }}>
        <ReportSummary date={'1 July, 2023'} totalEmployee={3} totalVisit={5} duration={'1H 30M'} />
      </View>
      <View style={{ paddingTop: 10, left: 5 }}>
        <ReportSummary date={'1 July, 2023'} totalEmployee={3} totalVisit={5} duration={'1H 30M'} />
      </View>
      <View style={{ paddingTop: 10, left: 5 }}>
        <ReportSummary date={'1 July, 2023'} totalEmployee={3} totalVisit={5} duration={'1H 30M'} />
      </View>
      <View style={{ paddingTop: 10, left: 5 }}>
        <ReportSummary date={'1 July, 2023'} totalEmployee={3} totalVisit={5} duration={'1H 30M'} />
      </View>
    </ScreenWrapper>
  );
}
