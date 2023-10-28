import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles } from '@theme';
import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { RootStackParamList } from 'src/interfaces/navigation';
import { useAppSelector } from 'src/store/hooks';

interface HeaderProps {
  title?: string;
  onPressBack?: () => void;
  hideBackIcon?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  leftIconColor?: string;
  titleColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onPressBack,
  hideBackIcon = false,
  leftComponent,
  rightComponent,
  style,
  titleStyle,
  leftIconColor,
  titleColor,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDarkTheme } = useAppSelector(state => state.app);
  const Color = {
    grey2: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    grey1: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
  };
  return (
    <View style={[{ overflow: 'hidden' }, style]}>
      <View style={[styles.wrapperHeader, {}]}>
        <View style={{ width: responsiveWidth(10) }}>
          {leftComponent ||
            (!hideBackIcon && (
              <TouchableOpacity onPress={onPressBack ? onPressBack : () => navigation.pop()}>
                <ArrowLeft
                  size={22}
                  weight="bold"
                  color={leftIconColor ? leftIconColor : Color.grey1}
                />
              </TouchableOpacity>
            ))}
        </View>
        <View style={{ width: responsiveWidth(70) }}>
          {title && (
            <Text
              style={[
                { color: titleColor ? titleColor : Color.grey1 },
                textStyles.semiBold16,
                titleStyle,
                { textAlign: 'center' },
              ]}>
              {title}
            </Text>
          )}
        </View>
        <View style={styles.rightComponentStyle}>{rightComponent}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  rightComponentStyle: {
    width: responsiveWidth(10),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;
