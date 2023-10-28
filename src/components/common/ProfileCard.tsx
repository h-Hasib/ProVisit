import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles } from '@theme';
import { Pencil } from 'phosphor-react-native';
import React, { memo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Userpic } from 'react-native-userpic';
import Bubble1Svg from 'src/assets/svg/report/Bubble1Svg';
import Bubble2Svg from 'src/assets/svg/report/Bubble2Svg';
import WhiteLine1 from 'src/assets/svg/report/WhiteLine1';
import WhiteLine2 from 'src/assets/svg/report/WhiteLine2';
import { RootStackParamList } from 'src/interfaces/navigation';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import ProfilePictureUploadModal from '../profile/ProfilePictureUploadModal';
import Header from './Header';
interface Props {
  name?: string;
  image?: string;
  email?: string;
  headerTitle?: string;
  hideBackButton?: boolean;
  backButtonColor?: string;
  editProfileButton?: boolean;
  editProfilePicture?: boolean;
}
const ProfileCard = ({
  image,
  name,
  email,
  headerTitle = 'My Reports',
  hideBackButton = false,
  backButtonColor = '#ffffff',
  editProfileButton = false,
  editProfilePicture = false,
}: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isProfilePictureUploadModalVisible, setIsProfilePictureUploadModalVisible] =
    useState(false);
  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    bgColor: isDarkTheme ? colors.dark.background : colors.light.background,
  };
  const styles = StyleSheet.create({
    card: {
      padding: 0,
      borderRadius: 0,
      marginBottom: 20,
      height: 210,
    },
    centerContent: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    middle: {
      marginBottom: 20,
    },
    circleContainer: {
      position: 'relative',
      alignItems: 'center',
    },
    circle: {
      position: 'absolute',
      bottom: -55,
      borderWidth: 2,
      borderColor: textColor.bgColor,
      backgroundColor: colors.light.blue,
      borderRadius: 50,
      padding: 10,
    },
    profilePictureChangeButton: {
      position: 'absolute',
      borderWidth: 2,
      bottom: -20,
      borderColor: textColor.bgColor,
      backgroundColor: colors.light.blue,
      borderRadius: 50,
      padding: 7,
    },
    bottomRightBubble: {
      position: 'absolute',
      right: 0,
      bottom: editProfileButton ? -33 : editProfilePicture ? -35 : -31,
    },
  });
  return (
    <View
      style={[
        commonStyles.shadow2,
        styles.card,
        { backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white },
      ]}>
      <View>
        <View style={{ position: 'absolute' }}>
          <Bubble1Svg />
        </View>
        <View style={{ position: 'absolute' }}>
          <WhiteLine1 />
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <Header
            title={headerTitle}
            hideBackIcon={hideBackButton}
            leftIconColor={backButtonColor}
          />
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 12 }}>
          {!editProfilePicture ? (
            <>
              <View>
                {image ? (
                  <Userpic source={{ uri: image }} size={65} colorize={true} />
                ) : (
                  <Userpic name={name} size={65} colorize={true} />
                )}
              </View>
              <View style={{ marginTop: 14 }}>
                <Text
                  numberOfLines={1}
                  style={[textStyles.semiBold18, { color: textColor.primaryText }]}>
                  {name}
                </Text>
              </View>
              <View style={{ marginTop: 4 }}>
                <Text
                  numberOfLines={1}
                  style={[textStyles.regular12, { color: textColor.primaryText }]}>
                  {email}
                </Text>
              </View>
            </>
          ) : (
            <View>
              {image ? (
                <Userpic source={{ uri: image }} size={120} colorize={true} />
              ) : (
                <Userpic name={name} size={120} colorize={true} />
              )}

              <View style={styles.circleContainer}>
                <View style={styles.profilePictureChangeButton}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setIsProfilePictureUploadModalVisible(true)}>
                    <Pencil size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
        <View style={{ position: 'relative', alignItems: 'flex-end' }}>
          <View style={styles.bottomRightBubble}>
            <Bubble2Svg />
          </View>
          <View style={styles.bottomRightBubble}>
            <WhiteLine2 />
          </View>
        </View>
      </View>
      {editProfileButton && (
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('EditProfileScreen')}>
              <Pencil size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {isProfilePictureUploadModalVisible && (
        <ProfilePictureUploadModal
          isVisible={isProfilePictureUploadModalVisible}
          setIsVisible={setIsProfilePictureUploadModalVisible}
        />
      )}
    </View>
  );
};

export default memo(ProfileCard);
