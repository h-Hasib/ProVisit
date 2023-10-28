import { colors, textStyles } from '@theme';
import { MapPin, X } from 'phosphor-react-native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import RegularButton from '../buttons/RegularButton';
import BottomSheetWrapper from '../common/BottomSheetWrapper';
import Header from '../common/Header';
import FileUpload from './FileUpload';
import UploadedFiles from './UploadedFiles';
const { height } = Dimensions.get('window');

interface SetWorkspaceModalProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const StartVisitModal: React.FC<SetWorkspaceModalProps> = ({ setIsVisible, isVisible }) => {
  const { isDarkTheme } = useAppSelector(state => state.app);

  return (
    <BottomSheetWrapper
      containerStyle={styles.modalContainer}
      setIsVisible={setIsVisible}
      isVisible={isVisible}>
      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <Header
          title={i18n.t('Attach a File')}
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
        <Text style={customStyles.titleText(isDarkTheme)}>Uploaded Files</Text>
        <UploadedFiles />
        <RegularButton
          onPress={() => {
            alert('Start Visit');
          }}
          leftIcon={<MapPin size={20} color={colors.light.white} />}
          title={i18n.t('Start Visit')}
          style={styles.visitStartBtn}
          btnText={textStyles.semiBold16}
        />
      </ScrollView>
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
  visitStartBtn: {
    paddingVertical: 15,
    marginTop: 15,
  },
});
