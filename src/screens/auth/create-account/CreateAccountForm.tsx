import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Field, Formik } from 'formik';
import { User } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';
import AppButton from 'src/components/buttons/AppButton';
import TextField from 'src/components/inputs/TextField';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import { colors } from 'src/theme/colors';
import * as yup from 'yup';

interface FormValues {
  username: string;
  password: string;
  retypePassword: string;
}

const CreateAccountForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDarkTheme } = useAppSelector(state => state.app);
  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    placeholderText: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    blue: isDarkTheme ? colors.dark.blue : colors.light.blue,
  };
  const handleSubmit = (values: FormValues) => {
    alert(`UserName: ${values.username}\nPassword: ${values.password}`);
    navigation.navigate('LoginScreen');
  };
  return (
    <Formik
      initialValues={{
        username: 'Your name here',
        password: '12345678',
        retypePassword: '12345678',
      }}
      validationSchema={yup.object().shape({
        username: yup
          .string()
          .max(26)
          .min(3, i18n.t('At least 3 character'))
          .required(i18n.t('Username is required')),
        password: yup
          .string()
          .min(8, i18n.t('At least 8 character'))
          .max(15)
          .required(i18n.t('Password is required')),
        retypePassword: yup
          .string()
          .oneOf([yup.ref('password')], i18n.t('Password need to match'))
          .required(i18n.t('Please retype your password')),
      })}
      onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <>
          <Field
            component={TextField}
            icon={<User size={21} color={textColor.placeholderText} />}
            disable={false}
            multiline={false}
            name="username"
            type="username"
            placeholder={i18n.t('Your name here')}
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
          <View style={{ marginBottom: 10 }} />
          <Field
            component={TextField}
            disable={false}
            multiline={false}
            name="retypePassword"
            type="password"
            placeholder={i18n.t('Password need to match')}
            placeholderTextColor={textColor.placeholderText}
          />

          <View
            style={{
              marginTop: 30,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <AppButton title={'Create Account'} mode="contained" onPress={() => handleSubmit()} />
          </View>
        </>
      )}
    </Formik>
  );
};

export default CreateAccountForm;
