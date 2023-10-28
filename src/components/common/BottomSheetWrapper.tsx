import { colors } from '@theme';
import React from 'react';
import { Dimensions, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from 'src/store/hooks';

const { height } = Dimensions.get('window');

interface BottomSheetWrapperProps {
  children: React.ReactNode;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onBackButtonPress?: () => void;
  onPressBackDropCloseModal?: boolean;
  hasBackDrop?: boolean;
}

export default function BottomSheetWrapper({
  children,
  setIsVisible,
  isVisible,
  containerStyle,
  onBackButtonPress = () => setIsVisible(false),
  onPressBackDropCloseModal = true,
  hasBackDrop = true,
}: BottomSheetWrapperProps) {
  const { isDarkTheme } = useAppSelector(state => state.app);

  return (
    <Modal
      backdropColor={isDarkTheme ? '#2A4463' : '#102135'}
      isVisible={isVisible}
      hasBackdrop={hasBackDrop}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={() => (onPressBackDropCloseModal ? setIsVisible(false) : setIsVisible(true))}
      style={styles.modalContainer}>
      <View
        style={[
          styles.childContainer,
          { backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white },
          containerStyle,
        ]}>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  childContainer: {
    height: height / 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
