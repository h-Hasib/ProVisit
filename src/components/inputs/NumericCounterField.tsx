import { colors, textStyles } from '@theme';
import { FieldProps } from 'formik';
import { MinusCircle, PlusCircle } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

interface NumericCounterFieldProps extends FieldProps {
  placeholder: string;
  maxLimit: number;
  icon?: React.ReactNode;
  disable?: boolean;
  multiline?: boolean;
}

const NumericCounterField: React.FC<NumericCounterFieldProps> = ({
  placeholder,
  maxLimit,
  field,
  form,
  icon,
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
      borderBottomWidth: 1,
      paddingVertical: 10,
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
  });
  const handleIncrement = () => {
    if (parseInt(value, 10) < maxLimit && parseInt(value, 10) > 0) {
      form.setFieldValue(name, (parseInt(value, 10) + 1).toString());
    }
  };
  const handleDecrement = () => {
    if (parseInt(value, 10) > 1 && parseInt(value, 10) <= maxLimit) {
      form.setFieldValue(name, (parseInt(value, 10) - 1).toString());
    }
  };

  return (
    <View style={{ marginTop: 5 }}>
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
          style={[styles.input, isFocused ? textStyles.bold14 : textStyles.medium13]}
          placeholder={placeholder}
          placeholderTextColor={textColor.secondaryText}
          value={value.toString()}
          onChangeText={text => onChange(name)(text)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            onBlur(name);
            setTouched(true);
            setIsFocused(false);
          }}
          keyboardType="numeric"
          multiline={multiline}
          editable={!disable}
        />
        <View
          style={{
            marginLeft: 5,
            paddingRight: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              if (field.value === '') {
                form.setFieldValue(name, 1);
              }
              handleDecrement();
            }}>
            <MinusCircle size={24} weight="bold" color={textColor.secondaryText} />
          </TouchableOpacity>
          <View style={{ marginRight: 15 }} />
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              if (field.value === '') {
                form.setFieldValue(name, 1);
              }
              handleIncrement();
            }}>
            <PlusCircle size={24} weight="bold" color={textColor.secondaryText} />
          </TouchableOpacity>
        </View>
      </View>
      {touched && error && <Text style={{ color: 'tomato', marginTop: 5 }}>{error}</Text>}
    </View>
  );
};
export default NumericCounterField;
