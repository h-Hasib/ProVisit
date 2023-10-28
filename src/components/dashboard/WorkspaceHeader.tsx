import { colors, textStyles } from '@theme';
import { Bell } from 'phosphor-react-native';
import React, { useState } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import { Userpic } from 'react-native-userpic';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import CaretUpDown from '../../assets/svg/dashboard/CaretUpDown';
import SetWorkspaceModal from './SetWorkspaceModal';

const WorkspaceHeader = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isSetWorkspaceModalVisible, setIsSetWorkspaceModalVisible] = useState(false);
  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => setIsSetWorkspaceModalVisible(!isSetWorkspaceModalVisible)}
          style={styles.workspaceBtnContainer}>
          <View style={commonStyles.rowStart}>
            <Userpic
              name="Saddd"
              size={34}
              colorize={true}
              style={{ borderRadius: 8, marginRight: 10 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={customTextStyles.title(isDarkTheme)}>Workspace</Text>
              <Text style={customTextStyles.workspaceName(isDarkTheme)}>Sales Force</Text>
            </View>
          </View>
          <CaretUpDown />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <View style={{ width: 20 }}>
            <Bell size={20} color={isDarkTheme ? colors.dark.grey1 : colors.light.grey2} />
            <View style={styles.badge} />
          </View>
        </TouchableOpacity>
      </View>

      <SetWorkspaceModal
        setIsVisible={setIsSetWorkspaceModalVisible}
        isVisible={isSetWorkspaceModalVisible}
      />
    </>
  );
};

export default WorkspaceHeader;

const customTextStyles = {
  title: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.grey2,
    ...textStyles.regular12,
  }),
  workspaceName: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.grey2 : colors.light.grey0_5,
    marginTop: -3,
    ...textStyles.bold14,
  }),
};
const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    ...commonStyles.rowSpaceBetween,
  },
  workspaceBtnContainer: {
    width: '80%',
    ...commonStyles.rowSpaceBetween,
  },
  iconContainer: {
    width: '20%',
    paddingVertical: 8,
    alignItems: 'flex-end',
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    width: 8,
    height: 8,
    backgroundColor: colors.light.red,
    borderRadius: 20,
    right: 2,
    borderWidth: 1,
    borderColor: colors.light.white,
  },
});
