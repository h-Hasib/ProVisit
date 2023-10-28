import { colors, textStyles } from '@theme';
import { FieldProps } from 'formik';
import { CaretDown } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from 'src/store/hooks';
import TaskCategoryModal from '../create-task/TaskCategoryModal';

interface CustomTextInputProps extends FieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  data: string[];
}

const SelectModalField: React.FC<CustomTextInputProps> = ({
  icon,
  field,
  form,
  placeholder,
  data,
}) => {
  const { name, onChange } = field;
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { touched: touchedFields, errors } = form;
  const { isDarkTheme } = useAppSelector(state => state.app);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalSelectedItem, setModalSelectedItem] = useState('');

  useEffect(() => {
    if (touchedFields[name]) {
      setTouched(true);
      setError(errors[name] as string | undefined);
    }
  }, [touchedFields, errors, name]);

  const toggleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };
  const setValues = (text: string) => {
    form.setFieldValue('taskCategory', text);

    // alert(`Hook: ${modalSelectedItem} \n Text: ${text}`);
  };
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
  return (
    <View style={{ marginVertical: 5 }}>
      <TouchableOpacity activeOpacity={0.6} onPress={toggleModalVisible}>
        <View style={[styles.inputControl, { borderColor: textColor.borderColor }]}>
          <View style={{ marginRight: 10 }}>{icon ? icon : <View />}</View>
          <TextInput
            style={[styles.input, textStyles.regular13]}
            placeholder={placeholder}
            placeholderTextColor={textColor.secondaryText}
            value={modalSelectedItem}
            onChangeText={text => onChange(name)(text)}
            keyboardType={'default'}
            multiline={false}
            editable={false}
          />
          <View style={{ marginLeft: 5, paddingRight: 5 }}>
            <CaretDown size={18} color={textColor.secondaryText} />
          </View>
        </View>
      </TouchableOpacity>
      {touched && error && <Text style={{ color: 'tomato', marginTop: 5 }}>{error}</Text>}
      {isModalVisible && (
        <TaskCategoryModal
          isVisible={isModalVisible}
          setIsVisible={setIsModalVisible}
          setModalSelectedItem={setModalSelectedItem}
          modalSelectedItem={modalSelectedItem}
          setValues={setValues}
          data={data}
        />
      )}
    </View>
  );
};

export default SelectModalField;
