import { colors, textStyles } from '@theme';
import { FolderOpen } from 'phosphor-react-native';
import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';

const FileUpload = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View>
      <TouchableOpacity
        style={customViewStyles.uploadContainer(isDarkTheme)}
        onPress={() => alert('Choose a file')}>
        <FolderOpen size={40} color={colors.light.blue} />
        <Text style={customTextStyles.headerText(isDarkTheme)}>
          {i18n.t('Browse Files to Upload')}
        </Text>
        <Text style={customTextStyles.des(isDarkTheme)}>{i18n.t('Maximum file size: 5 MB')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FileUpload;

const customViewStyles = {
  uploadContainer: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    borderWidth: 1,
    borderColor: colors.light.blue,
    borderRadius: 10,
    borderStyle: 'dashed',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDarkTheme ? colors.dark.background : colors.light.background,
    height: 136,
  }),
};
const customTextStyles = {
  headerText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.grey0_5 : colors.light.grey0_5,
    marginTop: 10,
    // marginBottom: 5,
    ...textStyles.semiBold14,
  }),
  des: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.grey0_5 : colors.light.grey1,
    ...textStyles.regular12,
  }),
};
