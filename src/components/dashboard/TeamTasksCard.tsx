import { colors, textStyles, typography } from '@theme';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  ListRenderItemInfo,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import { TeamTaskListType } from '../../screens/dashboard/HomeScreen';
import AvatarCount from '../common/AvatarCount';
import ProgressBar from './ProgressBar';

interface Props {
  data: ListRenderItemInfo<TeamTaskListType>;
}

const TeamTasksCard: React.FC<Props> = ({ data }) => {
  const { index } = data;
  const isFirstIndex = index === 0;
  const { isDarkTheme } = useAppSelector(state => state.app);
  const translateX = useRef<Animated.Value>(new Animated.Value(50));
  const opacity = useRef<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateX.current, {
        toValue: 0,
        duration: 1000,
        delay: index * (1000 / 3),
        useNativeDriver: true,
      }),
      Animated.timing(opacity.current, {
        toValue: 1,
        duration: 1000,
        delay: index * (1000 / 3),
        useNativeDriver: true,
      }),
    ]).start();
  }, [index]);

  return (
    <Animated.View
      style={[
        customViewStyles.container(isDarkTheme),
        isFirstIndex && styles.firstIndexContainer,
        {
          opacity: opacity.current,
          transform: [{ translateX: translateX.current }],
        },
      ]}>
      <TouchableOpacity
        style={{
          height: responsiveHeight(18.5),
          width: responsiveWidth(70),
        }}
        activeOpacity={0.6}>
        <View style={{ ...StyleSheet.absoluteFillObject, flexDirection: 'row' }}>
          <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 16 }}>
            <Text
              numberOfLines={1}
              style={[customTextStyles.title(isDarkTheme), isFirstIndex && styles.title]}>
              Sales Campaign Mar 2023
            </Text>
            <View style={[styles.leftTextCon, isFirstIndex && styles.fLeftCon]}>
              <Text style={[styles.leftText, isFirstIndex && styles.fLeftText]}>
                2 {i18n.t('days left')}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <AvatarCount size={28} data={[]} />
              <View style={{ width: 114 }}>
                <ProgressBar
                  progress={60}
                  progressBarStyle={{
                    backgroundColor: isFirstIndex
                      ? 'rgba(255, 255, 255, .2)'
                      : isDarkTheme
                      ? colors.dark.grey4
                      : ' rgba(102, 43, 242, 0.1)',
                  }}
                  progressStyle={{ backgroundColor: isFirstIndex ? '#FFFFFF' : '#8BED4F' }}
                  textStyle={{
                    color: isFirstIndex
                      ? '#FFFFFF'
                      : isDarkTheme
                      ? colors.dark.white
                      : colors.light.dark,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const customViewStyles = {
  container: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    overflow: 'hidden',
    backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderRadius: 16,
    borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
    borderWidth: 1,
    marginRight: 16,
  }),
};

const customTextStyles = {
  title: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    ...textStyles.bold16,
  }),
  subText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.grey2 : colors.light.grey1,
    ...textStyles.regular12,
  }),
};

const styles = StyleSheet.create({
  firstIndexContainer: {
    backgroundColor: '#6366F1',
  },
  title: {
    color: colors.light.white,
  },
  leftTextCon: {
    width: 54,
    height: 20,
    backgroundColor: ' rgba(102, 43, 242, 0.1)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  fLeftCon: {
    backgroundColor: ' rgba(255, 255, 255, .1)',
  },
  leftText: {
    fontFamily: typography.manropeMedium500,
    fontSize: 8,
    color: colors.light.earthBlue,
  },
  fLeftText: {
    color: colors.light.white,
  },
  dummyText: {
    color: '#fff',
  },
});

export default TeamTasksCard;
