import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Field, Formik } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import AppButton from 'src/components/buttons/AppButton';
import TextField from 'src/components/inputs/TextField';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import { colors } from 'src/theme/colors';
import { textStyles } from 'src/theme/textStyles';
import * as yup from 'yup';

const SetupEmailForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDarkTheme } = useAppSelector(state => state.app);
  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    placeholderText: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    blue: isDarkTheme ? colors.dark.blue : colors.light.blue,
  };
  const handleSubmit = (values: { email: string }) => {
    navigation.navigate('SetupEmailOtpScreen', { email: values.email });
  };
  return (
    <Formik
      initialValues={{ email: 'example@gmail.com' }}
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

          <View style={{ marginTop: 10, marginBottom: 30 }}>
            <Text style={[textStyles.regular13, { color: textColor.secondaryText }]}>
              {i18n.t('By signing up you are agreeing to our')}
              <Text
                style={[textStyles.medium13, { color: textColor.blue }]}
                onPress={() => alert('There will be "Terms & Condition" placed here')}>
                {i18n.t('Terms & Conditions')}
              </Text>{' '}
              {i18n.t('and')}
              <Text
                style={[textStyles.medium13, { color: textColor.blue }]}
                onPress={() => alert('There will be "Privacy Policy" placed here')}>
                {i18n.t('Privacy Policy')}
              </Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <AppButton title={'Continue'} mode="contained" onPress={() => handleSubmit()} />
          </View>
        </>
      )}
    </Formik>
  );
};

export default SetupEmailForm;
