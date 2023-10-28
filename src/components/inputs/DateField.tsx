import { colors, textStyles } from '@theme';
import { FieldProps } from 'formik';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

interface CustomTextInputProps extends FieldProps {
  label?: string;
  icon?: React.ReactNode;
  type?: 'default' | 'dropdown' | 'numeric';
  placeholder?: string;
  disable?: boolean;
  multiline?: boolean;
}

const DateField: React.FC<CustomTextInputProps> = ({
  label,
  icon,
  type,
  field,
  form,
  placeholder,
  disable = false,
  multiline = false,
}) => {
  const { name, value, onBlur, onChange } = field;
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { touched: touchedFields, errors } = form;
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    if (touchedFields[name]) {
      setTouched(true);
      setError(errors[name] as string | undefined);
    }
  }, [touchedFields, errors, name]);

  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
  };

  const styles = StyleSheet.create({
    inputControl: {
      borderWidth: 0,
      paddingVertical: 10,
      color: textColor.primaryText,
      backgroundColor: textColor.bgColor,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      color: textColor.primaryText,
    },
  });

  return (
    <View style={{ marginTop: 5 }}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.inputControl,
          {
            borderColor:
              touched && error
                ? 'tomato'
                : isFocused
                ? textColor.primaryText
                : textColor.borderColor,
          },
        ]}>
        <View style={{ marginRight: 10 }}>{icon ? icon : <View />}</View>

        <TextInput
          style={[styles.input, isFocused ? textStyles.medium13 : textStyles.regular13]}
          placeholder={placeholder}
          placeholderTextColor={textColor.secondaryText}
          value={value}
          onChangeText={text => onChange(name)(text)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            onBlur(name);
            setTouched(true);
            setIsFocused(false);
          }}
          keyboardType={type === 'numeric' ? 'number-pad' : 'default'}
          multiline={multiline}
          editable={!disable}
        />
      </View>
      {touched && error && <Text style={{ color: 'tomato', marginTop: 5 }}>{error}</Text>}
    </View>
  );
};

export default DateField;
