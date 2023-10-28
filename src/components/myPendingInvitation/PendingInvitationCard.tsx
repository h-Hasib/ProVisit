import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles } from '@theme';
import { ArrowRight, User, X } from 'phosphor-react-native';
import React, { memo, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import AppButton from '../buttons/AppButton';
import BottomSheetWrapper from '../common/BottomSheetWrapper';
import Header from '../common/Header';
const { height } = Dimensions.get('window');

interface DataProps {
  id: string;
  workspaceName: string;
  role: string;
}

const PendingInvitationCard = ({
  item,
  onReject,
  onAccept,
}: {
  item: DataProps;
  onReject: (selectedItem: DataProps) => void;
  onAccept: (selectedItem: DataProps) => void;
}) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isAcceptModalVisible, setIsAcceptModalVisible] = useState(false);
  const [isRejectModalVisible, setIsRejectModalVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const toggleAcceptModalVisible = () => {
    setIsAcceptModalVisible(!isAcceptModalVisible);
  };
  const toggleRejectModalVisible = () => {
    setIsRejectModalVisible(!isRejectModalVisible);
  };
  const { workspaceName, role } = item;
  const Color = {
    grey1: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    grey2: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    grey4: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
    grey5: isDarkTheme ? colors.dark.grey5 : colors.light.grey5,
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    brown: isDarkTheme ? colors.dark.yellow : colors.light.yellow,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    roleButtonText: isDarkTheme ? colors.dark.grey2 : colors.light.earthBlue,
    roleButtonBg: isDarkTheme ? colors.dark.grey5 : '#F0E9FE',
    green: isDarkTheme ? colors.dark.green : colors.light.green,
    red: isDarkTheme ? colors.dark.red : colors.light.red,
  };
  const styles = StyleSheet.create({
    card: {
      borderRadius: 8,
      borderLeftWidth: 3,
      borderLeftColor: Color.brown,
      backgroundColor: Color.bgColor,
      paddingTop: 16,
      paddingRight: 17,
      paddingBottom: 24,
      paddingLeft: 15,
    },
    roleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 16,
      paddingVertical: 4,
      paddingHorizontal: 8,
      backgroundColor: Color.roleButtonBg,
      maxWidth: responsiveWidth(22),
      marginVertical: 15,
    },
    horizontalLine: { borderBottomWidth: 1, marginBottom: 15, borderBottomColor: Color.grey4 },
    acceptButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 20,
      backgroundColor: colors.light.green,
    },
    rejectButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: Color.grey2,
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 20,
      backgroundColor: Color.bgColor,
    },
    warningMessage: {
      color: Color.primaryText,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 20,
      paddingHorizontal: 30,
    },
    optionB: {
      marginTop: 20,
      padding: 15,
      width: responsiveWidth(50),
    },
  });
  return (
    <>
      <View style={[styles.card, commonStyles.shadow1]}>
        <Text style={[textStyles.medium12, { color: Color.grey1, marginBottom: 5 }]}>
          {i18n.t(`You have a pending invitation from`)}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[textStyles.regular16, { color: Color.grey1 }]}>
            {`${i18n.t(`Workspace`)}:   `}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              textStyles.bold16,
              { color: Color.primaryText, maxWidth: responsiveWidth(55) },
            ]}>{`${workspaceName}`}</Text>
        </View>
        <View style={styles.roleButton}>
          <User size={12} color={Color.roleButtonText} />
          <Text
            numberOfLines={1}
            style={[
              textStyles.semiBold12,
              { marginLeft: 5, color: Color.roleButtonText, maxWidth: responsiveWidth(14) },
            ]}>
            {role}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={{ marginBottom: 10 }}>
          <Text style={[textStyles.bold12, { color: Color.primaryText }]}>
            {i18n.t(`Would you like to`)}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
          <TouchableOpacity activeOpacity={0.6} onPress={toggleAcceptModalVisible}>
            <View style={[styles.acceptButton, { marginRight: 10 }]}>
              <Text style={[textStyles.semiBold12, { color: colors.light.white, marginRight: 10 }]}>
                {i18n.t(`Accept`)}
              </Text>
              <ArrowRight size={12} color={colors.light.white} weight="bold" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={toggleRejectModalVisible}>
            <View style={styles.rejectButton}>
              <Text style={[textStyles.semiBold12, { color: Color.grey1, marginRight: 10 }]}>
                {i18n.t(`Reject`)}
              </Text>
              <ArrowRight size={12} color={Color.grey1} weight="bold" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {isAcceptModalVisible && (
        <BottomSheetWrapper
          setIsVisible={setIsAcceptModalVisible}
          isVisible={isAcceptModalVisible}
          containerStyle={{
            height: height / 2.5,
          }}>
          <>
            <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
              <Header
                title={i18n.t('Accept Invitation')}
                hideBackIcon
                rightComponent={
                  <TouchableOpacity onPress={toggleAcceptModalVisible}>
                    <X
                      weight="bold"
                      size={20}
                      color={isDarkTheme ? colors.dark.grey2 : colors.light.grey2}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
              <View>
                <Text numberOfLines={2} style={[textStyles.semiBold16, styles.warningMessage]}>
                  {i18n.t(`Are you sure you want to accept this invitation?`)}
                </Text>
              </View>
              <View style={{ padding: 20, marginBottom: 10, alignItems: 'center' }}>
                <AppButton
                  buttonColor={Color.green}
                  title={`Yes, Accept`}
                  onPress={() => {
                    toggleAcceptModalVisible();
                    navigation.navigate('AcceptInvitationSuccessScreen');
                    onAccept(item);
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    toggleAcceptModalVisible();
                    toggleRejectModalVisible();
                  }}>
                  <View style={styles.optionB}>
                    <Text
                      style={[textStyles.semiBold16, { textAlign: 'center', color: Color.grey1 }]}>
                      {i18n.t(`Reject`)}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </>
        </BottomSheetWrapper>
      )}
      {isRejectModalVisible && (
        <BottomSheetWrapper
          setIsVisible={setIsRejectModalVisible}
          isVisible={isRejectModalVisible}
          containerStyle={{
            height: height / 2.5,
          }}>
          <>
            <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
              <Header
                title={i18n.t('Reject Invitation')}
                hideBackIcon
                rightComponent={
                  <TouchableOpacity onPress={toggleRejectModalVisible}>
                    <View style={{ padding: 10 }}>
                      <X
                        weight="bold"
                        size={20}
                        color={isDarkTheme ? colors.dark.grey2 : colors.light.grey2}
                      />
                    </View>
                  </TouchableOpacity>
                }
              />
            </View>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
              <View>
                <Text numberOfLines={2} style={[textStyles.semiBold16, styles.warningMessage]}>
                  {i18n.t(`Are you sure you want to reject this invitation?`)}
                </Text>
              </View>
              <View style={{ padding: 20, marginBottom: 10, alignItems: 'center' }}>
                <AppButton
                  buttonColor={Color.red}
                  title={`Yes, Reject`}
                  onPress={() => {
                    onReject(item);
                    toggleRejectModalVisible();
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    toggleRejectModalVisible();
                    toggleAcceptModalVisible();
                  }}>
                  <View style={styles.optionB}>
                    <Text
                      style={[textStyles.semiBold16, { textAlign: 'center', color: Color.grey1 }]}>
                      {i18n.t(`Accept`)}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </>
        </BottomSheetWrapper>
      )}
    </>
  );
};

export default memo(PendingInvitationCard);
