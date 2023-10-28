import { colors, textStyles } from '@theme';
import { MagnifyingGlass } from 'phosphor-react-native';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useAppSelector } from 'src/store/hooks';
interface SearchFieldProps {
  onSearch: (text: string) => void;
  placeholder?: string;
  disable?: boolean;
  multiline?: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({
  placeholder = 'Search Here',
  onSearch,
  disable = false,
  multiline = false,
}) => {
  const [searchText, setSearchText] = useState('');
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };
  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
  };
  const styles = StyleSheet.create({
    inputControl: {
      borderWidth: 1,
      borderRadius: 12,
      borderColor: textColor.borderColor,
      backgroundColor: textColor.bgColor,
      height: responsiveHeight(6),
      padding: 0,
      color: textColor.primaryText,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      padding: 0,
      color: textColor.primaryText,
    },
  });
  return (
    <View
      style={[
        styles.inputControl,
        {
          borderColor: isFocused ? textColor.secondaryText : textColor.borderColor,
        },
      ]}>
      <View style={{ marginLeft: 15, marginRight: 10 }}>
        <MagnifyingGlass size={18} color={textColor.secondaryText} />
      </View>
      <TextInput
        style={[styles.input, isFocused ? textStyles.medium13 : textStyles.regular13]}
        placeholder={placeholder}
        placeholderTextColor={textColor.secondaryText}
        onChangeText={handleSearch}
        onBlur={() => {
          setIsFocused(false);
        }}
        onFocus={() => setIsFocused(true)}
        value={searchText}
        editable={!disable}
        multiline={multiline}
      />
    </View>
  );
};

export default SearchField;
