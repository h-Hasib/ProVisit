import { colors, textStyles } from '@theme';
import { Clock, Timer } from 'phosphor-react-native';
import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
interface Props {
  leftIcon?: ReactNode;
  leftColumnName: string;
  leftColumnValue: string;
  rightIcon?: ReactNode;
  rightColumnName: string;
  rightColumnValue: string;
  bgColor?: string;
}
const TimerCard = ({
  leftIcon,
  leftColumnName,
  leftColumnValue,
  rightIcon,
  rightColumnName,
  rightColumnValue,
  bgColor,
}: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View
      style={[
        commonStyles.rowSpaceBetween,
        {
          padding: 14,
          borderRadius: 8,
          backgroundColor: bgColor
            ? bgColor
            : isDarkTheme
            ? colors.dark.background
            : colors.light.background,
          // borderWidth: 1,
          borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
        },
      ]}>
      <View style={commonStyles.rowStart}>
        {leftIcon ? leftIcon : <Clock size={32} weight="bold" color={colors.light.grey2} />}
        <View style={{ marginLeft: 10 }}>
          <Text
            style={[
              textStyles.medium12,
              {
                color: bgColor ? '#FFFFFF' : isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
                marginRight: 5,
              },
            ]}>
            {i18n.t(leftColumnName)}
          </Text>
          <Text
            style={[
              textStyles.bold14,
              {
                color: bgColor ? '#FFFFFF' : isDarkTheme ? colors.dark.white : colors.light.dark,
                marginRight: 5,
              },
            ]}>
            {leftColumnValue}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 1,
          height: 32,
          backgroundColor: isDarkTheme ? colors.dark.grey3 : colors.light.grey3,
        }}
      />
      <View style={commonStyles.rowStart}>
        {rightIcon ? rightIcon : <Timer size={32} weight="bold" color={colors.light.grey2} />}
        <View style={{ marginLeft: 10 }}>
          <Text
            style={[
              textStyles.medium12,
              {
                color: bgColor ? '#FFFFFF' : isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
                marginRight: 5,
              },
            ]}>
            {i18n.t(rightColumnName)}
          </Text>
          <Text
            style={[
              textStyles.bold14,
              {
                color: bgColor ? '#FFFFFF' : isDarkTheme ? colors.dark.white : colors.light.dark,
                marginRight: 5,
              },
            ]}>
            {rightColumnValue}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(TimerCard);

// const styles = StyleSheet.create({});
