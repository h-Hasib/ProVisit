import { colors, textStyles } from '@theme';
import { DotsThree, PencilLine, Trash, Users } from 'phosphor-react-native';
import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Userpic } from 'react-native-userpic';
import AppButton from 'src/components/buttons/AppButton';
import Header from 'src/components/common/Header';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';

interface Workspace {
  id: string;
  name: string;
  memberCount: number;
}

export default function WorkspaceScreen() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState<Workspace | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; right: number }>({
    top: 0,
    right: 0,
  });
  const cardRefs = useRef<{ [key: string]: TouchableOpacity | null }>({});

  const openDropdown = (workspace: Workspace, cardId: string) => {
    setSelectedWorkspace(workspace);

    // Measure the card's position relative to the screen
    if (cardRefs.current[cardId]) {
      cardRefs.current[cardId]?.measureInWindow((x, y) => {
        if (parseInt(cardId, 10) > data.length / 2) {
          setDropdownPosition({ top: y - 110, right: x + 30 });
        } else {
          setDropdownPosition({ top: y + 28, right: x + 10 });
        }
        setDropdownVisible(true);
      });
    }
  };

  const closeDropdown = () => {
    setSelectedWorkspace(null);
    setDropdownVisible(false);
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
      marginVertical: 10,
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
      paddingVertical: 16,
      paddingHorizontal: 20,
      width: responsiveWidth(50),
    },
    optionSeparator: {
      borderColor: Color.borderColor,
      borderBottomWidth: 1,
      marginHorizontal: 10,
      width: responsiveWidth(44),
    },
    dropdownButton: {
      width: responsiveWidth(15),
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  });
  const renderWorkspaceCard = ({ item }: { item: Workspace }) => {
    return (
      <TouchableOpacity activeOpacity={0} ref={ref => (cardRefs.current[item.id] = ref)}>
        <View style={[styles.card, { backgroundColor: Color.bgColor }]}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              alert(`Details Screen of ${item?.name}`);
            }}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', width: responsiveWidth(70) }}>
              <View style={{ marginRight: 12 }}>
                <Userpic name={item.name} size={50} radius={12} colorize={true} color={'red'} />
              </View>
              <View style={{ alignItems: 'flex-start' }}>
                <Text style={[textStyles.semiBold14, { color: Color.primaryText }]}>
                  {item.name}
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

  return (
    <ScreenWrapper scrollable={false}>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Header title={'Workspace'} />
        </View>

        <FlatList
          data={data}
          renderItem={renderWorkspaceCard}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ marginVertical: 40 }}></View>}
        />

        {selectedWorkspace && (
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
              <TouchableOpacity onPress={() => alert(`Edit Workspace: ${selectedWorkspace.name}`)}>
                <View style={styles.option}>
                  <PencilLine size={16} color={Color.primaryText} weight="duotone" />
                  <Text
                    style={(textStyles.semiBold12, { color: Color.primaryText, marginLeft: 10 })}>
                    {i18n.t(`Edit`)}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.optionSeparator} />
              <TouchableOpacity onPress={() => alert('Invite Members?')}>
                <View style={styles.option}>
                  <Users size={16} color={colors.light.green} weight="duotone" />
                  <Text
                    style={(textStyles.semiBold12, { color: Color.primaryText, marginLeft: 10 })}>
                    {i18n.t(`Invite Members`)}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.optionSeparator} />
              <TouchableOpacity onPress={() => alert('Remove this Workspace?')}>
                <View style={styles.option}>
                  <Trash size={16} color={colors.light.red} weight="duotone" />
                  <Text
                    style={(textStyles.semiBold12, { color: Color.primaryText, marginLeft: 10 })}>
                    {i18n.t(`Remove`)}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
        <View style={{ padding: 20 }}>
          <AppButton title={'Add New Workspace'} onPress={() => alert('goto Add New Workspace')} />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const data: Workspace[] = [
  {
    id: '1',
    name: 'Sales Force',
    memberCount: 2,
  },
  {
    id: '2',
    name: 'Retail Campaign',
    memberCount: 5,
  },
  {
    id: '3',
    name: 'Players Unknown',
    memberCount: 17,
  },
  {
    id: '4',
    name: 'Dream Force',
    memberCount: 2,
  },
  {
    id: '5',
    name: 'Retail Warehouse',
    memberCount: 5,
  },
  {
    id: '6',
    name: 'Welfare Zone',
    memberCount: 17,
  },
  {
    id: '7',
    name: 'React Native Developer',
    memberCount: 2,
  },
  {
    id: '8',
    name: 'PC Campaign',
    memberCount: 5,
  },
  {
    id: '9',
    name: 'Marketing ',
    memberCount: 17,
  },
  {
    id: '10',
    name: 'Marketing ',
    memberCount: 17,
  },
  {
    id: '11',
    name: 'Marketing ',
    memberCount: 17,
  },
];
