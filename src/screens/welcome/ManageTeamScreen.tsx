import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles } from '@theme';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';

const ManageYourTeamScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDarkTheme } = useAppSelector(state => state.app);

  const handleSubmit = (teamSize: string) => {
    alert(teamSize);
    navigation.navigate('TabNavigation');
  };

  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    placeholderText: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    blue: isDarkTheme ? colors.dark.blue : colors.light.blue,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
    },
    btnStyle: {
      paddingHorizontal: 14,
      paddingVertical: 20,
      marginBottom: 14,
      borderWidth: 1,
      borderRadius: 16,
      borderColor: textColor.borderColor,
      backgroundColor: textColor.bgColor,
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
            <Text style={[textStyles.bold24, { color: textColor.primaryText }]}>
              {i18n.t(`Manage Your Team`)}
            </Text>
            <Text style={[textStyles.regular14, { color: textColor.secondaryText }]}>
              {i18n.t(`Let’s see how many people are in your team`)}
            </Text>
          </View>
          <View
            style={{
              marginTop: 40,
              marginBottom: 20,
              flex: 1,
            }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btnStyle}
              onPressOut={() => handleSubmit('Just Started')}>
              <Text
                style={[
                  textStyles.semiBold14,
                  { color: textColor.primaryText, textAlign: 'center' },
                ]}>
                {i18n.t(`🎈 Just Started (1-10)`)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btnStyle}
              onPressOut={() => handleSubmit('Getting There')}>
              <Text
                style={[
                  textStyles.semiBold14,
                  { color: textColor.primaryText, textAlign: 'center' },
                ]}>
                {i18n.t(`🧲 Getting There (10-50)`)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btnStyle}
              onPressOut={() => handleSubmit('Established')}>
              <Text
                style={[
                  textStyles.semiBold14,
                  { color: textColor.primaryText, textAlign: 'center' },
                ]}>
                {i18n.t(`🔥 Established (50-100)`)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btnStyle}
              onPressOut={() => handleSubmit('Excellent')}>
              <Text
                style={[
                  textStyles.semiBold14,
                  { color: textColor.primaryText, textAlign: 'center' },
                ]}>
                {i18n.t(`💎 Excellent (100-250)`)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default ManageYourTeamScreen;
