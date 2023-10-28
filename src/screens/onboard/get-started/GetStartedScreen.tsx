/* eslint-disable react/jsx-no-undef */
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, typography } from '@theme';
import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import {
  BackHandler,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Onboard01 from 'src/assets/svg/onboard/Onboard01';
import Onboard02 from 'src/assets/svg/onboard/Onboard02';
import Onboard03 from 'src/assets/svg/onboard/Onboard03';
import AppButton from 'src/components/buttons/AppButton';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import { RootStackParamList } from 'src/interfaces/navigation';
import { closeApp } from 'src/services/common.service';
import { useAppSelector } from 'src/store/hooks';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    onboardSvg: <Onboard01 />,
    title: 'Seamlessly Organize Your\nVisits and Tasks',
    subtitle:
      'All-in-one Visit & Task Management application to boost your productivity and make your workflow smoother.',
  },
  {
    id: '2',
    onboardSvg: <Onboard02 />,
    title: 'Smooth Check in Check\nout Process',
    subtitle:
      'Say goodbye to hassles and delays as you breeze through seamless check in and Check out.',
  },
  {
    id: '3',
    onboardSvg: <Onboard03 />,
    title: 'Comprehensive and\nDetailed Reports',
    subtitle:
      'Seamlessly navigate through detailed reports, gaining valuable perspectives on your workspace dynamics.',
  },
];

const GetStartedScreen = () => {
  //Handles the effect of pressing Hardware Back button
  const route = useRoute();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'GetStartedScreen') {
          closeApp();
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDarkTheme } = useAppSelector(state => state.app);

  const updateCurrentSlideIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  return (
    <ScreenWrapper statusBar={false}>
      <View
        style={{
          backgroundColor: isDarkTheme ? colors.dark.background : colors.light.background,
          width,
          height,
        }}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          data={slides}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          alwaysBounceHorizontal={false}
          overScrollMode="never"
          renderItem={({ item }) => (
            <View>
              <View
                style={[
                  styles.svgContainer,
                  isDarkTheme && { backgroundColor: colors.dark.white + '05' },
                ]}>
                {item.onboardSvg}
              </View>
              <View
                style={[
                  styles.bottomContainer,
                  isDarkTheme && {
                    backgroundColor: colors.dark.background,
                    shadowColor: colors.dark.grey3,
                  },
                ]}>
                <Text
                  numberOfLines={2}
                  style={[styles.title, isDarkTheme && { color: colors.dark.white }]}>
                  {item.title}
                </Text>
                <Text numberOfLines={3} style={styles.subtitle}>
                  {item.subtitle}
                </Text>
                <View style={styles.indicatorContainer}>
                  {/* =====Render indicator===== */}
                  {slides.map((_, index) => (
                    <View
                      key={index}
                      style={[
                        styles.indicator,
                        currentSlideIndex === index && {
                          backgroundColor: colors.light.earthBlue,
                          width: 32,
                        },
                      ]}
                    />
                  ))}
                </View>
                <AppButton
                  styleProp={{ position: 'absolute', bottom: Platform.OS === 'ios' ? 72 : 32 }}
                  title={'Get Started'}
                  onPress={() => navigation.navigate('SetupEmailScreen')}
                />
              </View>
            </View>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  svgContainer: {
    height: height / 1.5,
    width: width,
    paddingTop: 29,
    backgroundColor: '#00000010',
  },
  bottomContainer: {
    backgroundColor: colors.light.white,
    flex: 1,
    marginTop: -90,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 32,
    paddingTop: 30,
    width: width,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  title: {
    fontFamily: typography.manropeBold700,
    fontSize: 24,
    lineHeight: 33.6,
    color: colors.light.dark,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 12,
    marginBottom: height * 0.04,
    textAlign: 'center',
    fontFamily: typography.manropeRegular400,
    fontSize: 16,
    lineHeight: 25.6,
    color: colors.light.grey1,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    height: 4,
    width: 21,
    backgroundColor: colors.light.grey1,
    marginHorizontal: 6,
    borderRadius: 2,
  },
});
