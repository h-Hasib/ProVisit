import { colors } from '@theme';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { SafeAreaView, ScrollView, StyleProp, ViewStyle } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

interface PropTypes {
  statusBar?: boolean;
  scrollable?: boolean;
  children: ReactNode;
  scrollBar?: boolean;
  scrollBounce?: boolean;
}

export default function ScreenWrapper({
  statusBar = true,
  scrollable = true,
  children,
  scrollBar = true,
  scrollBounce = false,
}: PropTypes) {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <>
      <StatusBar style={isDarkTheme ? 'light' : 'dark'} hidden={!statusBar} />
      <SafeAreaView style={customStyles.safeArea(isDarkTheme, statusBar)}>
        {!scrollable ? (
          children
        ) : (
          <ScrollView
            keyboardDismissMode={'on-drag'}
            showsVerticalScrollIndicator={scrollBar}
            bounces={scrollBounce}
            overScrollMode={scrollBounce ? 'always' : 'never'}
            indicatorStyle={isDarkTheme ? 'white' : 'black'}>
            {children}
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
}
const customStyles = {
  safeArea: (isDarkTheme: boolean, statusBar: boolean): StyleProp<ViewStyle> => ({
    flex: 1,
    backgroundColor: isDarkTheme ? colors.dark.background : colors.light.background,
    paddingTop: statusBar ? Constants.statusBarHeight : 0,
  }),
};
