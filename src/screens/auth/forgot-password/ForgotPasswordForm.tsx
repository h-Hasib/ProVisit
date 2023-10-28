import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Field, Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import AppButton from 'src/components/buttons/AppButton';
import TextField from 'src/components/inputs/TextField';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import { colors } from 'src/theme/colors';
import * as yup from 'yup';

const ForgotPasswordForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDarkTheme } = useAppSelector(state => state.app);
  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    placeholderText: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    blue: isDarkTheme ? colors.dark.blue : colors.light.blue,
  };
  const handleSubmit = (values: { email: string }) => {
    navigation.navigate('ResetPasswordOtpScreen', { email: values.email });
  };
  return (
    <Formik
      initialValues={{ email: 'forgot@password.com' }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email(i18n.t('Email Must Be Valid'))
          .required(i18n.t('Email Is Required')),
      })}
      onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <>
          <Field
            component={TextField}
            disable={false}
            multiline={false}
            name="email"
            type="email"
            placeholder={i18n.t('Email address')}
            placeholderTextColor={textColor.placeholderText}
          />

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
              marginTop: 30,
            }}>
            <AppButton title={'Submit'} mode="contained" onPress={() => handleSubmit()} />
          </View>
        </>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
