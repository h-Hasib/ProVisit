import { colors, textStyles } from '@theme';
import { Briefcase, CheckSquareOffset, Clock } from 'phosphor-react-native';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import AvatarCount from '../common/AvatarCount';
import Divider from '../common/Divider';
interface Props {
  teamName: string;
  image1?: string;
  image2?: string;
  totalEmployee?: number;
  totalVisit?: number;
  ongoingVisit?: number;
  totalTask: number;
  duration: string;
}
const TeamReport = ({ teamName, totalVisit, ongoingVisit, totalTask, duration }: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View
      style={[
        commonStyles.shadow1,
        styles.card,
        { backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white },
      ]}>
      <View style={[commonStyles.rowStart, { marginBottom: '5%' }]}>
        <View>
          <AvatarCount />
        </View>
        <View style={{ paddingLeft: 15 }}>
          <Text
            numberOfLines={1}
            style={[
              textStyles.bold16,
              { color: isDarkTheme ? colors.dark.white : colors.light.dark, width: 140 },
            ]}>
            {teamName}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[textStyles.semiBold12, { color: '#2E64EF' }]}>Ongoing visit:</Text>
            <Text style={[textStyles.semiBold12, { color: '#2E64EF' }]}>{ongoingVisit}</Text>
          </View>
        </View>
      </View>
      <Divider />
      <View style={[commonStyles.rowStart, { marginTop: 10 }]}>
        <View
          style={[
            commonStyles.rowStart,
            commonStyles.shadow0,
            styles.surface,
            { backgroundColor: isDarkTheme ? '#0DB0501A' : '#0DB0501A' },
          ]}>
          <Briefcase size={14} color="#0DB050" />
          <Text style={[textStyles.semiBold12, { paddingLeft: 2, color: '#0DB050' }]}>Visit: </Text>
          <Text style={[textStyles.semiBold12, { color: '#0DB050' }]}>{totalVisit}</Text>
        </View>
        <View
          style={[
            commonStyles.shadow0,
            commonStyles.rowStart,
            styles.surface,
            { backgroundColor: isDarkTheme ? '#2E64EF1A' : '#2E64EF1A' },
          ]}>
          <Clock size={14} color="#2E64EF" />
          <Text style={[textStyles.semiBold12, { paddingLeft: 2, color: '#2E64EF' }]}>
            Duration:{' '}
          </Text>
          <Text style={[textStyles.semiBold12, { color: '#2E64EF' }]}>{duration}</Text>
        </View>
        <View
          style={[
            commonStyles.shadow0,
            commonStyles.rowStart,
            styles.surface,
            { backgroundColor: isDarkTheme ? '#4A56741A' : '#4A56741A' },
          ]}>
          <CheckSquareOffset size={14} color={isDarkTheme ? '#CDD2DF' : '#4A5674'} />
          <Text
            style={[
              textStyles.semiBold12,
              { paddingLeft: 2, color: isDarkTheme ? '#CDD2DF' : '#4A5674' },
            ]}>
            Task:{' '}
          </Text>
          <Text style={[textStyles.semiBold12, { color: isDarkTheme ? '#CDD2DF' : '#4A5674' }]}>
            {totalTask}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(TeamReport);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderLeftColor: '#662BF2',
    borderLeftWidth: 2,
    borderRadius: 15,
    marginBottom: '3%',
    width: 360,
    height: 123,
    marginLeft: 30,
    right: 20,
  },
  overLap1: {
    position: 'absolute',
    top: 0,
    left: 15,
  },
  overLap2: {
    position: 'absolute',
    top: 0,
    left: 30,
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
