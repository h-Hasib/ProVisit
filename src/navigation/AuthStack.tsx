import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from 'src/interfaces/navigation';
import CreateAccountScreen from 'src/screens/auth/create-account/CreateAccountScreen';
import EmailVerifiedScreen from 'src/screens/auth/email-verified/EmailVerifiedScreen';
import ForgotPasswordScreen from 'src/screens/auth/forgot-password/ForgotPasswordScreen';
import LoginScreen from 'src/screens/auth/login/LoginScreen';
import ResetPasswordOtpScreen from 'src/screens/auth/otp/ResetPasswordOtpScreen';
import SetupEmailOtpScreen from 'src/screens/auth/otp/SetupEmailOtpScreen';
import ResetPasswordScreen from 'src/screens/auth/reset-password/ResetPasswordScreen';
import ResetPasswordSuccessScreen from 'src/screens/auth/reset-password/ResetPasswordSuccessScreen';
import SetupEmailScreen from 'src/screens/auth/setup-email/SetupEmailScreen';
import GetStartedScreen from 'src/screens/onboard/get-started/GetStartedScreen';
import SplashScreen from 'src/screens/onboard/splash-screen/SplashScreen';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

export const AuthStackNavigation = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
    <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
    <AuthStack.Screen name="GetStartedScreen" component={GetStartedScreen} />
    <AuthStack.Screen name="SetupEmailScreen" component={SetupEmailScreen} />
    <AuthStack.Screen name="SetupEmailOtpScreen" component={SetupEmailOtpScreen} />
    <AuthStack.Screen name="EmailVerifiedScreen" component={EmailVerifiedScreen} />
    <AuthStack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
    <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    <AuthStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    <AuthStack.Screen name="ResetPasswordOtpScreen" component={ResetPasswordOtpScreen} />
    <AuthStack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
    <AuthStack.Screen name="ResetPasswordSuccessScreen" component={ResetPasswordSuccessScreen} />
  </AuthStack.Navigator>
);
