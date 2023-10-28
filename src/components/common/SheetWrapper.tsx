import { colors } from '@theme';
import React from 'react';
import { Dimensions, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from 'src/store/hooks';

const { height } = Dimensions.get('window');

interface SheetWrapper {
  children: React.ReactNode;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function SheetWrapper({
  children,
  setIsVisible,
  isVisible,
  containerStyle,
}: SheetWrapper) {
  const { isDarkTheme } = useAppSelector(state => state.app);

  return (
    <Modal
      backdropColor={isDarkTheme ? '#2A4463' : '#102135'}
      isVisible={isVisible}
      onBackButtonPress={() => setIsVisible(false)}
      onBackdropPress={() => setIsVisible(false)}
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
    height: height / 1.2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
