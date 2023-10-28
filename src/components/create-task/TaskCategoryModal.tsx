import { colors, textStyles } from '@theme';
import { PlusCircle } from 'phosphor-react-native';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import BottomSheetWrapper from 'src/components/common/BottomSheetWrapper';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import Header from '../common/Header';
import SearchField from '../inputs/SearchField';

const isShow = true;

interface TaskCategoryModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalSelectedItem: string;
  setModalSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  data: string[];
  setValues: (text: string) => void;
}
const TaskCategoryModal: React.FC<TaskCategoryModalProps> = ({
  isVisible,
  setIsVisible,
  modalSelectedItem,
  setModalSelectedItem,
  data,
  setValues,
}) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  // const [filteredCategories, setFilteredCategories] = useState(data);

  const [searchWord, setSearchWord] = useState('');
  const handleSearch = (text: string) => {
    setSearchWord(text);
  };

  const handleSelectedItem = (item: string) => {
    alert(`Item in Modal: ${modalSelectedItem} \nitem: ${item}`);
    setModalSelectedItem(item);
    // alert(`Item in Modal: ${modalSelectedItem} `);
    setValues(item);
    setIsVisible(false);
  };
  const toggleModalVisibility = () => {
    setIsVisible(!isVisible);
  };
  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
    addCategory: isDarkTheme ? colors.dark.grey2 : colors.light.grey0_5,
  };
  return (
    <BottomSheetWrapper
      setIsVisible={setIsVisible}
      isVisible={isVisible}
      containerStyle={{
        marginTop: 10,
        height: responsiveHeight(68),
      }}
      onPressBackDropCloseModal={false}>
      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <Header title={i18n.t('Task Category')} onPressBack={toggleModalVisibility} />
      </View>

      <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
        <SearchField onSearch={handleSearch} placeholder={i18n.t('Search by task category')} />
      </View>

      {isShow && (
        <TouchableOpacity activeOpacity={0.6}>
          <View
            style={{
              marginBottom: 18,
              paddingHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{ marginRight: 10 }}>
              <PlusCircle size={24} color={colors.light.earthBlue} weight="fill" />
            </View>
            <Text style={[textStyles.regular16, { color: textColor.addCategory }]}>
              {i18n.t(`Create category`)}
              <Text
                style={[
                  textStyles.medium16,
                  { color: textColor.primaryText },
                ]}>{` " ${searchWord} "`}</Text>
            </Text>
          </View>
        </TouchableOpacity>
      )}
      <FlatList
        data={data}
        style={{
          flexGrow: 1,
          bottom: 10,
          marginBottom: 5,
          paddingLeft: 20,
          padding: 0,
          marginTop: 15,
        }}
        scrollEnabled={true}
        bouncesZoom={false}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              // alert(`OnPress in modal: ${modalSelectedItem}`);
              handleSelectedItem(item);
            }}>
            <View>
              <Text
                style={[textStyles.semiBold16, { color: textColor.primaryText, marginBottom: 32 }]}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </BottomSheetWrapper>
  );
};
export default TaskCategoryModal;
