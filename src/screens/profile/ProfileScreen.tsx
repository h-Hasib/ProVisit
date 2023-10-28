import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles } from '@theme';
import {
  BellSimple,
  CaretRight,
  Check,
  CirclesThreePlus,
  Clock,
  FileText,
  GearSix,
  GlobeSimple,
  LockSimple,
  MoonStars,
  SignOut,
  Stack,
  Star,
  TrashSimple,
  Users,
  X,
} from 'phosphor-react-native';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
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
import BottomSheetWrapper from 'src/components/common/BottomSheetWrapper';
import Header from 'src/components/common/Header';
import ProfileCard from 'src/components/common/ProfileCard';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import PremiumButton from 'src/components/profile/PremiumButton';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { flashMessage } from 'src/services/flash-message.service';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { toggleAppTheme } from 'src/store/slices/appSlice';
const { height } = Dimensions.get('window');
export default function ProfileScreen() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isDeleteAccountModalVisible, setIsDeleteAccountModalVisible] = useState(false);
  const [isSignOutModalVisible, setIsSignOutModalVisible] = useState(false);
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English (US)');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const toggleDeleteAccountModalVisible = () => {
    setIsDeleteAccountModalVisible(!isDeleteAccountModalVisible);
  };
  const toggleSignOutModalVisible = () => {
    setIsSignOutModalVisible(!isSignOutModalVisible);
  };
  const toggleLanguageModalVisible = () => {
    setIsLanguageModalVisible(!isLanguageModalVisible);
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
    updateToPremiumBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 12,
      marginHorizontal: 20,
      marginTop: 30,
      paddingVertical: 14,
      paddingHorizontal: 20,
      backgroundColor: colors.light.blue,
    },
    sectionBox: {
      borderRadius: 16,
      marginTop: 10,
      margin: 20,
      paddingHorizontal: 20,
      paddingVertical: 12,
      backgroundColor: textColor.bgColor,
    },
    option: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: textColor.grey4,
      paddingVertical: 16,
    },
    rowCenter: { flexDirection: 'row', alignItems: 'center' },
    workspaceCount: {
      borderRadius: 12,
      paddingHorizontal: 14,
      paddingVertical: 5,
      marginRight: 10,
      backgroundColor: colors.light.earthBlue,
    },
    invitationCount: {
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 4,
      marginRight: 10,
      borderWidth: 1,
      borderColor: colors.light.red,
    },
    warningMessage: {
      color: textColor.primaryText,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 20,
      paddingHorizontal: 30,
    },
    optionB: {
      marginTop: 20,
      padding: 15,
      width: responsiveWidth(25),
    },
  });
  const workspaceCount = 1;
  const usersCount = 20;
  const invitationCount = 5;
  // const premiumUser = false;
  const premiumUser = false;
  return (
    <ScreenWrapper>
      <>
        <View
          style={{
            flexGrow: 1,
          }}>
          <ProfileCard
            headerTitle={'Profile'}
            name={'Adam Leonardo'}
            email={'adam.leonardeo@gmail.com'}
            image={`https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg`}
            hideBackButton={true}
            editProfileButton={true}
          />
          {!premiumUser && (
            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
              <PremiumButton />
            </View>
          )}

          {/* GENERAL Section */}
          <View style={{ marginLeft: 20, marginTop: 30 }}>
            <Text style={[textStyles.semiBold12, { color: textColor.grey2 }]}>
              {i18n.t(`GENERAL`)}
            </Text>
          </View>
          <View style={styles.sectionBox}>
            {/* Workspace */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('WorkspaceScreen')}>
              <View style={[styles.option]}>
                <View style={styles.rowCenter}>
                  <Stack size={20} color={colors.light.earthBlue} weight="duotone" />
                  <Text
                    style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                    {i18n.t(`Workspace`)}
                  </Text>
                </View>
                <View style={styles.rowCenter}>
                  <View style={styles.workspaceCount}>
                    <Text
                      style={[
                        textStyles.semiBold12,
                        { color: '#ffffff' },
                      ]}>{` ${workspaceCount} `}</Text>
                  </View>
                  <CaretRight size={16} color={textColor.grey1} weight="bold" />
                </View>
              </View>
            </TouchableOpacity>
            {/* My Pending Invitation */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('MyPendingInvitationScreen')}>
              <View style={[styles.option]}>
                <View style={styles.rowCenter}>
                  <Clock size={20} color={colors.light.earthBlue} weight="duotone" />
                  <Text
                    style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                    {i18n.t(`My Pending Invitation`)}
                  </Text>
                </View>
                <View style={styles.rowCenter}>
                  <View style={styles.invitationCount}>
                    <Text
                      style={[
                        textStyles.semiBold12,
                        { color: colors.light.red },
                      ]}>{` ${invitationCount} `}</Text>
                  </View>
                  <CaretRight size={16} color={textColor.grey1} weight="bold" />
                </View>
              </View>
            </TouchableOpacity>
            {/* Task Type */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('TaskTypeScreen')}>
              <View style={[styles.option, { paddingVertical: 20 }]}>
                <View style={styles.rowCenter}>
                  <CirclesThreePlus size={20} color={colors.light.earthBlue} weight="duotone" />
                  <Text
                    style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                    {i18n.t(`Task Type`)}
                  </Text>
                </View>
                <View style={styles.rowCenter}>
                  <CaretRight size={16} color={textColor.grey1} weight="bold" />
                </View>
              </View>
            </TouchableOpacity>
            {/* Task Category */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('TaskCategoryScreen')}>
              <View style={[styles.option, { paddingVertical: 20 }]}>
                <View style={styles.rowCenter}>
                  <CirclesThreePlus size={20} color={colors.light.earthBlue} weight="duotone" />
                  <Text
                    style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                    {i18n.t(`Task Category`)}
                  </Text>
                </View>
                <View style={styles.rowCenter}>
                  <CaretRight size={16} color={textColor.grey1} weight="bold" />
                </View>
              </View>
            </TouchableOpacity>
            {/* Team Setup */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('TeamSetupScreen')}>
              <View style={[styles.option, { paddingVertical: 20 }]}>
                <View style={styles.rowCenter}>
                  <GearSix size={20} color={colors.light.earthBlue} weight="duotone" />
                  <Text
                    style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                    {i18n.t(`Team Setup`)}
                  </Text>
                </View>
                <View style={styles.rowCenter}>
                  <CaretRight size={16} color={textColor.grey1} weight="bold" />
                </View>
              </View>
            </TouchableOpacity>

            {/* USERS */}
            <TouchableOpacity activeOpacity={0.7} onPress={() => alert('users')}>
              <View style={[styles.option, { borderBottomWidth: 0, paddingVertical: 20 }]}>
                <View style={styles.rowCenter}>
                  <Users size={20} color={colors.light.earthBlue} weight="duotone" />
                  <Text
                    style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                    {i18n.t(`Users`)}
                  </Text>
                </View>
                <View style={styles.rowCenter}>
                  <View style={styles.workspaceCount}>
                    <Text
                      style={[
                        textStyles.semiBold12,
                        { color: '#ffffff' },
                      ]}>{` ${usersCount} `}</Text>
                  </View>
                  <CaretRight size={16} color={textColor.grey1} weight="bold" />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* PREFERENCES Section */}
          <View style={{ marginLeft: 20 }}>
            <Text style={[textStyles.semiBold12, { color: textColor.grey2 }]}>
              {i18n.t(`PREFERENCES`)}
            </Text>
          </View>
          <View style={styles.sectionBox}>
            {/* Dark Mode */}
            <View style={[styles.option, { paddingVertical: 5 }]}>
              <View style={styles.rowCenter}>
                <MoonStars size={20} color={colors.light.earthBlue} weight="duotone" />
                <Text style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                  {i18n.t(`Dark Mode`)}
                </Text>
              </View>
              <Switch
                trackColor={{ false: colors.light.grey1, true: colors.light.blue }}
                thumbColor={colors.light.white}
                onValueChange={() => {
                  dispatch(toggleAppTheme());
                }}
                value={isDarkTheme}
              />
            </View>
            {/* Language */}
            <TouchableOpacity activeOpacity={0.7} onPress={toggleLanguageModalVisible}>
              <View style={[styles.option, { paddingVertical: 20 }]}>
                <View style={styles.rowCenter}>
                  <GlobeSimple size={20} color={colors.light.earthBlue} weight="duotone" />
                  <Text
                    style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                    {i18n.t(`Language`)}
                  </Text>
                </View>
                <View style={styles.rowCenter}>
                  <Text
                    style={[textStyles.semiBold12, { color: textColor.grey1, marginRight: 10 }]}>
                    {selectedLanguage}
                  </Text>
                  <CaretRight size={16} color={textColor.grey1} weight="bold" />
                </View>
              </View>
            </TouchableOpacity>
            {/* Notification */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('NotificationSetupScreen')}>
              <View style={[styles.option, { borderBottomWidth: 0, paddingVertical: 20 }]}>
                <View style={styles.rowCenter}>
                  <BellSimple size={20} color={colors.light.earthBlue} weight="duotone" />
                  <Text
                    style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                    {i18n.t(`Notification`)}
                  </Text>
                </View>
                <View style={styles.rowCenter}>
                  <CaretRight size={16} color={textColor.grey1} weight="bold" />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* ACCOUNT Section */}
          <View style={{ marginLeft: 20 }}>
            <Text style={[textStyles.semiBold12, { color: textColor.grey2 }]}>
              {i18n.t(`ACCOUNT`)}
            </Text>
          </View>
          <View style={[styles.sectionBox, { marginBottom: 55 }]}>
            {/* Change Password */}
            <TouchableOpacity activeOpacity={0.7} onPress={() => alert('Goto Change Password')}>
              <View style={[styles.option, { paddingVertical: 18 }]}>
                <View style={styles.rowCenter}>
                  <LockSimple size={20} color={colors.light.earthBlue} weight="duotone" />
                  <Text
                    style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                    {i18n.t(`Change Password`)}
                  </Text>
                </View>
                <View style={styles.rowCenter}>
                  <CaretRight size={16} color={textColor.grey1} weight="bold" />
                </View>
              </View>
            </TouchableOpacity>
            {/* Privacy Policy */}
            <TouchableOpacity activeOpacity={0.7} onPress={() => alert('Goto Privacy Policy')}>
              <View style={[styles.option, { paddingVertical: 18 }]}>
                <View style={styles.rowCenter}>
                  <FileText size={20} color={colors.light.earthBlue} weight="duotone" />
                  <Text
                    style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                    {i18n.t(`Privacy Policy`)}
                  </Text>
                </View>
                <View style={styles.rowCenter}>
                  <CaretRight size={16} color={textColor.grey1} weight="bold" />
                </View>
              </View>
            </TouchableOpacity>
            {/* Rate Us */}
            <TouchableOpacity activeOpacity={0.7} onPress={() => alert('Goto Rate Us')}>
              <View style={[styles.option, { paddingVertical: 18 }]}>
                <View style={styles.rowCenter}>
                  <Star size={20} color={colors.light.earthBlue} weight="duotone" />
                  <Text
                    style={[textStyles.bold14, { marginLeft: 12, color: textColor.primaryText }]}>
                    {i18n.t(`Rate Us`)}
                  </Text>
                </View>
                <View style={styles.rowCenter}>
                  <CaretRight size={16} color={textColor.grey1} weight="bold" />
                </View>
              </View>
            </TouchableOpacity>
            {/* Delete Account */}
            <TouchableOpacity activeOpacity={0.7} onPress={toggleDeleteAccountModalVisible}>
              <View style={[styles.option, { paddingVertical: 18 }]}>
                <View style={styles.rowCenter}>
                  <TrashSimple size={20} color={textColor.red} weight="duotone" />
                  <Text style={[textStyles.bold14, { marginLeft: 12, color: textColor.red }]}>
                    {i18n.t(`Delete Account`)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* Log Out */}
            <TouchableOpacity activeOpacity={0.7} onPress={toggleSignOutModalVisible}>
              <View style={[styles.option, { borderBottomWidth: 0, paddingVertical: 20 }]}>
                <View style={styles.rowCenter}>
                  <SignOut size={20} color={textColor.red} weight="duotone" />
                  <Text style={[textStyles.bold14, { marginLeft: 12, color: textColor.red }]}>
                    {i18n.t(`Log Out`)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {isDeleteAccountModalVisible && (
          <BottomSheetWrapper
            setIsVisible={setIsDeleteAccountModalVisible}
            isVisible={isDeleteAccountModalVisible}
            containerStyle={{
              height: height / 2.5,
            }}>
            <>
              <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                <Header
                  title={i18n.t('Delete Account')}
                  hideBackIcon
                  rightComponent={
                    <TouchableOpacity onPress={toggleDeleteAccountModalVisible}>
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
                    {i18n.t(`Are you sure you want to delete your account & all your information?`)}
                  </Text>
                </View>
                <View style={{ padding: 20, marginBottom: 10, alignItems: 'center' }}>
                  <AppButton
                    buttonColor={textColor.red}
                    title={`Yes, Delete`}
                    onPress={() => {
                      toggleDeleteAccountModalVisible();
                      flashMessage.info({ message: 'Not yet..' });
                    }}
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      flashMessage.success({ message: 'Thank you' });
                      toggleDeleteAccountModalVisible();
                    }}>
                    <View style={styles.optionB}>
                      <Text
                        style={[
                          textStyles.semiBold16,
                          { textAlign: 'center', color: textColor.grey1 },
                        ]}>
                        {i18n.t(`No Stay`)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          </BottomSheetWrapper>
        )}
        {isSignOutModalVisible && (
          <BottomSheetWrapper
            setIsVisible={setIsSignOutModalVisible}
            isVisible={isSignOutModalVisible}
            containerStyle={{
              height: height / 2.5,
            }}>
            <>
              <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                <Header
                  title={i18n.t('Sign Out')}
                  hideBackIcon
                  rightComponent={
                    <TouchableOpacity onPress={toggleSignOutModalVisible}>
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
                    {i18n.t(`Are you sure you want to Sign out your account?`)}
                  </Text>
                </View>
                <View style={{ padding: 20, marginBottom: 10, alignItems: 'center' }}>
                  <AppButton
                    buttonColor={textColor.red}
                    title={`Yes, Sign Out`}
                    onPress={() => {
                      toggleSignOutModalVisible();
                      flashMessage.info({ message: 'Not yet..' });
                    }}
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      flashMessage.success({ message: 'Thank you' });
                      toggleSignOutModalVisible();
                    }}>
                    <View style={styles.optionB}>
                      <Text
                        style={[
                          textStyles.semiBold16,
                          { textAlign: 'center', color: textColor.grey1 },
                        ]}>
                        {i18n.t(`No Stay`)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          </BottomSheetWrapper>
        )}
        {isLanguageModalVisible && (
          <BottomSheetWrapper
            isVisible={isLanguageModalVisible}
            setIsVisible={setIsLanguageModalVisible}
            containerStyle={{
              height: height / 1.3,
            }}>
            <>
              <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                <Header
                  title={i18n.t('Choose Language')}
                  hideBackIcon
                  rightComponent={
                    <TouchableOpacity onPress={toggleLanguageModalVisible}>
                      <X
                        weight="bold"
                        size={20}
                        color={isDarkTheme ? colors.dark.grey2 : colors.light.grey2}
                      />
                    </TouchableOpacity>
                  }
                />
              </View>
              <View style={{}}>
                <FlatList
                  data={countryLanguageData}
                  keyExtractor={item => item.language}
                  renderItem={({ item }) => (
                    <View style={{}}>
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedLanguage(item.language);
                          toggleLanguageModalVisible();
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingVertical: 20,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              paddingHorizontal: 20,
                            }}>
                            <View>{item.flag}</View>
                            <View style={{ marginLeft: 10 }}>
                              <Text
                                style={[textStyles.regular14, { color: textColor.primaryText }]}>
                                {item.language}
                              </Text>
                            </View>
                          </View>
                          {selectedLanguage === item.language ? (
                            <View style={{ marginRight: 40, padding: 0 }}>
                              <Check size={24} color={textColor.blue} weight={'bold'} />
                            </View>
                          ) : null}
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        borderBottomWidth: 1,
                        marginHorizontal: 20,
                        borderColor: textColor.grey4,
                      }}
                    />
                  )}
                  ListFooterComponent={() => <View style={{ margin: 50 }} />}
                />
              </View>
            </>
          </BottomSheetWrapper>
        )}
      </>
    </ScreenWrapper>
  );
}

interface countryLanguageDataProps {
  language: string;
  flag: React.ReactNode;
}
const countryLanguageData: countryLanguageDataProps[] = [
  {
    language: 'English (UK)',
    flag: <UK />,
  },
  {
    language: 'Bangla',
    flag: <Bangladesh />,
  },
  {
    language: 'English (US)',
    flag: <USA />,
  },
  {
    language: 'Indonesian',
    flag: <Indonesia />,
  },
  {
    language: 'Japanese',
    flag: <Japan />,
  },
  {
    language: 'Italy',
    flag: <Italy />,
  },
  {
    language: 'France',
    flag: <France />,
  },
  {
    language: 'Germany',
    flag: <Germany />,
  },
  {
    language: 'Swedish',
    flag: <Sweden />,
  },
  {
    language: 'Russian',
    flag: <Russia />,
  },
  {
    language: 'Sri Lankan',
    flag: <SriLanka />,
  },
  {
    language: 'Indian',
    flag: <India />,
  },
];
