import { colors, textStyles, typography } from '@theme';
import { CaretDown } from 'phosphor-react-native';
import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import PreviousListCard from '../dashboard/PreviousListCard';

const VisitTab = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleCont}>
        <Text style={customStyles.titleText(isDarkTheme)}>Previous Visits</Text>
        <TouchableOpacity style={styles.titleBtn}>
          <Text style={styles.titleBtnTxt}>All Tasks </Text>
          <CaretDown size={10} color={colors.dark.earthBlue} />
        </TouchableOpacity>
      </View>
      <PreviousListCard />
      <View style={{ marginVertical: 8 }} />
      <PreviousListCard />
      <View style={{ marginVertical: 8 }} />
      <PreviousListCard />
    </View>
  );
};

export default memo(VisitTab);

const customStyles = {
  titleText: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold700,
    fontSize: 20,
    lineHeight: 30,
  }),
};

const styles = StyleSheet.create({
  titleCont: {
    marginVertical: 20,
    ...commonStyles.rowSpaceBetween,
  },
  titleBtn: {
    backgroundColor: ' rgba(102, 43, 242, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    ...commonStyles.rowStart,
  },
  titleBtnTxt: {
    color: colors.light.earthBlue,
    ...textStyles.semiBold13,
  },
});
