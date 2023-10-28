import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles } from '@theme';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import CreateAccountForm from './CreateAccountForm';
type Props = {
  route: RouteProp<RootStackParamList, 'CreateAccountScreen'>;
};
const CreateAccountScreen = ({ route }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email] = useState<string>(route.params?.email);
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
          <View style={{ marginTop: 40 }}>
            <View>
              <Text style={[textStyles.bold24, { color: textColor.primaryText }]}>
                {i18n.t('Lets Get Started')}
              </Text>
              <Text style={[textStyles.regular14, { color: textColor.secondaryText }]}>
                {i18n.t('Lets create your ProVisit account with')}
                {`\n${email}`}
              </Text>
            </View>
            <View style={{ marginTop: 40 }}>
              <CreateAccountForm />
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
              {i18n.t('Already have an account?')}
              {'  '}
              <Text
                style={[textStyles.bold16, { color: colors.light.earthBlue }]}
                onPress={() => navigation.navigate('LoginScreen')}>
                {i18n.t('Login')}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CreateAccountScreen;
