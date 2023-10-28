import { colors, textStyles } from '@theme';
import { TrashSimple } from 'phosphor-react-native';
import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import CheckIcon from '../../assets/svg/dashboard/CheckIcon';
import FileWarningIcon from '../../assets/svg/dashboard/FileWarningIcon';
import UploadingIcon from '../../assets/svg/dashboard/UploadingIcon';

const UploadedFiles = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View>
      <View style={commonStyles.rowSpaceBetween}>
        <View style={commonStyles.rowStart}>
          <CheckIcon />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={[
                textStyles.semiBold14,
                { color: isDarkTheme ? colors.dark.white : colors.light.dark },
              ]}>
              Project Brief v1.docx
            </Text>
            <Text
              style={[
                textStyles.medium12,
                { color: isDarkTheme ? colors.dark.grey1 : colors.light.grey0_5 },
              ]}>
              256 KB
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <TrashSimple size={20} color={colors.dark.grey2} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 1,
          marginVertical: 20,
          backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.grey4,
        }}
      />
      <View style={commonStyles.rowSpaceBetween}>
        <View style={commonStyles.rowStart}>
          <UploadingIcon />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={[
                textStyles.semiBold14,
                { color: isDarkTheme ? colors.dark.white : colors.light.dark },
              ]}>
              Project Brief v1.docx
            </Text>
            <Text
              style={[
                textStyles.medium12,
                { color: isDarkTheme ? colors.dark.grey1 : colors.light.grey0_5 },
              ]}>
              Uploading 48%
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 1,
          marginVertical: 20,
          backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.grey4,
        }}
      />
      <View style={commonStyles.rowSpaceBetween}>
        <View style={commonStyles.rowStart}>
          <FileWarningIcon />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={[
                textStyles.semiBold14,
                { color: isDarkTheme ? colors.dark.red : colors.light.red },
              ]}>
              {i18n.t('File_Big')}
            </Text>
            <Text
              style={[
                textStyles.medium12,
                { color: isDarkTheme ? colors.dark.grey1 : colors.light.grey0_5 },
              ]}>
              256 KB
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <TrashSimple size={20} color={colors.dark.grey2} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(UploadedFiles);

// const styles = StyleSheet.create({
//   iconContainer: {},
// });
