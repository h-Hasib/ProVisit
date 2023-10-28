import { colors, textStyles } from '@theme';
import { FieldProps } from 'formik';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

interface TitleInputProps extends FieldProps {
  placeholder?: string;
  disable?: boolean;
  multiline?: boolean;
}

const TitleTextField: React.FC<TitleInputProps> = ({
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
  };

  const styles = StyleSheet.create({
    inputControl: {
      borderWidth: 0,
      paddingVertical: 14,
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

  return (
    <View style={{}}>
      <View style={[styles.inputControl]}>
        <TextInput
          style={[styles.input, textStyles.semiBold18]}
          placeholder={placeholder}
          placeholderTextColor={textColor.primaryText}
          value={value}
          onChangeText={text => onChange(name)(text)}
          onBlur={() => {
            onBlur(name);
            setTouched(true);
          }}
          keyboardType={'default'}
          multiline={multiline}
          editable={!disable}
        />
      </View>
      {touched && error && <Text style={{ color: 'tomato', marginTop: 5 }}>{error}</Text>}
    </View>
  );
};

export default TitleTextField;
