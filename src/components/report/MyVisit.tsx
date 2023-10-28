import { colors, textStyles, typography } from '@theme';
import { ArrowUpRight } from 'phosphor-react-native';
import React, { memo } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import TimerCard from '../common/TimerCard';

interface Props {
  title: string;
  date: string;
  reason: string;
  status: string;
}
const getStatusBoxStyle = (statusText: string) => {
  switch (statusText) {
    case 'COMPLETED':
      return styles.completeBox;
    case 'TO-DO':
      return styles.todoBox;
    case 'IN PROGRESS':
      return styles.inprogressBox;
    default:
      return {};
  }
};

const MyVisit = ({ title, date, reason, status }: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  let statusText = '';
  let statusColor = '';

  switch (status) {
    case 'COMPLETED':
      statusText = 'COMPLETED';
      statusColor = '#0DB050';
      break;
    case 'TO-DO':
      statusText = 'TO-DO';
      statusColor = '#E9AF59';
      break;
    case 'IN PROGRESS':
      statusText = 'IN PROGRESS';
      statusColor = '#2E64EF';
      break;
    default:
      break;
  }

  return (
    <View
      style={[
        commonStyles.shadow2,
        styles.card,
        { backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white },
      ]}>
      <View style={[commonStyles.shadow0, getStatusBoxStyle(statusText)]}>
        <Text style={[textStyles.bold10, { color: statusColor }]}>{statusText}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={[customTextStyles.startLeftText(isDarkTheme), { paddingBottom: 8 }]}>
            {title}
          </Text>
          <Text style={customTextStyles.startSecondLeftText(isDarkTheme)}>{date}</Text>
        </View>
        <View style={[commonStyles.rowStart, { alignItems: 'center' }]}>
          <Text style={[textStyles.semiBold13, { color: colors.light.blue, marginRight: 10 }]}>
            {i18n.t('See_Map')}
          </Text>
          <ArrowUpRight size={16} weight="bold" color={colors.light.blue} />
        </View>
      </View>
      <View style={[commonStyles.rowSpaceBetween, { marginVertical: 5 }]}>
        <View style={commonStyles.rowStart}>
          <Text
            numberOfLines={1}
            style={[
              textStyles.medium13,
              {
                color: isDarkTheme ? '#2E64EF' : '#2E64EF',
                marginLeft: 5,
                width: '68%',
              },
            ]}>
            {reason}
          </Text>
        </View>
      </View>
      <TimerCard
        leftColumnName={'Start Time'}
        leftColumnValue={'11:48 pm'}
        rightColumnName={'Duration'}
        rightColumnValue={'2H 40M'}
      />
    </View>
  );
};

export default memo(MyVisit);

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    padding: 16,
    borderRadius: 12,
    marginBottom: '3%',
    marginLeft: 10,
    marginRight: 10,
  },
  completeBox: {
    borderRadius: 16,
    backgroundColor: '#0DB0501A',
    borderColor: '#0DB050',
    width: 110,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginBottom: 18,
  },
  todoBox: {
    borderRadius: 16,
    backgroundColor: 'rgba(233, 175, 89, 0.1)',
    borderColor: '#E9AF59',
    borderWidth: 1,
    width: 110,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  inprogressBox: {
    borderRadius: 16,
    borderColor: '#2E64EF',
    borderWidth: 1,
    backgroundColor: 'rgba(46, 100, 239, 0.1)',
    width: 110,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
});

const customTextStyles = {
  startLeftText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold800,
    fontSize: 14,
    lineHeight: 22.4,
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
  titleText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold700,
    fontSize: 20,
    lineHeight: 30,
  }),
};
