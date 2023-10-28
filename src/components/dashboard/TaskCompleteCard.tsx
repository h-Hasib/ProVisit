import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles } from '@theme';
import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { RootStackParamList } from 'src/interfaces/navigation';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import TaskCompleteCheckedIcon from '../../assets/svg/dashboard/TaskCompleteCheckedIcon';
import AvatarCount from '../common/AvatarCount';

const TaskCompleteCard = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('TaskDetailsScreen');
      }}
      style={customViewStyles.card(isDarkTheme)}>
      <View style={commonStyles.rowSpaceBetween}>
        <View style={commonStyles.rowStart}>
          <TaskCompleteCheckedIcon />
          <View style={{ marginLeft: 10, width: responsiveWidth(40) }}>
            <Text numberOfLines={2} style={customTextStyles.headerText(isDarkTheme)}>
              Check visitor
            </Text>
            <Text style={customTextStyles.subText(isDarkTheme)}>Today, 04:00 PM</Text>
          </View>
        </View>

        <View style={{}}>
          <AvatarCount size={28} data={[]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCompleteCard;

const customViewStyles = {
  card: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    padding: 20,
    backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderRadius: 16,
    borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
    borderWidth: 1,
  }),
};

const customTextStyles = {
  headerText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    ...textStyles.bold14,
  }),
  subText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.grey2 : colors.light.grey1,
    ...textStyles.regular12,
  }),
};
