import { colors, textStyles } from '@theme';
import { ArrowRight, IconProps } from 'phosphor-react-native';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
interface ButtonProps {
  title?: string;
  mode?: 'outlined' | 'contained';
  onPress?: () => void;
  styleProp?: ViewStyle;
  buttonColor?: string;
  labelColor?: string;
  leftIcon?: React.ReactElement<IconProps>;
  rightIcon?: React.ReactElement<IconProps>;
  isLoading?: boolean;
  isDisable?: boolean;
}

const AppButton = ({
  title = 'Continue',
  mode = 'contained',
  onPress = () => alert('Button Pressed.'),
  styleProp,
  buttonColor = colors.light.earthBlue,
  labelColor,
  leftIcon,
  rightIcon,
  isLoading = false,
  isDisable = false,
}: ButtonProps) => {
  const { isDarkTheme } = useAppSelector(state => state.app);

  const styles = StyleSheet.create({
    containedButton: {
      width: '100%',
      borderRadius: 30,
      paddingVertical: 16,
      backgroundColor: isDisable ? (isDarkTheme ? '#B89BFCB2' : '#662BF24D') : buttonColor,
    },
    outlinedButton: {
      width: '100%',
      borderRadius: 30,
      borderWidth: 1,
      paddingVertical: 16,
      borderColor: buttonColor,
      backgroundColor: isDarkTheme ? colors.dark.background : colors.light.white,
    },
    labelStyle: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  });
  const getLabelColor = () => {
    if (mode === 'contained') {
      if (labelColor) {
        return labelColor;
      }
      return colors.light.white;
    } else if (mode === 'outlined') {
      if (labelColor) {
        return labelColor;
      }
      return colors.light.earthBlue;
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDisable || isLoading}
      style={[styleProp, { width: '100%' }]}>
      <View style={[mode === 'contained' ? styles.containedButton : styles.outlinedButton]}>
        <View style={styles.labelStyle}>
          {leftIcon ? (
            isLoading && !rightIcon && !isDisable ? (
              <ActivityIndicator size="small" color={getLabelColor()} />
            ) : (
              leftIcon
            )
          ) : null}
          <Text style={[textStyles.semiBold16, { color: getLabelColor(), marginHorizontal: 5 }]}>
            {i18n.t(title)}
          </Text>
          {rightIcon ? (
            isLoading && !isDisable ? (
              <ActivityIndicator size="small" color={getLabelColor()} />
            ) : (
              rightIcon
            )
          ) : isLoading && !isDisable ? (
            <ActivityIndicator size="small" color={getLabelColor()} />
          ) : (
            <ArrowRight size={22} color={getLabelColor()} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
