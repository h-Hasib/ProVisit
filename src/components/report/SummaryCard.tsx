import { colors, textStyles } from '@theme';
import { LinearGradient } from 'expo-linear-gradient';
import { CaretDown } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import commonStyles from 'src/theme/commonStyles';
import TimerCard from '../common/TimerCard';

const SummaryCard = () => {
  return (
    <LinearGradient style={styles.card} colors={['#7B49F1', '#4D23B0']}>
      <View style={[commonStyles.rowSpaceBetween, { marginBottom: 20 }]}>
        <Text style={[textStyles.semiBold18, { color: '#FFF' }]}>Summary</Text>
        <View style={commonStyles.rowCenter}>
          <Text style={[textStyles.semiBold13, { color: '#FFFFFF', paddingRight: 5 }]}>
            July, 2023
          </Text>
          <TouchableOpacity onPress={() => alert('Drop Down')}>
            <CaretDown size={14} color={colors.light.white} />
          </TouchableOpacity>
        </View>
      </View>
      <TimerCard
        leftColumnName="Visit"
        leftColumnValue="12"
        rightColumnName="Duration"
        rightColumnValue="2H 40M"
        bgColor="rgba(255, 255, 255, 0.10)"
      />
    </LinearGradient>
  );
};

export default SummaryCard;

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 15,
    marginBottom: '3%',
  },
});
