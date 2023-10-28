import { colors, textStyles } from '@theme';
import { Field, Formik } from 'formik';
import { DotsThree, PencilLine, TextT, Trash, X } from 'phosphor-react-native';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Userpic } from 'react-native-userpic';
import AppButton from 'src/components/buttons/AppButton';
import BottomSheetWrapper from 'src/components/common/BottomSheetWrapper';
import Header from 'src/components/common/Header';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import FlatTextField from 'src/components/inputs/FlatTextField';
import i18n from 'src/languages/i18n';
import { flashMessage } from 'src/services/flash-message.service';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import * as Yup from 'yup';

const { height } = Dimensions.get('window');

interface TaskCategory {
  id: string;
  name: string;
  default?: boolean;
  createdAt?: number;
}

export default function TaskCategoryScreen() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [selectedTaskCategory, setSelectedTaskCategory] = useState<TaskCategory | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; right: number }>({
    top: 0,
    right: 0,
  });
  const [updatedData, setUpdatedData] = useState<TaskCategory[]>(data);
  const [isTaskCategoryModalVisible, setIsTaskCategoryModalVisible] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const cardRefs = useRef<{ [key: string]: TouchableOpacity | null }>({});

  const openDropdown = (taskType: TaskCategory, cardId: string) => {
    setSelectedTaskCategory(taskType);
    // Measure the card's position relative to the screen
    if (cardRefs.current[cardId]) {
      cardRefs.current[cardId]?.measureInWindow((x, y) => {
        if (parseInt(cardId, 10) > data.length / 2) {
          setDropdownPosition({ top: y - 60, right: x + 40 });
        } else {
          setDropdownPosition({ top: y + 28, right: x + 10 });
        }
        setDropdownVisible(true);
      });
    }
  };

  const closeDropdown = () => {
    setSelectedTaskCategory(null);
    setDropdownVisible(false);
  };
  const toggleTaskCategoryModalVisible = () => {
    setIsTaskCategoryModalVisible(!isTaskCategoryModalVisible);
  };
  const initialValues = {
    taskCategory: isEdit ? (selectedTaskCategory?.name ? selectedTaskCategory.name : '') : '',
  };
  const validationSchema = Yup.object().shape({
    taskCategory: Yup.string().required(i18n.t(`Task Category Name is required`)),
  });
  const handleSubmit = (values: typeof initialValues) => {
    if (values.taskCategory !== '') {
      if (isEdit) {
        //EDIT
        updateTaskTypeName(values.taskCategory);
      } else {
        //ADD
        const newTaskType: TaskCategory = {
          id: String(updatedData.length + 1), // Generate a unique ID
          name: `${values.taskCategory}`,
          createdAt: updatedData.length + 3,
        };
        setUpdatedData([...updatedData, newTaskType]); // Add the new Task Type to the data
        flashMessage.success({ message: 'Category Added' });
      }
    }
    toggleTaskCategoryModalVisible();
  };
  const removeItem = () => {
    //REMOVE
    const newData = updatedData.filter(item => item.id !== selectedTaskCategory?.id);
    setUpdatedData(newData);
    flashMessage.success({ message: 'Category Removed' });
    closeDropdown();
  };
  const updateTaskTypeName = (newName: string) => {
    //UPDATE
    if (selectedTaskCategory) {
      // Find the selected taskType by ID
      const newData = updatedData.map(item => {
        if (item.id === selectedTaskCategory.id) {
          // Update the name of the selected workspace
          return { ...item, name: newName };
        }
        return item;
      });

      setUpdatedData(newData);
      closeDropdown(); // Close the modal after updating the name
      flashMessage.success({ message: 'Category Updated' });
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
      paddingVertical: 16,
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
  const renderTaskCategoryCard = ({ item }: { item: TaskCategory }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => openDropdown(item, item.id)}
        ref={ref => (cardRefs.current[item.id] = ref)}>
        <View style={[styles.card, { backgroundColor: Color.bgColor }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: responsiveWidth(70) }}>
            <View style={{ marginRight: 12 }}>
              <Userpic name={item.name} size={50} radius={12} colorize={true} color={'red'} />
            </View>
            <View style={{ alignItems: 'flex-start' }}>
              <Text style={[textStyles.semiBold14, { color: Color.primaryText }]}>{item.name}</Text>
              <Text style={[textStyles.medium12, { color: Color.secondaryText }]}>
                {item.default
                  ? `${i18n.t('Default')}`
                  : `${i18n.t('Created')} ${item.createdAt}  ${i18n.t('days ago')}`}
              </Text>
            </View>
          </View>

          <View style={styles.dropdownButton}>
            <DotsThree size={28} color={Color.primaryText} weight="bold" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper scrollable={false}>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Header title={i18n.t('Task Category')} />
        </View>

        <FlatList
          data={updatedData}
          renderItem={renderTaskCategoryCard}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ marginVertical: 40 }}></View>}
          ListEmptyComponent={
            <View style={styles.listEmptyText}>
              <Text style={[textStyles.bold20, { color: 'tomato' }]}>No Data Found</Text>
            </View>
          }
        />

        {selectedTaskCategory && (
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
              <TouchableOpacity
                onPress={() => {
                  setIsEdit(true);
                  toggleTaskCategoryModalVisible();
                  setDropdownVisible(false);
                }}>
                <View style={styles.option}>
                  <PencilLine size={16} color={Color.primaryText} weight="duotone" />
                  <Text
                    style={(textStyles.semiBold12, { color: Color.primaryText, marginLeft: 10 })}>
                    {i18n.t(`Edit`)}
                  </Text>
                </View>
              </TouchableOpacity>
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
        {isTaskCategoryModalVisible && (
          <BottomSheetWrapper
            isVisible={isTaskCategoryModalVisible}
            setIsVisible={setIsTaskCategoryModalVisible}
            onPressBackDropCloseModal={true}
            containerStyle={{ height: height / 1.7 }}>
            <>
              <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                <Header
                  title={isEdit ? i18n.t('Edit Task Category') : i18n.t('Add New Task Category')}
                  hideBackIcon
                  rightComponent={
                    <TouchableOpacity onPress={() => toggleTaskCategoryModalVisible()}>
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
                    <ScrollView style={{ flexGrow: 1 }}>
                      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                        <Field
                          component={FlatTextField}
                          icon={<TextT size={18} color={Color.secondaryText} />}
                          disable={false}
                          multiline={false}
                          name="taskCategory"
                          type="default"
                          placeholder="Task Category Name"
                          placeholderTextColor={Color.secondaryText}
                        />
                      </View>
                    </ScrollView>
                    <View style={{ padding: 20 }}>
                      <AppButton title={isEdit ? 'Update' : 'Add'} onPress={handleSubmit} />
                    </View>
                  </>
                )}
              </Formik>
            </>
          </BottomSheetWrapper>
        )}
        <View style={{ padding: 20 }}>
          <AppButton
            title={'Add New Task Category'}
            onPress={() => {
              setIsEdit(false);
              toggleTaskCategoryModalVisible();
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

const data: TaskCategory[] = [
  {
    id: '1',
    name: 'SEO',
    default: true,
  },
  {
    id: '2',
    name: 'Business Strategist',
    default: true,
  },
  {
    id: '3',
    name: 'Q/A Management',
    default: true,
  },
  {
    id: '4',
    name: 'HR & Accounts',
    default: true,
  },
  {
    id: '5',
    name: 'Development',
    createdAt: 5,
  },
  // {
  //   id: '6',
  //   name: 'Welfare Zone',
  //   createdAt: 17,
  // },
  // {
  //   id: '7',
  //   name: 'React Native Developer',
  //   createdAt: 2,
  // },
  // {
  //   id: '8',
  //   name: 'PC Campaign',
  //   createdAt: 5,
  // },
  // {
  //   id: '9',
  //   name: 'Marketing ',
  //   createdAt: 1,
  // },
  // {
  //   id: '10',
  //   name: 'Marketing ',
  //   createdAt: 9,
  // },
  // {
  //   id: '11',
  //   name: 'Marketing ',
  //   createdAt: 7,
  // },
];
