import { colors } from '@theme';
import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

const Divider = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: isDarkTheme ? colors.dark.grey3 : colors.light.grey3,
      }}
    />
  );
};

export default Divider;

// const styles = StyleSheet.create({});
