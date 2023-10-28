import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { textStyles } from '@theme';
import { Field, Formik } from 'formik';
import { CheckSquare, Square, User } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import AppButton from 'src/components/buttons/AppButton';
import TextField from 'src/components/inputs/TextField';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import { colors } from 'src/theme/colors';
import * as yup from 'yup';

const LoginForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isRememberCredentials, setRememberCredentials] = useState(false);
  const { isDarkTheme } = useAppSelector(state => state.app);

  const toggleRememberCredentials = () => {
    setRememberCredentials(prevValue => !prevValue);
  };

  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    placeholderText: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    blue: isDarkTheme ? colors.dark.blue : colors.light.blue,
  };

  const handleSubmit = () => {
    navigation.navigate('AppStack');
  };
  return (
    <Formik
      initialValues={{ email: 'example@gmail.com', password: '12345678' }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email(i18n.t('Email Must Be Valid'))
          .required(i18n.t('Email Is Required')),
        password: yup
          .string()
          .min(8, i18n.t('At least 8 character'))
          .max(16)
          .required(i18n.t('Password is required')),
      })}
      onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <>
          <Field
            component={TextField}
            icon={<User size={21} color={textColor.placeholderText} />}
            disable={false}
            multiline={false}
            name="email"
            type="email"
            placeholder={i18n.t('Email or Phone Number')}
            placeholderTextColor={textColor.placeholderText}
          />
          <View style={{ marginBottom: 10 }} />
          <Field
            component={TextField}
            disable={false}
            multiline={false}
            name="password"
            type="password"
            placeholder={i18n.t('At least 8 character')}
            placeholderTextColor={textColor.placeholderText}
          />
          <View
            style={{
              marginTop: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Pressable
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={toggleRememberCredentials}>
                {isRememberCredentials ? (
                  <CheckSquare size={24} color={textColor.blue} />
                ) : (
                  <Square size={24} color={textColor.secondaryText} />
                )}

                <Text
                  style={[textStyles.medium14, { color: textColor.secondaryText, paddingLeft: 5 }]}>
                  {i18n.t('Remember me')}
                </Text>
              </Pressable>
            </View>
            <View>
              <Text
                onPress={() => navigation.navigate('ForgotPasswordScreen')}
                style={[textStyles.medium14, { color: textColor.blue }]}>
                {i18n.t('Forgot Password?')}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
              marginTop: 40,
            }}>
            <AppButton title={'Login'} mode="contained" onPress={() => handleSubmit()} />
          </View>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
