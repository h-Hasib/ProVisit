import { colors, textStyles, typography } from '@theme';
import React from 'react';
import { ScrollView, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Header from 'src/components/common/Header';
import TabComponent from 'src/components/common/TabComponent';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import DailySummaryScreen from './DailySummaryScreen';
import MonthlySummaryScreen from './MonthlySummaryScreen';

const tabs = [
  { name: 'Daily', content: <DailySummaryScreen /> },
  { name: 'Monthly', content: <MonthlySummaryScreen /> },
];

export default function ReportSummaryScreen() {
  const { isDarkTheme } = useAppSelector(state => state.app);

  return (
    <ScreenWrapper>
      <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
        <Header title="Reports Summary" />
      </View>
      <View style={styles.dayStartBtnContainer}>
        <Text style={customTextStyles.startLeftText(isDarkTheme)}>
          All your Task & Visit Reports now in one place
        </Text>
      </View>
      <ScrollView style={customStyles.contentContainer(isDarkTheme)}>
        <TabComponent tabs={tabs} />
        {/* <View style={{ height: 100 }} /> */}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  dayStartBtnContainer: {
    ...commonStyles.rowSpaceBetween,
    paddingHorizontal: 20,
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

const customStyles = {
  contentContainer: (isDarkTheme: boolean) => ({
    flex: 1,
    backgroundColor: isDarkTheme ? colors.dark.background : colors.light.background,
    paddingHorizontal: 16,
    paddingTop: 20,
  }),
};
