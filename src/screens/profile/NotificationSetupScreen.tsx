import { colors, textStyles } from '@theme';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Header from 'src/components/common/Header';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';

const NotificationSetupScreen = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [pushNotification, setPushNotification] = useState(false);
  const [emailNotification, setEmailNotification] = useState(false);
  const [pauseVisitReminder, setPauseVisitReminder] = useState(false);
  const [visitReminder, setVisitReminder] = useState(false);
  const togglePushNotification = () => {
    setPushNotification(!pushNotification);
  };
  const toggleEmailNotification = () => {
    setEmailNotification(!emailNotification);
  };
  const togglePauseVisitReminder = () => {
    setPauseVisitReminder(!pauseVisitReminder);
  };
  const toggleVisitReminder = () => {
    setVisitReminder(!visitReminder);
  };
  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    red: isDarkTheme ? colors.dark.red : colors.light.red,
    blue: isDarkTheme ? colors.dark.blue : colors.light.blue,
    grey1: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    grey2: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    grey4: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
  };
  const styles = StyleSheet.create({
    title: { color: textColor.primaryText, marginBottom: 5 },
    subtitle: { color: textColor.grey1, marginBottom: 20 },
    line: { borderBottomWidth: 1, marginBottom: 20, borderColor: textColor.grey4 },
  });
  return (
    <ScreenWrapper>
      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <Header title={'Notification'} />
      </View>
      <View style={{ padding: 25 }}>
        {/* Push Notification */}
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{}}>
            <Text style={[textStyles.bold14, styles.title]}>{i18n.t(`Push Notification`)}</Text>
            <Text style={[textStyles.regular12, styles.subtitle]}>
              {`Lorem ipsum dolor sit amet, consectetur \nadipiscing elit,`}
              <Text style={[textStyles.medium16, { color: textColor.red }]}>
                {' '}
                {`< change the subtitle`}
              </Text>
            </Text>
          </View>
          <Switch
            trackColor={{ false: colors.light.grey1, true: colors.light.blue }}
            thumbColor={colors.light.white}
            onValueChange={togglePushNotification}
            value={pushNotification}
          />
        </View>
        <View style={styles.line} />
        {/* Email Notification */}
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{}}>
            <Text style={[textStyles.bold14, styles.title]}>{i18n.t(`Email Notification`)}</Text>
            <Text style={[textStyles.regular12, styles.subtitle]}>
              {`Lorem ipsum dolor sit amet, consectetur \nadipiscing elit,`}
              <Text style={[textStyles.medium16, { color: textColor.red }]}>
                {' '}
                {`< change the subtitle`}
              </Text>
            </Text>
          </View>
          <Switch
            trackColor={{ false: colors.light.grey1, true: colors.light.blue }}
            thumbColor={colors.light.white}
            onValueChange={toggleEmailNotification}
            value={emailNotification}
          />
        </View>
        <View style={styles.line} />

        {/* Pause visit Reminder */}
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{}}>
            <Text style={[textStyles.bold14, styles.title]}>{i18n.t(`Pause visit Reminder`)}</Text>
            <Text style={[textStyles.regular12, styles.subtitle]}>
              {`Get any paused visit reminder which you\naccidentally forgot`}
            </Text>
          </View>
          <Switch
            trackColor={{ false: colors.light.grey1, true: colors.light.blue }}
            thumbColor={colors.light.white}
            onValueChange={togglePauseVisitReminder}
            value={pauseVisitReminder}
          />
        </View>
        <View style={styles.line} />

        {/* Visit Reminder */}
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{}}>
            <Text style={[textStyles.bold14, styles.title]}>{i18n.t(`Visit Reminder`)}</Text>
            <Text style={[textStyles.regular12, styles.subtitle]}>
              {`Notify me before one day of the visit`}
            </Text>
          </View>
          <Switch
            trackColor={{ false: colors.light.grey1, true: colors.light.blue }}
            thumbColor={colors.light.white}
            onValueChange={toggleVisitReminder}
            value={visitReminder}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default NotificationSetupScreen;
