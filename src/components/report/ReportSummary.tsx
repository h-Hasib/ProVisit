import { colors, textStyles } from '@theme';
import { Briefcase, Clock } from 'phosphor-react-native';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import AvatarCount from '../common/AvatarCount';
import Divider from '../common/Divider';
interface Props {
  date: string;
  image1?: string;
  image2?: string;
  totalEmployee: number;
  totalVisit: number;
  duration: string;
}
const ReportSummary = ({ date, totalVisit, duration }: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View
      style={[
        commonStyles.shadow0,
        styles.card,
        { backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white },
      ]}>
      <View style={[commonStyles.rowSpaceBetween, { marginBottom: '5%' }]}>
        <View>
          <Text
            style={[
              textStyles.bold14,
              { color: isDarkTheme ? colors.dark.white : colors.light.dark },
            ]}>
            {date}
          </Text>
          {/* Extract Day Name from Date */}
          <Text
            style={[
              textStyles.medium13,
              { color: isDarkTheme ? colors.dark.grey1 : colors.light.grey1 },
            ]}>
            Saturday
          </Text>
        </View>
        <View style={commonStyles.rowStart}>
          <AvatarCount data={[]} />
        </View>
      </View>
      <Divider />
      <View style={[commonStyles.rowStart, { marginTop: 10 }]}>
        <View
          style={[
            commonStyles.shadow0,
            commonStyles.rowStart,
            styles.surface,
            { backgroundColor: isDarkTheme ? '#F0E9FE1A' : '#F0E9FE' },
          ]}>
          <Briefcase size={14} color="#662BF2" />
          <Text style={[textStyles.semiBold12, { paddingLeft: 2, color: '#662BF2' }]}>Visit: </Text>
          <Text style={[textStyles.semiBold12, { color: '#662BF2' }]}>{totalVisit}</Text>
        </View>
        <View
          style={[
            commonStyles.shadow0,
            commonStyles.rowStart,
            styles.surface,
            { backgroundColor: isDarkTheme ? '#EAEFFD1A' : '#EAEFFD' },
          ]}>
          <Clock size={14} color="#662BF2" />
          <Text style={[textStyles.semiBold12, { paddingLeft: 2, color: '#662BF2' }]}>
            Duration:{' '}
          </Text>
          <Text style={[textStyles.semiBold12, { color: '#662BF2' }]}>{duration}</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(ReportSummary);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderLeftColor: '#662BF2',
    borderLeftWidth: 2,
    borderRadius: 15,
    marginBottom: '3%',
    width: 350,
    height: 123,
  },
  overLap1: {
    position: 'absolute',
    top: 0,
    right: 30,
  },
  overLap2: {
    position: 'absolute',
    top: 0,
    right: 15,
  },
  surface: {
    marginRight: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    paddingTop: 4,
    borderRadius: 16,
  },
});
