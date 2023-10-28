import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles } from '@theme';
import { Field, Formik } from 'formik';
import { DotsThree, PencilLine, TextT, Trash, Users, X } from 'phosphor-react-native';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Userpic } from 'react-native-userpic';
import SadEmoji from 'src/assets/svg/emoji/SadEmoji';
import CheckCircle from 'src/assets/svg/report/CheckCircle';
import AppButton from 'src/components/buttons/AppButton';
import BottomSheetWrapper from 'src/components/common/BottomSheetWrapper';
import Header from 'src/components/common/Header';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import FlatTextField from 'src/components/inputs/FlatTextField';
import SearchField from 'src/components/inputs/SearchField';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { flashMessage } from 'src/services/flash-message.service';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import * as Yup from 'yup';

const { height } = Dimensions.get('window');

interface TeamData {
  id: string;
  teamName: string;
  memberCount: number;
}

interface UserData {
  id: string;
  name: string;
  profilePicture?: string;
}

export default function TeamSetupScreen() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [selectedTeam, setSelectedTeam] = useState<TeamData | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; right: number }>({
    top: 0,
    right: 0,
  });
  const [updatedData, setUpdatedData] = useState<TeamData[]>(data);
  const [isCreateTeamModalVisible, setIsCreateTeamModalVisible] = useState<boolean>(false);
  const [isAddMemberModalVisible, setIsAddMemberModalVisible] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<UserData[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [searchKeyword, setSearchKeyword] = useState('');
  const cardRefs = useRef<{ [key: string]: TouchableOpacity | null }>({});

  const openDropdown = (TeamData: TeamData, cardId: string) => {
    setSelectedTeam(TeamData);
    // Measure the card's position relative to the screen
    if (cardRefs.current[cardId]) {
      cardRefs.current[cardId]?.measureInWindow((x, y) => {
        if (parseInt(cardId, 10) > data.length / 2) {
          setDropdownPosition({ top: y - 90, right: x + 40 });
        } else {
          setDropdownPosition({ top: y + 28, right: x + 10 });
        }
        setDropdownVisible(true);
      });
    }
  };

  const closeDropdown = () => {
    setSelectedTeam(null);
    setDropdownVisible(false);
  };
  const toggleCreateTeamModalVisible = () => {
    setIsCreateTeamModalVisible(!isCreateTeamModalVisible);
  };
  const toggleAddMemberModalVisible = () => {
    setIsAddMemberModalVisible(!isAddMemberModalVisible);
    setSelectedItems([]);
  };
  const handleSearch = (searchText: string) => {
    // Implement the logic to filter countries based on searchText
    const filtered = userData.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredUsers(filtered);
    setSearchKeyword(searchText);
  };
  const initialValues = {
    teamName: isEdit ? (selectedTeam?.teamName ? selectedTeam.teamName : '') : '',
  };
  const validationSchema = Yup.object().shape({
    teamName: Yup.string().required(i18n.t(`Team Name is required`)),
  });
  const handleSubmit = (values: typeof initialValues) => {
    if (values.teamName !== '') {
      if (isEdit) {
        //EDIT
        updateTeamSetup(values.teamName);
      } else {
        //ADD
        const newTeamData: TeamData = {
          id: String(updatedData.length + 1), // Generate a unique ID
          teamName: `${values.teamName}`,
          memberCount: updatedData.length + 3,
        };
        setUpdatedData([...updatedData, newTeamData]); // Add the new Task Type to the data
        flashMessage.success({ message: 'New Team Added' });
      }
    }
    toggleCreateTeamModalVisible();
  };
  const removeItem = () => {
    //REMOVE
    const newData = updatedData.filter(item => item.id !== selectedTeam?.id);
    setUpdatedData(newData);
    closeDropdown();
    flashMessage.success({ message: 'Team Removed' });
  };
  const updateTeamSetup = (newName: string) => {
    //UPDATE
    if (selectedTeam) {
      // Find the selected taskType by ID
      const newData = updatedData.map(item => {
        if (item.id === selectedTeam.id) {
          // Update the name of the selected workspace
          return { ...item, teamName: newName };
        }
        return item;
      });

      setUpdatedData(newData);
      closeDropdown(); // Close the modal after updating the name
      flashMessage.success({ message: 'Team Updated' });
    }
  };
  const toggleItemSelection = (user: UserData) => {
    // Check if the item is already selected
    if (selectedItems.includes(user)) {
      setSelectedItems(selectedItems.filter(item => item.id !== user.id));
    } else {
      setSelectedItems([...selectedItems, user]);
    }
  };
  const Color = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    cardBorderColor: isDarkTheme ? colors.dark.grey4 : colors.light.denim,
    borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    card: {
      borderWidth: 1,
      borderRadius: 12,
      borderColor: Color.cardBorderColor,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: Color.bgColor,
      marginVertical: 8,
      marginHorizontal: 20,
    },
    modal: {
      position: 'absolute',
      padding: 10,
      top: 60,
      borderRadius: 5,
    },
    dropdown: {
      backgroundColor: Color.bgColor,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: Color.borderColor,
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
      width: responsiveWidth(35),
    },
    optionSeparator: {
      borderColor: Color.borderColor,
      borderBottomWidth: 1,
      marginHorizontal: 10,
      width: responsiveWidth(40),
    },
    dropdownButton: {
      width: responsiveWidth(15),
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    listEmptyText: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
  });
  const renderTeamSetupCard = ({ item }: { item: TeamData }) => {
    return (
      <TouchableOpacity activeOpacity={0} ref={ref => (cardRefs.current[item.id] = ref)}>
        <View style={[styles.card, { backgroundColor: Color.bgColor }]}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              // alert(`Details Screen of ${item?.teamName}`);
              navigation.navigate('TeamDetailsScreen', {
                item: { name: item.teamName.toString(), memberCount: item.memberCount.toString() },
              });
            }}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', width: responsiveWidth(70) }}>
              <View style={{ marginRight: 12 }}>
                <Userpic name={item.teamName} size={50} radius={12} colorize={true} />
              </View>
              <View style={{ alignItems: 'flex-start' }}>
                <Text style={[textStyles.semiBold14, { color: Color.primaryText }]}>
                  {item.teamName}
                </Text>
                <Text style={[textStyles.medium12, { color: Color.secondaryText }]}>
                  {`${item.memberCount}  ${i18n.t(`members`)}`}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => openDropdown(item, item.id)}
            style={styles.dropdownButton}>
            <DotsThree size={28} color={Color.primaryText} weight="bold" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  const renderUserCard = ({ item }: { item: UserData }) => {
    const isSelected = selectedItems.includes(item);
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={() => toggleItemSelection(item)}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            // borderColor: Color.bgColor,
            borderColor: isSelected ? colors.light.earthBlue : Color.bgColor,
            marginHorizontal: 20,
            marginVertical: 10,
            paddingVertical: 10,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 10 }}>
              {item.profilePicture ? (
                <Userpic source={{ uri: item.profilePicture }} size={28} colorize={true} />
              ) : (
                <Userpic name={item.name} size={28} colorize={true} />
              )}
            </View>
            <View>
              <Text style={[textStyles.semiBold16, { color: Color.primaryText }]}>{item.name}</Text>
            </View>
          </View>
          {isSelected && (
            <View style={{ marginRight: 5 }}>
              <CheckCircle />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper scrollable={false}>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Header title={i18n.t('Team Setup')} />
        </View>

        <FlatList
          data={updatedData}
          renderItem={renderTeamSetupCard}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ marginVertical: 40 }}></View>}
          ListEmptyComponent={
            <View style={styles.listEmptyText}>
              <Text style={[textStyles.bold20, { color: 'tomato' }]}>No Data Found</Text>
            </View>
          }
        />

        {selectedTeam && (
          <Modal
            backdropOpacity={0.1}
            isVisible={dropdownVisible}
            onBackdropPress={closeDropdown}
            animationIn="zoomIn"
            animationOut="zoomOut"
            animationInTiming={100}
            animationOutTiming={100}
            style={[styles.modal, dropdownPosition]}>
            <View style={[styles.dropdown, commonStyles.shadow2]}>
              {/* Edit */}
              <TouchableOpacity
                onPress={() => {
                  setIsEdit(true);
                  setDropdownVisible(false);
                  navigation.navigate('TeamDetailsScreen', {
                    item: {
                      name: selectedTeam.teamName.toString(),
                      memberCount: selectedTeam.memberCount.toString(),
                    },
                  });
                }}>
                <View style={styles.option}>
                  <PencilLine size={16} color={Color.primaryText} weight="duotone" />
                  <Text
                    style={(textStyles.semiBold12, { color: Color.primaryText, marginLeft: 10 })}>
                    {i18n.t(`Update`)}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.optionSeparator} />
              {/* Add Members */}
              <TouchableOpacity
                onPress={() => {
                  toggleAddMemberModalVisible();
                  setDropdownVisible(false);
                }}>
                <View style={styles.option}>
                  <Users size={16} color={colors.light.green} weight="duotone" />
                  <Text
                    style={(textStyles.semiBold12, { color: Color.primaryText, marginLeft: 10 })}>
                    {i18n.t(`Add Members`)}
                  </Text>
                </View>
              </TouchableOpacity>
              {/* Remove */}
              <View style={styles.optionSeparator} />
              <TouchableOpacity onPress={removeItem}>
                <View style={styles.option}>
                  <Trash size={16} color={colors.light.red} weight="duotone" />
                  <Text
                    style={
                      (textStyles.semiBold12,
                      { color: Color.primaryText, marginLeft: 10, width: responsiveWidth(30) })
                    }>
                    {i18n.t(`Remove`)}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
        {isCreateTeamModalVisible && (
          <BottomSheetWrapper
            isVisible={isCreateTeamModalVisible}
            setIsVisible={setIsCreateTeamModalVisible}
            onPressBackDropCloseModal={true}
            containerStyle={{ height: height / 1.4 }}>
            <>
              <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                <Header
                  title={i18n.t('Create Team')}
                  hideBackIcon
                  rightComponent={
                    <TouchableOpacity onPress={() => toggleCreateTeamModalVisible()}>
                      <X
                        weight="bold"
                        size={20}
                        color={isDarkTheme ? colors.dark.grey2 : colors.light.grey2}
                      />
                    </TouchableOpacity>
                  }
                />
              </View>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                  <>
                    <View
                      onResponderRelease={() => Keyboard.dismiss()}
                      // onStartShouldSetResponder={() => true}
                      // onMoveShouldSetResponder={() => false}
                      style={{ flex: 1 }}>
                      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                        <Field
                          component={FlatTextField}
                          icon={<TextT size={18} color={Color.secondaryText} />}
                          disable={false}
                          multiline={false}
                          name="teamName"
                          type="default"
                          placeholder="Team Name"
                          placeholderTextColor={Color.secondaryText}
                        />
                      </View>
                      <View>
                        <Text
                          style={[
                            textStyles.semiBold14,
                            { color: Color.primaryText, paddingHorizontal: 20, marginBottom: 20 },
                          ]}>
                          {i18n.t('Add Member')}
                        </Text>
                        <FlatList
                          data={userData}
                          keyExtractor={item => item.id}
                          renderItem={renderUserCard}
                          ListFooterComponent={<View style={{ marginVertical: 60 }}></View>}
                          ListEmptyComponent={
                            <View style={styles.listEmptyText}>
                              <Text style={[textStyles.bold20, { color: 'tomato' }]}>
                                No Data Found
                              </Text>
                            </View>
                          }
                        />
                      </View>
                    </View>

                    <View style={{ padding: 20 }}>
                      <AppButton title={'Create'} onPress={handleSubmit} />
                    </View>
                  </>
                )}
              </Formik>
            </>
          </BottomSheetWrapper>
        )}
        {isAddMemberModalVisible && (
          <BottomSheetWrapper
            isVisible={isAddMemberModalVisible}
            setIsVisible={setIsAddMemberModalVisible}
            onPressBackDropCloseModal={true}
            containerStyle={{ height: height / 1.4 }}>
            <>
              <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                <Header
                  title={i18n.t('Add Members')}
                  hideBackIcon
                  rightComponent={
                    <TouchableOpacity onPress={() => toggleAddMemberModalVisible()}>
                      <X
                        weight="bold"
                        size={20}
                        color={isDarkTheme ? colors.dark.grey2 : colors.light.grey2}
                      />
                    </TouchableOpacity>
                  }
                />
              </View>
              <View style={{ padding: 20 }}>
                <SearchField placeholder={i18n.t('Search by name')} onSearch={handleSearch} />
              </View>
              <View onResponderRelease={() => Keyboard.dismiss()} style={{ flex: 1 }}>
                {filteredUsers.length > 0 ? (
                  <FlatList
                    data={filteredUsers}
                    keyExtractor={item => item.id}
                    renderItem={renderUserCard}
                    // ListFooterComponent={<View style={{ marginVertical: 30 }}></View>}
                    ListEmptyComponent={
                      <View style={styles.listEmptyText}>
                        <Text style={[textStyles.bold20, { color: 'tomato' }]}>No Data Found</Text>
                      </View>
                    }
                  />
                ) : userData.length === 0 ? (
                  <View style={styles.listEmptyText}>
                    <Text style={[textStyles.bold20, { color: 'tomato' }]}>No Data Found</Text>
                  </View>
                ) : (
                  <View
                    style={{
                      padding: 20,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}>
                    <View style={{ marginRight: 10 }}>
                      <SadEmoji size={20} color={colors.light.red} />
                    </View>
                    <Text style={[textStyles.regular16, { color: 'tomato' }]}>
                      {`No user found with`}{' '}
                      <Text
                        style={[
                          textStyles.medium16,
                          { color: Color.primaryText },
                        ]}>{`" ${searchKeyword} "`}</Text>
                    </Text>
                  </View>
                )}
              </View>
              <View style={{ padding: 20 }}>
                <AppButton
                  title={'Add Member'}
                  onPress={() => alert(`${selectedItems.length} person added`)}
                />
              </View>
            </>
          </BottomSheetWrapper>
        )}
        <View style={{ padding: 20 }}>
          <AppButton
            title={'Add Team'}
            onPress={() => {
              setIsEdit(false);
              toggleCreateTeamModalVisible();
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

//TODO:
// data = previous data
// updatedData = preprocessed data, store it in DB

const data: TeamData[] = [
  {
    id: '1',
    teamName: 'My Team',
    memberCount: 3,
  },
  {
    id: '2',
    teamName: 'Development Team',
    memberCount: 2,
  },
  {
    id: '3',
    teamName: 'Business Team',
    memberCount: 4,
  },
  {
    id: '4',
    teamName: 'marketing Team',
    memberCount: 14,
  },
  {
    id: '5',
    teamName: 'Sales Team',
    memberCount: 9,
  },
  {
    id: '6',
    teamName: 'Support Team',
    memberCount: 3,
  },
  {
    id: '7',
    teamName: 'My Team',
    memberCount: 3,
  },
  {
    id: '8',
    teamName: 'Development Team',
    memberCount: 2,
  },
  {
    id: '9',
    teamName: 'Business Team',
    memberCount: 4,
  },
  {
    id: '10',
    teamName: 'marketing Team',
    memberCount: 14,
  },
  {
    id: '11',
    teamName: 'Sales Team',
    memberCount: 9,
  },
  {
    id: '12',
    teamName: 'Support Team',
    memberCount: 3,
  },
];

const userData: UserData[] = [
  {
    id: '1',
    name: 'Alan Baker',
    profilePicture: `https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg`,
  },
  {
    id: '2',
    name: 'Harley David',
    profilePicture: `https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1671.jpg`,
  },
  {
    id: '3',
    name: 'Adam Smith',
    profilePicture: `https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1741.jpg`,
  },
  {
    id: '4',
    name: 'St Wiz',
    profilePicture: `https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1701.jpg`,
  },
  { id: '5', name: 'User Five' },
  { id: '6', name: 'User Six' },
  { id: '7', name: 'User Seven' },
  { id: '8', name: 'User Eight' },
  { id: '9', name: 'w' },
  { id: '10', name: 'w' },
  { id: '11', name: 'w' },
  { id: '12', name: 'w' },
  { id: '13', name: 'w' },
  { id: '14', name: 'w' },
  { id: '15', name: 'w' },
  { id: '16', name: 'w' },
  { id: '17', name: 'w' },
  { id: '18', name: 'w' },
  { id: '19', name: 'w' },
  { id: '20', name: 'w' },
  {
    id: '21',
    name: 'Abraham Lincoln',
    profilePicture: `https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1791.jpg`,
  },
];
