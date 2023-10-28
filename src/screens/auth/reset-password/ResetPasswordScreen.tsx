import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles } from '@theme';
import React, { useCallback } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // Handles the effect of pressing Hardware Back button
  const route = useRoute();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'ResetPasswordScreen') {
          navigation.navigate('ForgotPasswordScreen');
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );
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
                {i18n.t('Set a New Password')}
              </Text>
              <Text style={[textStyles.regular14, { color: textColor.secondaryText }]}>
                {i18n.t('Please provide a strong password and remember it')}
              </Text>
            </View>
            <View style={{ marginTop: 40 }}>
              <ResetPasswordForm />
            </View>
          </View>
          <View style={{}}></View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default ResetPasswordScreen;
