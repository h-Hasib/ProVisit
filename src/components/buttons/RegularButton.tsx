import { colors, textStyles } from '@theme';
import React, { ReactNode } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  btnText?: StyleProp<TextStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const RegularButton: React.FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onPress}
      style={[props.style, styles.button]}>
      {props.leftIcon ? <View>{props.leftIcon}</View> : null}
      <Text style={[styles.btnText, props.btnText]}> {props.title} </Text>
      {props.rightIcon ? <View>{props.rightIcon}</View> : null}
    </TouchableOpacity>
  );
};

export default RegularButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.light.earthBlue,
    // width: '100%',
    // height: 52,
    // padding: 12,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    marginHorizontal: 5,
    color: colors.light.white,
    ...textStyles.semiBold16,
  },
});
