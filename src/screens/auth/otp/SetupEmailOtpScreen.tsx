import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { textStyles } from '@theme';
import { Formik, FormikProps } from 'formik';
import { PencilSimple } from 'phosphor-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import AppButton from 'src/components/buttons/AppButton';
import Header from 'src/components/common/Header';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import { colors } from 'src/theme/colors';
import * as yup from 'yup';

type Props = {
  route: RouteProp<RootStackParamList, 'SetupEmailOtpScreen'>;
};

interface FormValues {
  otp: string;
}

const SetupEmailOtpScreen = ({ route }: Props) => {
  const [email] = useState<string>(route.params?.email);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const formikRef = useRef<FormikProps<FormValues>>(null);
  const { isDarkTheme } = useAppSelector(state => state.app);

  const handleSubmit = () => {
    try {
      //(values: FormValues) => {
      // Alert.alert(values.otp);
      navigation.navigate('EmailVerifiedScreen', { email: email });
    } catch (error) {
      // console.error('Error:', error);
    }
  };

  const handleBackScreen = () => {
    navigation.navigate('SetupEmailScreen');
    return true;
  };

  useEffect(() => {
    formikRef.current?.resetForm();
  }, []);

  const validationSchema = yup.object().shape({
    otp: yup.string().length(4, i18n.t('Otp must be 4 digits')).required(i18n.t('Otp is required')),
  });

  const initialValues: FormValues = {
    otp: '123',
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
  let isBtnDisabled = false;

  const styles = StyleSheet.create({
    roundedTextInput: {
      color: textColor.primaryText,
      borderRadius: 16,
      borderWidth: 1,
      borderBottomWidth: 1,
      height: 72,
      width: 70,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 1,
      backgroundColor: textColor.bgColor,
    },
  });
  return (
    <ScreenWrapper scrollBar={false}>
      <View style={{ marginTop: 5, paddingHorizontal: 25 }}>
        <Header onPressBack={handleBackScreen} leftIconColor={textColor.primaryText} />
      </View>
      <View style={{ padding: 25 }}>
        <View style={{ height: '90%', marginTop: 5 }}>
          <Text style={[textStyles.bold24, { color: textColor.primaryText }]}>
            {i18n.t('Verification Code')}
          </Text>
          <Text style={[textStyles.regular14, { color: textColor.secondaryText }]}>
            {i18n.t('Enter the 4 digit verification code sent to your email')}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              marginVertical: 20,
              marginTop: 45,
            }}>
            <Text style={[textStyles.semiBold16, { color: textColor.blue }]}>{email}</Text>
            <TouchableOpacity onPressIn={() => navigation.navigate('SetupEmailScreen')}>
              <PencilSimple size={24} color={textColor.blue} />
            </TouchableOpacity>
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            innerRef={formikRef}>
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <View>
                <OTPTextView
                  handleTextChange={handleChange('otp')}
                  defaultValue={values.otp}
                  autoFocus={true}
                  tintColor={textColor.blue}
                  offTintColor={textColor.borderColor}
                  textInputStyle={styles.roundedTextInput}
                  inputCount={4}
                  keyboardType="numeric"
                />
                {touched.otp && errors.otp && (
                  <Text style={{ color: 'tomato', marginVertical: 10 }}>{errors.otp}</Text>
                )}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    marginBottom: 60,
                    marginTop: 20,
                  }}>
                  {values.otp.length < 4 ? (isBtnDisabled = true) : (isBtnDisabled = false)}
                  <AppButton title="Submit Code" isDisable={isBtnDisabled} onPress={handleSubmit} />
                  {values.otp.length < 4 && (
                    <View style={{ marginTop: 25 }}>
                      <AppButton
                        title={'Resend verification code'}
                        buttonColor={textColor.grey5}
                        labelColor={textColor.secondaryText}
                        onPress={() => alert('OTP has been Resent to your email')}
                      />
                    </View>
                  )}
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SetupEmailOtpScreen;
