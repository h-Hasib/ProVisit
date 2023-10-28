import { colors, textStyles } from '@theme';
import { X } from 'phosphor-react-native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import i18n from 'src/languages/i18n';
import { flashMessage } from 'src/services/flash-message.service';
import { useAppSelector } from 'src/store/hooks';
import AppButton from '../buttons/AppButton';
import BottomSheetWrapper from '../common/BottomSheetWrapper';
import Header from '../common/Header';
import FileUpload from '../task-details/FileUpload';
import UploadedFiles from '../task-details/UploadedFiles';

const { height } = Dimensions.get('window');

interface ProfilePictureUploadModalProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const StartVisitModal: React.FC<ProfilePictureUploadModalProps> = ({ setIsVisible, isVisible }) => {
  const { isDarkTheme } = useAppSelector(state => state.app);

  return (
    <BottomSheetWrapper
      containerStyle={styles.modalContainer}
      setIsVisible={setIsVisible}
      isVisible={isVisible}>
      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <Header
          title={i18n.t('Upload Profile Picture')}
          hideBackIcon
          rightComponent={
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <X
                weight="bold"
                size={20}
                color={isDarkTheme ? colors.dark.grey2 : colors.light.grey2}
              />
            </TouchableOpacity>
          }
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
        <FileUpload />
        <Text style={customStyles.titleText(isDarkTheme)}>{i18n.t('Uploaded Files')}</Text>
        <UploadedFiles />
      </ScrollView>
      <View style={{ margin: 20 }}>
        <AppButton
          title={'Confirm'}
          onPress={() => {
            setIsVisible(false);
            flashMessage.success({ message: 'Profile Picture Uploaded' });
          }}
        />
      </View>
    </BottomSheetWrapper>
  );
};

export default StartVisitModal;

const customStyles = {
  titleText: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    marginBottom: 20,
    ...textStyles.semiBold14,
  }),
};

const styles = StyleSheet.create({
  modalContainer: {
    height: height / 1.3,
  },
});
