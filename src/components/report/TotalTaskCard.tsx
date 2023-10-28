import { colors, textStyles, typography } from '@theme';
import React, { memo } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
interface Props {
  totalVisit: string;
  totalHour: string;
  totalTask: string;
}
const TotalTaskCard = ({ totalVisit, totalHour, totalTask }: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View
      style={[
        commonStyles.shadow2,
        styles.card,
        { backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white },
      ]}>
      <View style={styles.totalVisitColumnRow}>
        <View style={styles.totalVisitColumn}>
          <Text style={[customTextStyles.startSecondLeftText(isDarkTheme), { right: 15 }]}>
            Total Visit
          </Text>
          <Text
            style={[customTextStyles.startLeftText(isDarkTheme), { right: 12 }, styles.centerText]}>
            {totalVisit}
          </Text>
        </View>
        <View style={styles.rect}>
          <View style={styles.rect1}></View>
        </View>
        <View style={styles.totalHour3Column}>
          <Text style={[customTextStyles.startSecondLeftText(isDarkTheme), { marginLeft: 20 }]}>
            Total Hour
          </Text>
          <Text style={[customTextStyles.startLeftText(isDarkTheme), styles.centerText]}>
            {totalHour}
          </Text>
        </View>
        <View style={styles.rect2}></View>
        <View style={styles.totalTaskColumn}>
          <Text style={[customTextStyles.startSecondLeftText(isDarkTheme), { right: 20 }]}>
            Total Task
          </Text>
          <Text
            style={[customTextStyles.startLeftText(isDarkTheme), styles.centerText, { right: 15 }]}>
            {totalTask}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(TotalTaskCard);

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 10,
    borderRadius: 15,
    marginBottom: '3%',
  },
  totalVisit: {
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  loremIpsum5: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginTop: 11,
    marginLeft: 23,
  },
  totalVisitColumn: {
    width: 72,
    marginBottom: 17,
  },
  rect: {
    width: 1,
    height: 51,
    backgroundColor: '#E6E6E6',
    marginLeft: 0,
    marginTop: 11,
  },
  rect1: {
    width: 1,
    height: 51,
    backgroundColor: '#E6E6E6',
  },
  totalHour3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  loremIpsum3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginTop: 11,
    marginLeft: 9,
  },
  totalHour3Column: {
    width: 72,
    marginLeft: 21,
    marginBottom: 17,
  },
  rect2: {
    width: 1,
    height: 51,
    backgroundColor: '#E6E6E6',
    marginLeft: 52,
    marginTop: 11,
  },
  totalTask: {
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  loremIpsum4: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginTop: 10,
    marginLeft: 24,
  },
  totalTaskColumn: {
    width: 72,
    marginLeft: 32,
    marginBottom: 17,
  },
  totalVisitColumnRow: {
    height: 62,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 27,
    marginRight: 27,
  },
  centerText: {
    marginLeft: 10, // Center text horizontally
  },
});
const customTextStyles = {
  startLeftText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold800,
    fontSize: 20,
    lineHeight: 30,
    width: responsiveWidth(50),
  }),
  startSecondLeftText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeRegular400,
    fontSize: 12,
    lineHeight: 18,
    width: responsiveWidth(60),
  }),
  compTaskCount: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold700,
    fontSize: 37,
    lineHeight: 38,
  }),
  compTaskText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    ...textStyles.medium12,
  }),
  penAndOngoingTaskCount: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold700,
    fontSize: 24,
    lineHeight: 30,
  }),
  penAndOngoingTaskText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    ...textStyles.medium12,
  }),
};
