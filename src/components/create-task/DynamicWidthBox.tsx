import { colors, textStyles } from '@theme';
import { CaretRight } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useAppSelector } from 'src/store/hooks';

interface Props {
  text: string;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  onPress?: () => void;
  color?: string;
}

const DynamicWidthBox = ({ text, icon, onPress, leftIcon, color }: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [boxWidth, setBoxWidth] = useState(0);

  useEffect(() => {
    // Calculate the width of the text content
    const updateBoxWidth = () => {
      if (text) {
        const textWidth = text.length * 7;
        setBoxWidth(textWidth);
      }
    };

    updateBoxWidth();
  }, [text]);

  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    boxColor: color ? color : isDarkTheme ? colors.light.grey0_5 : '#EEF2FA',
  };
  const styles = StyleSheet.create({
    box: {
      minWidth: responsiveWidth(40),
      maxWidth: responsiveWidth(90),
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 6,
      backgroundColor: textColor.boxColor,
      height: responsiveHeight(4),
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
  });

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.box, { width: boxWidth }]}>
        {leftIcon ? leftIcon : null}
        <Text
          style={[
            textStyles.semiBold12,
            { color: textColor.secondaryText, marginRight: 2, textAlign: 'center' },
          ]}>
          {text}
        </Text>

        {icon ? icon : <CaretRight size={12} color={textColor.secondaryText} weight="bold" />}
      </View>
    </TouchableOpacity>
  );
};

export default DynamicWidthBox;
