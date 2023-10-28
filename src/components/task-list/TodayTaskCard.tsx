import { colors, typography } from '@theme';
import { ArrowUpRight, Clock } from 'phosphor-react-native';
import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import AvatarCount from '../common/AvatarCount';
import TaskStatusChip from '../common/TaskStatusChip';

export default memo(function TodayTaskCard({ status }: { status: 1 | 2 | 3 }) {
  const { isDarkTheme } = useAppSelector(state => state.app);

  return (
    <View style={customStyles.container(isDarkTheme)}>
      <View style={commonStyles.rowSpaceBetween}>
        <TaskStatusChip status={status} />
        <AvatarCount data={[]} />
      </View>

      <View style={{ marginVertical: 14 }}>
        <Text numberOfLines={1} style={customStyles.title(isDarkTheme)}>
          Retail Shop Visit
        </Text>
        <Text numberOfLines={2} style={customStyles.desc(isDarkTheme)}>
          The Project Manager should use appropriate verification techniques to manage ...
        </Text>
      </View>
      <View />

      <View style={commonStyles.rowSpaceBetween}>
        <View style={styles.bottomContainer}>
          <Clock size={14} weight="duotone" color={colors.light.green} />
          <Text numberOfLines={1} style={styles.time}>
            09:15 AM
          </Text>
        </View>
        <TouchableOpacity style={commonStyles.rowStart} onPress={() => alert('Map')}>
          <Text numberOfLines={1} style={styles.map}>
            {i18n.t('See map')}
          </Text>
          <ArrowUpRight size={14} weight="bold" color={colors.light.blue} />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  bottomContainer: {
    ...commonStyles.rowStart,
    backgroundColor: colors.light.green + '10',
    borderRadius: 16,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  time: {
    color: colors.light.green,
    fontFamily: typography.manropeSemiBold600,
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 4,
  },
  map: {
    fontFamily: typography.manropeSemiBold600,
    fontSize: 12,
    lineHeight: 18,
    color: colors.light.blue,
    marginRight: 2,
  },
});

const customStyles = {
  container: (isDarkTheme: boolean) => ({
    padding: 16,
    backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderRadius: 8,
    ...commonStyles.shadow0,
  }),
  title: (isDarkTheme: boolean) => ({
    fontFamily: typography.manropeBold700,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.01,
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
  }),
  desc: (isDarkTheme: boolean) => ({
    fontFamily: typography.manropeRegular400,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.01,
    color: isDarkTheme ? colors.dark.grey2 : colors.light.grey0_5,
  }),
};
