import { colors, textStyles } from '@theme';
import { X } from 'phosphor-react-native';
import React from 'react';
import {
  FlatList,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Userpic } from 'react-native-userpic';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import BottomSheetWrapper from '../common/BottomSheetWrapper';
import Header from '../common/Header';

interface WorkspaceItem {
  id: number;
  name: string;
}

const workspaceData: WorkspaceItem[] = Array(10)
  .fill(0)
  .map((item, index) => ({ id: index + 1, name: `John ${index + 1}` }));

interface SetWorkspaceModalProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const SetWorkspaceModal: React.FC<SetWorkspaceModalProps> = ({ setIsVisible, isVisible }) => {
  const { isDarkTheme } = useAppSelector(state => state.app);

  const renderItem = ({ item }: { item: WorkspaceItem }) => {
    return (
      <TouchableOpacity style={customViewStyles.workspaceListContainer(isDarkTheme)}>
        <View style={commonStyles.rowStart}>
          <Userpic name={item?.name} size={40} colorize={true} />

          <View style={{ marginLeft: 10 }}>
            <Text style={customTextStyles.name(isDarkTheme)}>{item.name} Workspace</Text>
            <Text style={customTextStyles.member(isDarkTheme)}>2 Member</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <BottomSheetWrapper setIsVisible={setIsVisible} isVisible={isVisible}>
      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <Header
          title={i18n.t('Set Workspace')}
          hideBackIcon
          rightComponent={
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <X
                weight="bold"
                size={20}
                color={isDarkTheme ? colors.dark.grey2 : colors.light.grey2}
              />
            </TouchableOpacity>
          }
        />
      </View>
      <FlatList
        data={workspaceData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={{ height: responsiveWidth(3) }} />}
        ListEmptyComponent={
          <View>
            <Text>You have workspace list</Text>
          </View>
        }
        ListFooterComponent={
          <TouchableOpacity style={styles.addBtnContainer}>
            <Userpic
              name="Halima"
              size={40}
              colorize={true}
              style={{ borderRadius: 8, marginRight: 10 }}
            />
            <Text style={customTextStyles.addBtnText(isDarkTheme)}>Add New Workspace</Text>
          </TouchableOpacity>
        }
      />
    </BottomSheetWrapper>
  );
};

export default SetWorkspaceModal;

const customViewStyles = {
  workspaceListContainer: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    padding: 12,
    backgroundColor: isDarkTheme ? colors.dark.grey3 : colors.light.lightGrey03,
    borderRadius: 12,
    borderColor: isDarkTheme ? colors.dark.grey3 : colors.light.denim,
    borderWidth: 1,
  }),
};

const customTextStyles = {
  headerText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    textAlign: 'center',
    ...textStyles.semiBold16,
  }),
  name: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    ...textStyles.semiBold14,
  }),
  member: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.grey2 : colors.light.grey1,
    marginTop: -3,
    ...textStyles.medium12,
  }),
  addBtnText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    ...textStyles.semiBold14,
  }),
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  addBtnContainer: {
    marginTop: responsiveWidth(3),
    padding: 15,
    ...commonStyles.rowStart,
  },
});
