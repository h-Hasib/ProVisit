import { colors, textStyles } from '@theme';
import { ArrowRight, CheckCircle, MagnifyingGlass, X } from 'phosphor-react-native';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Userpic } from 'react-native-userpic';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import RegularButton from '../buttons/RegularButton';
import BottomSheetWrapper from '../common/BottomSheetWrapper';
import Header from '../common/Header';
const { height } = Dimensions.get('window');

interface UserList {
  id: number;
  name: string;
}

const userData: UserList[] = Array(10)
  .fill(0)
  .map((item, index) => ({ id: index + 1, name: `Jane Cooper ${index + 1}` }));

interface SetWorkspaceModalProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const AddUserModal: React.FC<SetWorkspaceModalProps> = ({ setIsVisible, isVisible }) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [selectedUsers, setSelectedUsers] = useState<UserList[]>([]);

  const renderItem = ({ item }: { item: UserList }) => {
    const isSelected = selectedUsers.some(user => user.id === item.id);

    const toggleSelection = () => {
      if (isSelected) {
        setSelectedUsers(selectedUsers.filter(user => user.id !== item.id));
      } else {
        setSelectedUsers([...selectedUsers, item]);
      }
    };

    return (
      <TouchableOpacity
        onPress={toggleSelection}
        style={[customStyles.userListContainer(isSelected)]}>
        <View style={commonStyles.rowStart}>
          <Userpic name={item?.name} size={28} colorize={true} />
          <Text style={customStyles.name(isDarkTheme)}>{item.name}</Text>
        </View>
        {isSelected && <CheckCircle weight="fill" size={24} color={colors.light.earthBlue} />}
      </TouchableOpacity>
    );
  };

  return (
    <BottomSheetWrapper
      containerStyle={styles.modalContainer}
      setIsVisible={setIsVisible}
      isVisible={isVisible}>
      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <Header
          title="Add User"
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

      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
        <View>
          <View style={customStyles.searchContainer(isDarkTheme)}>
            <MagnifyingGlass
              size={18}
              color={isDarkTheme ? colors.dark.grey1 : colors.light.grey1}
            />
            <TextInput
              style={[
                styles.searchInput,
                { color: isDarkTheme ? colors.dark.white : colors.light.dark },
              ]}
              placeholder="Search by name"
              placeholderTextColor={isDarkTheme ? colors.dark.grey1 : colors.light.grey1}
            />
          </View>

          <FlatList
            data={userData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            ListEmptyComponent={
              <View>
                <Text>You have no user list</Text>
              </View>
            }
            ListFooterComponent={<View style={{ height: 100 }} />}
          />
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 20 }}>
        <RegularButton
          onPress={() => {
            // console.log('Selected Users:', selectedUsers);
            alert(`Selected User ${selectedUsers}`);
          }}
          rightIcon={<ArrowRight size={20} color={colors.light.white} />}
          title="Add User"
          style={styles.visitStartBtn}
          btnText={textStyles.semiBold16}
        />
      </View>
    </BottomSheetWrapper>
  );
};

export default AddUserModal;

const customStyles = {
  searchContainer: (isDarkTheme: boolean) => ({
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginVertical: 30,
    height: 42,
    ...commonStyles.rowStart,
    borderWidth: 1,
    borderColor: isDarkTheme ? colors.dark.grey1 : colors.light.grey4,
    borderRadius: 12,
  }),
  userListContainer: (isSelected: boolean) => ({
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: isSelected ? 1 : 1,
    borderColor: isSelected ? colors.light.earthBlue : 'transparent',
    borderRadius: 10,
    ...commonStyles.rowSpaceBetween,
  }),
  name: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    marginLeft: 10,
    ...textStyles.semiBold16,
  }),
};

const styles = StyleSheet.create({
  modalContainer: {
    height: height / 1.3,
  },
  visitStartBtn: {
    paddingVertical: 16,
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignSelf: 'center',
  },
  searchInput: {
    flex: 1,
    ...textStyles.regular14,
    marginLeft: 10,
  },
});
