import { colors } from '@theme';
import { FieldProps } from 'formik';
import React from 'react';
import { Switch, View } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

interface CustomTextInputProps extends FieldProps {
  label?: string;
}

const SwitchField: React.FC<CustomTextInputProps> = ({ field, form }) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    grey1: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    grey2: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    blue: isDarkTheme ? colors.dark.blue : colors.light.blue,
    grey4: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
  };
  const handleSwitchChange = (value: boolean) => {
    form.setFieldValue(field.name, value);
  };
  return (
    <View>
      <Switch
        trackColor={{ false: textColor.grey4, true: textColor.blue }}
        thumbColor={textColor.grey2}
        onValueChange={handleSwitchChange}
        value={field.value}
      />
    </View>
  );
};
export default SwitchField;
