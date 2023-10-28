import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles } from '@theme';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppleIcon from 'src/assets/svg/external-login/AppleIcon';
import FacebookIcon from 'src/assets/svg/external-login/FacebookIcon';
import GoogleIcon from 'src/assets/svg/external-login/GoogleIcon';
import ExternalLoginButton from 'src/components/buttons/ExternalLoginButton';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import LoginForm from './LoginForm';

const LoginScreen = () => {
  //Handles the effect of pressing Hardware Back button
  // const route = useRoute();
  // useFocusEffect(
  //   useCallback(() => {
  //     const onBackPress = () => {
  //       if (route.name === 'LoginScreen') {
  //         closeApp();
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     };
  //     BackHandler.addEventListener('hardwareBackPress', onBackPress);
  //     return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //   }, [route]),
  // );
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDarkTheme } = useAppSelector(state => state.app);
  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
  };
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      justifyContent: 'space-between',
      padding: 25,
    },
    externalBtnContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
  return (
    <ScreenWrapper scrollable={false}>
      <ScrollView
        keyboardDismissMode={'on-drag'}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
        overScrollMode={'never'}>
        <View style={styles.container}>
          <View>
            <View style={{ marginTop: 40 }}>
              <Text style={[textStyles.bold24, { color: textColor.primaryText }]}>
                {i18n.t('Login to Your Account')}
              </Text>
              <Text style={[textStyles.regular14, { color: textColor.secondaryText }]}>
                {i18n.t(`We'll check if you have an account`)}
              </Text>
            </View>
            <View style={{ marginTop: 40 }}>
              <LoginForm />

              <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Text
                  style={[
                    textStyles.regular14,
                    { color: textColor.secondaryText, marginVertical: 30 },
                  ]}>
                  {i18n.t('or Continue with')}
                </Text>
                <View style={styles.externalBtnContainer}>
                  <ExternalLoginButton
                    icon={<GoogleIcon />}
                    onPress={() => navigation.navigate('TabNavigation')}
                  />
                  <View style={{ marginHorizontal: 8 }} />
                  <ExternalLoginButton
                    icon={<AppleIcon />}
                    onPress={() => navigation.navigate('TabNavigation')}
                  />
                  <View style={{ marginHorizontal: 8 }} />
                  <ExternalLoginButton
                    icon={<FacebookIcon />}
                    onPress={() => navigation.navigate('TabNavigation')}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text
              style={[
                textStyles.regular14,
                {
                  color: textColor.secondaryText,
                  textAlign: 'center',
                },
              ]}>
              {i18n.t('Need an Account?')}
              {'  '}
              <Text
                style={[textStyles.bold16, { color: colors.light.earthBlue }]}
                onPress={() => navigation.navigate('SetupEmailScreen')}>
                {i18n.t('Create Account')}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default LoginScreen;
