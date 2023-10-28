import { colors, textStyles } from '@theme';
import { X } from 'phosphor-react-native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import Header from '../common/Header';
import SheetWrapper from '../common/SheetWrapper';

interface SetWorkspaceModalProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  handleTaskViewSelect: (item: string) => void;
}

const TASK_VIEW_LIST: string[] = [
  'Last 7 Days',
  'Last 14 Days',
  'Last 30 Days',
  'Last 6 Months',
  'Last 1 Year',
];

const DayViewModal: React.FC<SetWorkspaceModalProps> = ({
  setIsVisible,
  isVisible,
  handleTaskViewSelect,
}) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <SheetWrapper setIsVisible={setIsVisible} isVisible={isVisible}>
      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <Header
          title={i18n.t('Choose View')}
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
      <View>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 20 }}
          ItemSeparatorComponent={() => <View style={styles.itemSep} />}
          data={TASK_VIEW_LIST}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                handleTaskViewSelect(item);
                setSelectedItem(item);
              }}
              style={styles.itemBtn}>
              <Text
                style={[
                  textStyles.semiBold16,
                  {
                    color:
                      selectedItem === item
                        ? isDarkTheme
                          ? colors.dark.grey4
                          : colors.light.dark
                        : isDarkTheme
                        ? colors.dark.white
                        : colors.light.grey2,
                  },
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.toString()}
        />
      </View>
    </SheetWrapper>
  );
};

export default DayViewModal;

const styles = StyleSheet.create({
  itemBtn: {
    paddingVertical: 10,
  },
  itemSep: {
    height: 1,
    backgroundColor: colors.light.grey4,
    marginVertical: 10,
  },
});
