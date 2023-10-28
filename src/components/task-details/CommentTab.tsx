import { colors, textStyles } from '@theme';
import { ArrowBendUpRight } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Userpic } from 'react-native-userpic';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';

const CommentTab = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <View style={styles.profileContainer}>
        <Userpic name="Brooklyn Simmons" size={32} colorize={true} />
        <View style={{ marginLeft: 10 }}>
          <Text style={customStyles.name(isDarkTheme)}>Brooklyn Simmons</Text>
          <Text style={customStyles.time(isDarkTheme)}>22 hours ago</Text>
        </View>
      </View>
      <Text style={customStyles.message(isDarkTheme)}>
        Their writing skills have shown tremendous growth, with the student now able to construct
        well-structured paragraphs and convey their ideas coherently.
      </Text>
      <TouchableOpacity style={styles.replyBtn}>
        <ArrowBendUpRight size={16} weight="bold" color={colors.light.grey1} />
        <Text style={customStyles.replyBtnText(isDarkTheme)}>Reply</Text>
      </TouchableOpacity>
      <View style={customStyles.horLine(isDarkTheme)} />
      <View style={styles.profileContainer}>
        <Userpic name="Darrell Steward" size={32} colorize={true} />
        <View style={{ marginLeft: 10 }}>
          <Text style={customStyles.name(isDarkTheme)}>Darrell Steward</Text>
          <Text style={customStyles.time(isDarkTheme)}>15 May 2020 8:30 am</Text>
        </View>
      </View>
      <Text style={customStyles.message(isDarkTheme)}>
        Their writing skills have shown tremendous growth, with the student now able to construct
        well-structured paragraphs and convey their ideas coherently.
      </Text>
      <TouchableOpacity style={styles.replyBtn}>
        <ArrowBendUpRight size={16} weight="bold" color={colors.light.grey1} />
        <Text style={customStyles.replyBtnText(isDarkTheme)}>Reply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommentTab;

const customStyles = {
  name: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    ...textStyles.semiBold13,
  }),
  time: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    ...textStyles.regular12,
  }),
  message: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.grey1 : colors.light.grey0_5,
    ...textStyles.regular13,
  }),
  replyBtnText: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    ...textStyles.medium13,
    marginLeft: 10,
  }),
  horLine: (isDarkTheme: boolean) => ({
    backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.grey3,
    height: 1,
    marginVertical: 20,
  }),
};

const styles = StyleSheet.create({
  profileContainer: {
    ...commonStyles.rowStart,
    marginBottom: 15,
  },
  replyBtn: {
    ...commonStyles.rowStart,
    marginTop: 20,
  },
});
