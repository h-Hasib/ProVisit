import { colors, textStyles } from '@theme';
import { File, TrashSimple } from 'phosphor-react-native';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';

const AttachmentList = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View style={customViewStyles.card(isDarkTheme)}>
      <View style={commonStyles.rowSpaceBetween}>
        <View style={commonStyles.rowStart}>
          <View style={styles.iconContainer}>
            <File size={28} color={colors.light.blue} />
          </View>
          <View>
            <Text style={customTextStyles.headerText(isDarkTheme)}>Project Brief v1.docx</Text>
            <Text style={customTextStyles.subText(isDarkTheme)}>41.02 kB</Text>
          </View>
        </View>
        <TouchableOpacity>
          <TrashSimple size={22} color={colors.dark.grey2} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AttachmentList;

const customViewStyles = {
  card: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  }),
};

const customTextStyles = {
  headerText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    ...textStyles.bold14,
  }),
  subText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.grey1 : colors.light.dark,
    marginTop: 3,
    ...textStyles.medium12,
  }),
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'rgba(20, 137, 223, 0.1)',
    borderRadius: 6,
    marginRight: 10,
    padding: 8,
  },
});
