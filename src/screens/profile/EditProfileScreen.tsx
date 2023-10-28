import { colors, textStyles } from '@theme';
import { Field, Formik, FormikProps } from 'formik';
import { MapPin, User } from 'phosphor-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Bangladesh from 'src/assets/svg/countryFlags/Bangladesh';
import France from 'src/assets/svg/countryFlags/France';
import Germany from 'src/assets/svg/countryFlags/Germany';
import India from 'src/assets/svg/countryFlags/India';
import Indonesia from 'src/assets/svg/countryFlags/Indonesia';
import Italy from 'src/assets/svg/countryFlags/Italy';
import Japan from 'src/assets/svg/countryFlags/Japan';
import Russia from 'src/assets/svg/countryFlags/Russia';
import SriLanka from 'src/assets/svg/countryFlags/SriLanka';
import Sweden from 'src/assets/svg/countryFlags/Sweden';
import UK from 'src/assets/svg/countryFlags/UK';
import USA from 'src/assets/svg/countryFlags/USA';
import AppButton from 'src/components/buttons/AppButton';
import ProfileCard from 'src/components/common/ProfileCard';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import PhoneNumberField from 'src/components/inputs/PhoneNumberField';
import TextField from 'src/components/inputs/TextField';
import i18n from 'src/languages/i18n';
import { flashMessage } from 'src/services/flash-message.service';
import { useAppSelector } from 'src/store/hooks';
import * as Yup from 'yup';

const EditProfileScreen = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [selectedCountryFlag, setSelectedCountryFlag] = useState(userData.flag);
  const [selectedCountryCode, setSelectedCountryCode] = useState(userData.countryCode);
  const [selectedCountry, setSelectedCountry] = useState(userData.country);

  const handleCountryCodeSelect = (country: countryCodeProps, form: FormikProps<unknown>) => {
    setSelectedCountryFlag(country.flag);
    setSelectedCountryCode(country.code);
    setSelectedCountry(country.country);
    // form.setFieldValue('flag', country.flag);
    form.setFieldValue('countryCode', country.code);
    form.setFieldValue('country', country.country);
  };

  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    red: colors.light.red,
    grey1: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    grey2: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    grey4: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
  };
  const initialValues = {
    name: userData.name,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
    address: userData.address,
    country: userData.country,
    countryCode: userData.countryCode,
  };
  const validationSchema = Yup.object().shape({
    // phoneNumber: Yup.string().required(i18n.t(`Phone number is required`)),
    // name: Yup.string().required(),
    name: Yup.string().required(i18n.t(`Name is required`)),
    phoneNumber: Yup.string().required(i18n.t(`Phone Number is required`)),
  });
  const handleSubmit = (values: typeof initialValues) => {
    alert(`
    name: ${values.name}
    email: ${values.email}
    phone: ${values.phoneNumber}
    country: ${values.country}
    code: ${values.countryCode}
    address: ${values.address}`);
    flashMessage.success({ message: 'Profile Info Updated' });
  };
  return (
    <ScreenWrapper scrollable={false}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <>
            <ScrollView
              style={{
                flexGrow: 1,
              }}>
              <ProfileCard
                headerTitle={'Profile'}
                image={userData.profilePicture}
                editProfilePicture={true}
              />
              <View style={{ paddingHorizontal: 20, marginVertical: 30 }}>
                <Text style={[textStyles.medium12, { color: textColor.grey1, marginLeft: 10 }]}>
                  {i18n.t(`Name`)}
                </Text>
                <Field
                  component={TextField}
                  icon={<User size={21} color={textColor.grey2} />}
                  disable={false}
                  multiline={false}
                  name="name"
                  type="default"
                  placeholder={i18n.t('Your name here')}
                  placeholderTextColor={textColor.grey2}
                />
                <Text
                  style={[
                    textStyles.medium12,
                    { color: textColor.grey1, marginLeft: 10, marginTop: 3 },
                  ]}>
                  {i18n.t(`Email`)}
                </Text>
                <Field
                  component={TextField}
                  disable={true}
                  multiline={false}
                  name="email"
                  type="email"
                  placeholder={i18n.t('Your email here')}
                  placeholderTextColor={textColor.grey2}
                />
                <Text
                  style={[
                    textStyles.medium12,
                    { color: textColor.grey1, marginLeft: 10, marginTop: 3 },
                  ]}>
                  {i18n.t(`Phone Number`)}
                </Text>
                <Field
                  component={PhoneNumberField}
                  countryCodes={countryCodes}
                  selectedCountryFlag={selectedCountryFlag}
                  selectedCountry={selectedCountry}
                  onCountryCodeSelect={handleCountryCodeSelect}
                  disable={false}
                  multiline={false}
                  name="phoneNumber"
                  type="contained"
                  placeholderTextColor={textColor.grey2}
                />
                <Text
                  style={[
                    textStyles.medium12,
                    { color: textColor.grey1, marginLeft: 10, marginTop: 3 },
                  ]}>
                  {i18n.t(`Address`)}
                </Text>
                <Field
                  component={TextField}
                  icon={<MapPin size={21} color={textColor.grey2} />}
                  disable={false}
                  multiline={false}
                  name="address"
                  type="default"
                  placeholder={i18n.t('Address')}
                  placeholderTextColor={textColor.grey2}
                />
              </View>
            </ScrollView>
            <View style={{ paddingTop: 10, paddingBottom: 30, paddingHorizontal: 20 }}>
              <AppButton title={'Save Changes'} onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </ScreenWrapper>
  );
};

export default EditProfileScreen;

interface countryCodeProps {
  country: string;
  code: string;
  flag: React.ReactNode;
}
const countryCodes: countryCodeProps[] = [
  {
    country: 'USA',
    code: '+1',
    flag: <USA />,
  },
  {
    country: 'Bangladesh',
    code: '+88',
    flag: <Bangladesh />,
  },
  {
    country: 'UK',
    code: '+44',
    flag: <UK />,
  },
  {
    country: 'Indonesia',
    code: '+62',
    flag: <Indonesia />,
  },
  {
    country: 'Japan',
    code: '+81',
    flag: <Japan />,
  },
  {
    country: 'Italy',
    code: '+39',
    flag: <Italy />,
  },
  {
    country: 'France',
    code: '+33',
    flag: <France />,
  },
  {
    country: 'Germany',
    code: '+49',
    flag: <Germany />,
  },
  {
    country: 'Sweden',
    code: '+46',
    flag: <Sweden />,
  },
  {
    country: 'Russia',
    code: '+7',
    flag: <Russia />,
  },
  {
    country: 'Sri Lanka',
    code: '+94',
    flag: <SriLanka />,
  },
  {
    country: 'India',
    code: '+91',
    flag: <India />,
  },
];
interface userData {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  profilePicture: string;
  country: string;
  countryCode: string;
  flag: React.ReactNode;
}
const userData: userData = {
  name: 'Adam Leonardo',
  email: 'adam.leonardo@gmail.com',
  phoneNumber: '+1 000 000 000',
  address: 'N/A',
  profilePicture: `https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg`,
  country: 'USA',
  countryCode: '+1',
  flag: <USA />,
};
