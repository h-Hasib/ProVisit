import { colors, textStyles } from '@theme';
import { FieldProps, FormikProps } from 'formik';
import { CaretDown, CheckCircle, X } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import SadEmoji from 'src/assets/svg/emoji/SadEmoji';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import BottomSheetWrapper from '../common/BottomSheetWrapper';
import SearchField from './SearchField';

interface countryCodeProps {
  country: string;
  code: string;
  flag: React.ReactNode;
}
interface PhoneNumberInputProps extends FieldProps {
  placeholder?: string;
  disable?: boolean;
  multiline?: boolean;
  countryCodes: countryCodeProps[];
  selectedCountryFlag: React.ReactNode;
  selectedCountry: string;
  onCountryCodeSelect: (country: countryCodeProps, form: FormikProps<unknown>) => void;
  type?: 'flat' | 'contained';
}

const PhoneNumberField: React.FC<PhoneNumberInputProps> = ({
  placeholder = 'Phone Number',
  field,
  form,
  disable = false,
  multiline = false,
  type = 'flat',
  countryCodes,
  selectedCountryFlag = countryCodes[0].flag,
  selectedCountry,
  onCountryCodeSelect,
}) => {
  const { name, value, onBlur, onChange } = field;
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { touched: touchedFields, errors } = form;
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isFocused, setIsFocused] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(countryCodes);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    if (touchedFields[name]) {
      setTouched(true);
      setError(errors[name] as string | undefined);
    }
  }, [touchedFields, errors, name]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleCountryCodeSelection = (country: countryCodeProps) => {
    onCountryCodeSelect(country, form);
    setFilteredCountries(countryCodes);
    toggleModal();
  };

  const handleSearch = (searchText: string) => {
    // Implement the logic to filter countries based on searchText
    const filtered = countryCodes.filter(country =>
      (country.country + country.code).toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredCountries(filtered);
    setSearchKeyword(searchText);
  };

  const dropdownBackPress = () => {
    toggleModal();
    setSearchKeyword('');
    setFilteredCountries(countryCodes);
  };

  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
    modalBackground: isDarkTheme ? colors.dark.grey5 : colors.light.background,
  };

  const styles = StyleSheet.create({
    inputControl: {
      borderWidth: 0,
      borderBottomWidth: 1,
      paddingVertical: 10,
      textAlignVertical: 'center',
      color: textColor.primaryText,
      backgroundColor: textColor.bgColor,
      flexDirection: 'row',
      alignItems: 'center',
    },
    containedInputControl: {
      borderWidth: 1,
      borderRadius: 16,
      paddingVertical: 10,
      paddingHorizontal: 16,
      textAlignVertical: 'center',
      color: textColor.primaryText,
      backgroundColor: textColor.bgColor,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      color: textColor.primaryText,
    },
    countryCodeDropdown: {
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      marginHorizontal: 20,
      height: responsiveHeight(44),
      bottom: 15,
      backgroundColor: textColor.modalBackground,
    },
    dropdownHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginTop: 20,
    },
    closeButton: {
      alignItems: 'center',
      borderRadius: 12,
      padding: 9,
      marginRight: 5,
      backgroundColor: colors.light.red,
    },
  });

  return (
    <View style={{ marginVertical: 5 }}>
      <View
        style={[
          type === 'contained' ? styles.containedInputControl : styles.inputControl,
          {
            borderColor:
              touched && error
                ? 'tomato'
                : type === 'contained'
                ? textColor.borderColor
                : isFocused
                ? textColor.primaryText
                : textColor.borderColor,
          },
        ]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity activeOpacity={0.6} onPress={toggleModal}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <View style={{ marginRight: 10 }}>{selectedCountryFlag}</View>
              <CaretDown size={18} color={textColor.secondaryText} />
            </View>
          </TouchableOpacity>

          <TextInput
            style={[styles.input, isFocused ? textStyles.medium13 : textStyles.regular13]}
            placeholder={placeholder}
            placeholderTextColor={textColor.secondaryText}
            value={value}
            onChangeText={text => onChange(name)(text)}
            onBlur={() => {
              onBlur(name);
              setTouched(true);
              setIsFocused(false);
            }}
            onFocus={() => setIsFocused(true)}
            keyboardType="numeric"
            multiline={multiline}
            editable={!disable}
          />
        </View>
      </View>
      {touched && error && <Text style={{ color: 'tomato', marginTop: 5 }}>{error}</Text>}

      {/* Country Code Selector */}
      <BottomSheetWrapper
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        hasBackDrop={false}
        onBackButtonPress={dropdownBackPress}
        containerStyle={[styles.countryCodeDropdown, commonStyles.shadow2]}>
        <View style={{ flex: 1 }}>
          <View style={styles.dropdownHeader}>
            <View style={{ width: responsiveWidth(70) }}>
              <SearchField placeholder={i18n.t('Search Country Here')} onSearch={handleSearch} />
            </View>
            <TouchableOpacity onPress={dropdownBackPress}>
              <View style={styles.closeButton}>
                <X size={22} color={colors.light.white} weight="bold" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            {filteredCountries.length > 0 ? (
              <FlatList
                data={filteredCountries}
                style={{
                  flexGrow: 1,
                  height: responsiveHeight(34),
                  bottom: 0,
                  padding: 20,
                  marginTop: 5,
                }}
                scrollEnabled={true}
                bouncesZoom={false}
                keyExtractor={item => item.country}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      handleCountryCodeSelection(item);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 28 }}>
                        <View style={{ marginRight: 10 }}>{item.flag}</View>
                        <Text style={[textStyles.semiBold16, { color: textColor.primaryText }]}>
                          {`${item.country} `}{' '}
                          <Text
                            style={[
                              textStyles.medium16,
                              { color: textColor.secondaryText },
                            ]}>{`(${item.code})`}</Text>
                        </Text>
                      </View>
                      <View>
                        {item.country === selectedCountry ? (
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckCircle size={12} color={colors.light.green} weight={'bold'} />
                            <Text
                              style={[
                                textStyles.medium13,
                                { marginLeft: 5, color: colors.light.green },
                              ]}>{`Selected`}</Text>
                          </View>
                        ) : null}
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
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
                  {`No countries found with`}{' '}
                  <Text
                    style={[
                      textStyles.medium16,
                      { color: textColor.primaryText },
                    ]}>{`" ${searchKeyword} "`}</Text>
                </Text>
              </View>
            )}
          </View>
        </View>
      </BottomSheetWrapper>
    </View>
  );
};

export default PhoneNumberField;
