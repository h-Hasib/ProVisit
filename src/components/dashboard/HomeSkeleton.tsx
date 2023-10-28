import { colors, typography } from '@theme';
import Constants from 'expo-constants';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import Skeleton from '../common/Skeleton';

const HomeSkeleton = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <>
      <View
        style={{
          flex: 1,
          marginTop: Constants.statusBarHeight,
          backgroundColor: isDarkTheme ? colors.dark.background : colors.light.background,
        }}>
        <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
          <Skeleton width={178} height={42} borderRadius={8} />
          <Skeleton
            width={178}
            height={14}
            borderRadius={8}
            style={{ alignSelf: 'center', marginTop: 22 }}
          />
          <Skeleton width="100%" height={46} borderRadius={23} />
          <View>
            <View style={styles.taskContainer}>
              <Skeleton
                width={responsiveWidth(43.2)}
                height={responsiveHeight(24)}
                borderRadius={12}
                shimmerColors={[
                  isDarkTheme ? colors.dark.yellowLight : colors.light.yellowLight,
                  isDarkTheme ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)',
                  isDarkTheme ? colors.dark.yellowLight : colors.light.yellowLight,
                ]}
              />
              <View style={styles.rightBox}>
                <Skeleton
                  height={responsiveHeight(11.3)}
                  width={responsiveWidth(43.2)}
                  borderRadius={12}
                  shimmerColors={[
                    isDarkTheme ? colors.dark.blueLight : colors.light.blueLight,
                    isDarkTheme ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)',
                    isDarkTheme ? colors.dark.blueLight : colors.light.blueLight,
                  ]}
                />
                <Skeleton
                  height={responsiveHeight(11.3)}
                  width={responsiveWidth(43.2)}
                  borderRadius={12}
                  shimmerColors={[
                    isDarkTheme ? colors.dark.earthBlueLight : colors.light.earthBlueLight,
                    isDarkTheme ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)',
                    isDarkTheme ? colors.dark.earthBlueLight : colors.light.earthBlueLight,
                  ]}
                />
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={customTextStyles.skeletonText(isDarkTheme)}>
                {i18n.t('Getting Your Homepage Ready')}
              </Text>
            </View>
          </View>
          <View style={[commonStyles.rowSpaceBetween, { marginTop: 20 }]}>
            <Skeleton width={121} height={22} borderRadius={3} />
            <Skeleton width={71} height={12} borderRadius={3} />
          </View>
          <View style={[commonStyles.rowSpaceBetween, { marginTop: 10 }]}>
            <Skeleton width={198} height={108} borderRadius={22} style={{ marginRight: 16 }} />
            <Skeleton width="100%" height={108} borderRadius={22} />
          </View>
          <View style={[commonStyles.rowSpaceBetween, { marginVertical: 10 }]}>
            <Skeleton width={121} height={22} borderRadius={3} />
            <Skeleton width={71} height={12} borderRadius={3} />
          </View>
          <Skeleton width="100%" height={57} borderRadius={8} />
          <Skeleton width="100%" height={57} borderRadius={8} />
          <Skeleton width="100%" height={57} borderRadius={8} />
        </View>
      </View>
    </>
  );
};

export default HomeSkeleton;

const customTextStyles = {
  skeletonText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.earthBlue,
    fontFamily: typography.manropeSemiBold600,
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
  }),
};

const styles = StyleSheet.create({
  taskContainer: {
    ...commonStyles.rowSpaceBetween,
    marginTop: 20,
  },
  textContainer: {
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  rightBox: {
    height: responsiveHeight(24),
    justifyContent: 'space-between',
  },
});
