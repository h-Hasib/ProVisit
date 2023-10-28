import { NavigationContainer } from '@react-navigation/native';
import { store } from '@store';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { LogBox } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import CustomFlashMessage from 'src/components/common/CustomFlashMessage';
import { getPreferredLocale } from 'src/languages/localization';
import { RootNavigation } from 'src/navigation/RootNavigation';

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

const App = () => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  const [fontsLoaded] = useFonts({
    'Manrope-Bold': require('src/assets/fonts/Manrope-Bold.ttf'),
    'Manrope-ExtraBold': require('src/assets/fonts/Manrope-ExtraBold.ttf'),
    'Manrope-Medium': require('src/assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Regular': require('src/assets/fonts/Manrope-Regular.ttf'),
    'Manrope-SemiBold': require('src/assets/fonts/Manrope-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    // Language Local Setup
    await getPreferredLocale();
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer onReady={onLayoutRootView}>
          <RootNavigation />
        </NavigationContainer>
        <CustomFlashMessage />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;

// const styles = StyleSheet.create({});
