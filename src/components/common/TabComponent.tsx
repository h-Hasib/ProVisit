import { colors, textStyles } from '@theme';
import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { useAppSelector } from 'src/store/hooks';

interface Tab {
  name: string;
  content: React.ReactNode;
}

interface TabComponentProps {
  tabs: Tab[];
}

function TabComponent({ tabs }: TabComponentProps) {
  const [value, setValue] = useState(0);
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View>
      <View style={styles.container}>
        {tabs.map((tab, index) => {
          const isActive = index === value;

          return (
            <View key={tab.name} style={{ flex: 1 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setValue(index);
                }}>
                <View style={[styles.item, isActive && customViewStyles.activeItem(isDarkTheme)]}>
                  <Text style={customStyles.text(isDarkTheme, isActive)}>{tab.name}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          );
        })}
      </View>
      {tabs[value].content}
    </View>
  );
}

export default React.memo(TabComponent);

const customViewStyles = {
  activeItem: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderWidth: 1,
    borderColor: isDarkTheme ? colors.dark.white : colors.light.earthBlue,
    borderRadius: 13,
    shadowColor: '#662bf2',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
  }),
};
const customStyles = {
  text: (isDarkTheme: boolean, isActive: boolean) => ({
    color: isActive
      ? isDarkTheme
        ? colors.dark.white
        : colors.light.earthBlue
      : isDarkTheme
      ? colors.dark.grey0_5
      : colors.light.grey1,
    ...textStyles.semiBold14,
  }),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.light.grey3,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 6,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
});
