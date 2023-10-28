import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { default as React, useCallback } from 'react';
import { BackHandler, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InvitationAccept from 'src/assets/svg/success-alert/InvitationAccept';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { colors } from 'src/theme/colors';
import { textStyles } from 'src/theme/textStyles';

const AcceptInvitationSuccessScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  //   Handles the effect of pressing Hardware Back button
  const currentRoute = useRoute();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (currentRoute.name === 'AcceptInvitationSuccessScreen') {
          navigation.navigate('MyPendingInvitationScreen');
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [currentRoute]),
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style={'light'} animated={true} translucent={true} />
      <LinearGradient style={styles.gradient} colors={colors.light.linear1}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={{ alignItems: 'center' }}>
              <InvitationAccept />
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={[textStyles.bold20, styles.title]}>{i18n.t('Invitation Accepted')}</Text>
              <Text style={[textStyles.regular16, styles.subTitle]}>
                {i18n.t('You have successfully accepted the invitation')}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={[textStyles.bold16, styles.btnStyle]}
              onPress={() => navigation.navigate('MyPendingInvitationScreen')}>
              {i18n.t('TAP TO CONTINUE')}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AcceptInvitationSuccessScreen;

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  content: {
    marginTop: 200,
  },
  btnStyle: {
    color: colors.light.white,
    padding: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
  title: {
    color: colors.light.white,
    textAlign: 'center',
  },
  subTitle: {
    color: colors.light.grey3,
    paddingTop: 10,
    padding: 30,
    textAlign: 'center',
  },
});
