import { colors, typography } from '@theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import i18n from 'src/languages/i18n';

const TaskStatusChip = ({ status }: { status: 1 | 2 | 3 }) => {
  const getColor = () => {
    if (status === 1) return colors.light.blue;
    if (status === 2) return colors.light.yellow;
    if (status === 3) return colors.light.green;
    else return colors.light.red;
  };
  const getText = () => {
    if (status === 1) return 'TO-DO';
    if (status === 2) return 'IN PROGRESS';
    if (status === 3) return 'COMPLETED';
    else return 'NONE';
  };
  return (
    <View
      style={[
        styles.statusBarContainer,
        { backgroundColor: getColor() + '10', borderColor: getColor() },
      ]}>
      <Text style={[styles.statusBarText, { color: getColor() }]}>{i18n.t(getText())}</Text>
    </View>
  );
};

export default TaskStatusChip;

const styles = StyleSheet.create({
  statusBarContainer: {
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 16,
    borderWidth: 1,
  },
  statusBarText: {
    textTransform: 'capitalize',
    fontFamily: typography.manropeBold700,
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.01,
  },
});
