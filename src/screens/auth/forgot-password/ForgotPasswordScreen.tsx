import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { textStyles } from '@theme';
import React from 'react';
import { Text, View } from 'react-native';
import Header from 'src/components/common/Header';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import { colors } from 'src/theme/colors';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDarkTheme } = useAppSelector(state => state.app);

  const handleBackScreen = () => {
    navigation.navigate('LoginScreen');
    return true;
  };
  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    placeholder: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    blue: isDarkTheme ? colors.dark.blue : colors.light.blue,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
    grey5: isDarkTheme ? colors.dark.grey5 : colors.light.grey5,
  };
  return (
    <ScreenWrapper scrollBar={false}>
      <View style={{ marginTop: 5, paddingHorizontal: 25 }}>
        <Header onPressBack={handleBackScreen} leftIconColor={textColor.primaryText} />
      </View>
      <View style={{ padding: 25, height: '90%', marginTop: 5 }}>
        <View>
          <Text style={[textStyles.bold24, { color: textColor.primaryText }]}>
            {i18n.t('Forgot Password?')}
          </Text>
          <Text style={[textStyles.regular14, { color: textColor.secondaryText }]}>
            {i18n.t('Enter the email address associated with your account to change your password')}
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <ForgotPasswordForm />

          <View style={{ marginTop: 30 }}>
            <Text
              style={[
                textStyles.semiBold16,
                { color: textColor.secondaryText, textAlign: 'center' },
              ]}
              onPress={() => navigation.navigate('LoginScreen')}>
              {i18n.t('Cancel')}
            </Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPasswordScreen;
