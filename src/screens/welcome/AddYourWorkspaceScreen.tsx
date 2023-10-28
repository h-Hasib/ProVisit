import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles } from '@theme';
import { Field, Formik } from 'formik';
import { Stack } from 'phosphor-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from 'src/components/buttons/AppButton';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import TextField from 'src/components/inputs/TextField';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import * as yup from 'yup';

const AddYourWorkspaceScreen = () => {
  //Handles the effect of pressing Hardware Back button
  // const route = useRoute();
  // useFocusEffect(
  //   useCallback(() => {
  //     const onBackPress = () => {
  //       if (route.name === 'AddYourWorkspaceScreen') {
  //         closeApp();
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     };
  //     BackHandler.addEventListener('hardwareBackPress', onBackPress);
  //     return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //   }, [route]),
  // );
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDarkTheme } = useAppSelector(state => state.app);
  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    placeholderText: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    blue: isDarkTheme ? colors.dark.blue : colors.light.blue,
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
    },
  });
  const handleSubmit = () => {
    // (values: { workspaceName: string }) => {
    navigation.navigate('ManageYourTeamScreen');
  };
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
            <Text style={[textStyles.bold24, { color: textColor.primaryText }]}>
              {i18n.t(`Your Workspace Name`)}
            </Text>
            <Text style={[textStyles.regular14, { color: textColor.secondaryText }]}>
              {i18n.t(`We'll check if you have an account`)}
            </Text>
          </View>
          <View
            style={{
              marginTop: 40,
              marginBottom: 20,
              flex: 1,
            }}>
            <Formik
              initialValues={{ workspaceName: 'Please provide a name' }}
              validationSchema={yup.object().shape({
                workspaceName: yup
                  .string()
                  .min(3, i18n.t('At least 3 character'))
                  .max(30)
                  .required(i18n.t('Please provide a name')),
              })}
              onSubmit={handleSubmit}>
              {({ handleSubmit }) => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Field
                    component={TextField}
                    disable={false}
                    multiline={false}
                    name="workspaceName"
                    type="default"
                    icon={<Stack size={21} color={textColor.placeholderText} />}
                    placeholder={i18n.t('Please provide a name')}
                    placeholderTextColor={textColor.placeholderText}
                  />
                  <View>
                    <AppButton title={'Confirm'} mode="contained" onPress={() => handleSubmit()} />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default AddYourWorkspaceScreen;
