import { colors, typography } from '@theme';
import { ArrowUpRight, Briefcase, CalendarBlank, Clock } from 'phosphor-react-native';
import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import AvatarCount from '../common/AvatarCount';

export default memo(function TaskCard({ status }: { status: 1 | 2 | 3 }) {
  const { isDarkTheme } = useAppSelector(state => state.app);

  return (
    <View style={customStyles.container(isDarkTheme, status)}>
      <View style={commonStyles.rowSpaceBetween}>
        <View>
          <Text numberOfLines={1} style={customStyles.title(isDarkTheme)}>
            Retail Shop Visit
          </Text>
          <View style={styles.timeDiffContainer}>
            <CalendarBlank color={isDarkTheme ? colors.dark.grey1 : colors.light.grey1} size={14} />
            <Text numberOfLines={1} style={customStyles.timeDiff(isDarkTheme)}>
              Jul 23, 2023 - Present
            </Text>
          </View>
        </View>
        <AvatarCount data={[]} />
      </View>
      <View style={commonStyles.rowSpaceBetween}>
        <View style={commonStyles.rowStart}>
          <View
            style={[
              customStyles.chipContainer(isDarkTheme),
              status === 3 && { backgroundColor: colors.light.green + '10' },
            ]}>
            <Briefcase
              size={14}
              color={
                status === 3
                  ? colors.light.green
                  : isDarkTheme
                  ? colors.dark.grey2
                  : colors.light.grey0_5
              }
            />
            <Text
              numberOfLines={1}
              style={[
                customStyles.chipTitle(isDarkTheme),
                status === 3 && { color: colors.light.green },
              ]}>
              {i18n.t('Visit')}: 6/12
            </Text>
          </View>
          <View
            style={[
              customStyles.chipContainer(isDarkTheme),
              { marginLeft: 6 },
              status === 3 && { backgroundColor: colors.light.blue + '10' },
            ]}>
            <Clock
              size={14}
              color={
                status === 3
                  ? colors.light.blue
                  : isDarkTheme
                  ? colors.dark.grey2
                  : colors.light.grey0_5
              }
            />
            <Text
              numberOfLines={1}
              style={[
                customStyles.chipTitle(isDarkTheme),
                status === 3 && { color: colors.light.blue },
              ]}>
              {i18n.t('Duration')}: 2h 30m
            </Text>
          </View>
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
  timeDiffContainer: { marginTop: 14, ...commonStyles.rowStart },
  map: {
    fontFamily: typography.manropeSemiBold600,
    fontSize: 12,
    lineHeight: 18,
    color: colors.light.blue,
    marginRight: 2,
  },
});

const customStyles = {
  container: (isDarkTheme: boolean, status: 1 | 2 | 3) => {
    const getStatusColor = () => {
      if (status === 1) return colors.light.blue;
      if (status === 2) return colors.light.yellow;
      if (status === 3) return colors.light.green;
    };
    return {
      padding: 16,
      paddingLeft: 13,
      backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white,
      borderRadius: 8,
      gap: 18,
      borderLeftWidth: 3,
      borderColor: getStatusColor(),
      ...commonStyles.shadow0,
    };
  },
  title: (isDarkTheme: boolean) => ({
    fontFamily: typography.manropeBold700,
    fontSize: 16,
    lineHeight: 22.4,
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
  }),
  timeDiff: (isDarkTheme: boolean) => ({
    fontFamily: typography.manropeMedium500,
    lineHeight: 18,
    fontSize: 12,
    marginLeft: 4,
    color: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
  }),
  chipContainer: (isDarkTheme: boolean) => ({
    ...commonStyles.rowStart,
    backgroundColor: isDarkTheme ? '#4A567410' : colors.light.grey0_5 + '10',
    borderRadius: 16,
    paddingVertical: 3,
    paddingHorizontal: 6,
  }),
  chipTitle: (isDarkTheme: boolean) => ({
    fontFamily: typography.manropeSemiBold600,
    fontSize: 12,
    lineHeight: 18,
    color: isDarkTheme ? colors.dark.grey2 : colors.light.grey0_5,
    marginLeft: 4,
  }),
  //   title: (isDarkTheme: boolean) => ({}),
};
