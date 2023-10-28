import { textStyles } from '@theme';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import commonStyles from 'src/theme/commonStyles';
interface Props {
  backgroundColor: string;
  title: string;
  value: number;
  svg: React.ReactElement<SvgProps>;
}
const TaskStatusCard = ({ backgroundColor, title, value, svg }: Props) => {
  return (
    <View
      style={[
        commonStyles.shadow0,
        styles.card,
        commonStyles.rowSpaceBetween,
        { backgroundColor: backgroundColor },
      ]}>
      <View>
        <Text style={[textStyles.medium12, { color: '#FFF' }]}>{title}</Text>
        <Text style={[textStyles.bold24, { color: '#FFF' }]}>{value}</Text>
      </View>
      <View>
        <Animated.View>{svg}</Animated.View>
      </View>
    </View>
  );
};

export default TaskStatusCard;

const styles = StyleSheet.create({
  card: {
    paddingLeft: 16,
    borderRadius: 8,
    margin: 5,
    width: 170,
    height: 75,
  },
});
