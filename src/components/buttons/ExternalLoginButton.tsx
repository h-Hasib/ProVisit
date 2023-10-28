import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useAppSelector } from 'src/store/hooks';
import { colors } from 'src/theme/colors';

interface ButtonProps {
  onPress: () => void;
  icon?: React.ReactNode;
}
const ExternalLoginButton = ({ onPress, icon }: ButtonProps) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[customStyles.background(isDarkTheme), styles.btnStyle]}>
      {icon}
    </TouchableOpacity>
  );
};

export default ExternalLoginButton;

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 10,
    paddingHorizontal: 28,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

const customStyles = {
  background: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderColor: isDarkTheme ? colors.dark.dark : colors.light.white,
  }),
};
