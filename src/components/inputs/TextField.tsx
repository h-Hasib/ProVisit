import { colors, textStyles } from '@theme';
import { FieldProps } from 'formik';
import { EnvelopeSimple, Eye, EyeSlash, LockSimple } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

interface CustomTextInputProps extends FieldProps {
  label?: string;
  icon?: React.ReactNode;
  type?: 'default' | 'email' | 'password';
  placeholder?: string;
  disable?: boolean;
  multiline?: boolean;
}

const TextField: React.FC<CustomTextInputProps> = ({
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
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { isDarkTheme } = useAppSelector(state => state.app);

  useEffect(() => {
    if (touchedFields[name]) {
      setTouched(true);
      setError(errors[name] as string | undefined);
    }
  }, [touchedFields, errors, name]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevVisible => !prevVisible);
  };

  const inputType = type === 'password' && !isPasswordVisible ? 'password' : 'default';

  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    placeholder: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    blue: isDarkTheme ? colors.dark.blue : colors.light.blue,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
  };

  const styles = StyleSheet.create({
    inputControl: {
      borderWidth: 1,
      borderRadius: 16,
      paddingVertical: 10,
      paddingHorizontal: 16,
      textAlignVertical: 'center',
      color: textColor.primaryText,
      backgroundColor: disable ? (isDarkTheme ? colors.dark.grey4 : '#F2F4F9') : textColor.bgColor,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: textColor.primaryText,
    },
    togglePasswordIcon: {
      color: 'blue',
      marginTop: 5,
      textAlign: 'right',
    },
  });

  return (
    <View style={{ marginVertical: 5 }}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.inputControl,
          { borderColor: touched && error ? 'tomato' : textColor.borderColor },
        ]}>
        <View style={{ marginRight: 10 }}>
          {icon ? (
            icon
          ) : type === 'password' ? (
            <LockSimple size={18} color={disable ? textColor.primaryText : textColor.placeholder} />
          ) : type === 'email' ? (
            <EnvelopeSimple
              size={18}
              color={disable ? textColor.primaryText : textColor.placeholder}
            />
          ) : null}
        </View>

        <TextInput
          style={[styles.input, textStyles.regular14]}
          placeholder={placeholder}
          placeholderTextColor={textColor.placeholder}
          value={value}
          onChangeText={text => onChange(name)(text)}
          onBlur={() => {
            onBlur(name);
            setTouched(true);
          }}
          secureTextEntry={inputType === 'password'}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          multiline={multiline}
          editable={!disable}
        />
        {type === 'password' && (
          <TouchableOpacity style={{ marginLeft: 5 }} onPress={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <EyeSlash size={21} color={textColor.placeholder} />
            ) : (
              <Eye size={21} color={textColor.placeholder} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {touched && error && <Text style={{ color: 'tomato', marginTop: 5 }}>{error}</Text>}
    </View>
  );
};

export default TextField;
