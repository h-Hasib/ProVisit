import { colors, textStyles } from '@theme';
import React, { useState } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import RegularButton from '../buttons/RegularButton';
import AvatarCount from '../common/AvatarCount';
import AddUserModal from './AddUserModal';
import AttachmentList from './AttachmentList';

const DetailsTab = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isAddUserVisible, setIsAddUserVisible] = useState(false);
  return (
    <>
      <View style={{ marginTop: 13, marginBottom: 20 }}>
        <Text style={customStyles.titleText(isDarkTheme)}>{i18n.t('Assignee')}</Text>
        <View style={commonStyles.rowSpaceBetween}>
          <AvatarCount size={32} data={[]} />
          <RegularButton
            onPress={() => {
              setIsAddUserVisible(!isAddUserVisible);
            }}
            title={`+ ${i18n.t('Add')}`}
            style={styles.btnStyle}
            btnText={textStyles.semiBold12}
          />
        </View>
        <Text style={customStyles.titleText(isDarkTheme)}>{i18n.t('Description')}</Text>

        <Text style={customStyles.desc(isDarkTheme)}>
          The Project Manager should use appropriate verification techniques to manage changes in
          project scope, schedule, and costs. This task includes measuring project performance using
          appropriate systems.
        </Text>
        <Text style={customStyles.titleText(isDarkTheme)}>{i18n.t('Task Details')}</Text>
        <View>
          <View style={styles.taskDetails}>
            <Text style={customStyles.leftText(isDarkTheme)}>{i18n.t('Task Number')}:</Text>
            <Text numberOfLines={2} style={customStyles.rightText(isDarkTheme)}>
              007
            </Text>
          </View>
          <View style={styles.taskDetails}>
            <Text style={customStyles.leftText(isDarkTheme)}>{i18n.t('Task Category')}:</Text>
            <Text numberOfLines={2} style={customStyles.rightText(isDarkTheme)}>
              Marketing
            </Text>
          </View>
          <View style={styles.taskDetails}>
            <Text style={customStyles.leftText(isDarkTheme)}>{i18n.t('Task Type')}:</Text>
            <Text numberOfLines={2} style={customStyles.rightText(isDarkTheme)}>
              Regular
            </Text>
          </View>
          <View style={styles.taskDetails}>
            <Text style={customStyles.leftText(isDarkTheme)}>{i18n.t('Date')}:</Text>
            <Text numberOfLines={2} style={customStyles.rightText(isDarkTheme)}>
              Mar 12- Mar 20, 2023
            </Text>
          </View>
          <View style={styles.taskDetails}>
            <Text style={customStyles.leftText(isDarkTheme)}>{i18n.t('Time')}:</Text>
            <Text numberOfLines={2} style={customStyles.rightText(isDarkTheme)}>
              Everyday 10:00 am to 11:00 am 144,
            </Text>
          </View>
          <View style={styles.taskDetails}>
            <Text style={customStyles.leftText(isDarkTheme)}>{i18n.t('Location')}:</Text>
            <Text numberOfLines={2} style={customStyles.rightText(isDarkTheme)}>
              144, DIT Avenue, Badda
            </Text>
          </View>
        </View>
        <Text style={customStyles.titleText(isDarkTheme)}>{i18n.t('Map Location')}</Text>
        <View style={styles.mapContainer} />
        <Text style={customStyles.titleText(isDarkTheme)}>{i18n.t('Attachments')}</Text>
        <AttachmentList />
        <View style={{ height: 85 }} />
      </View>
      <AddUserModal setIsVisible={setIsAddUserVisible} isVisible={isAddUserVisible} />
    </>
  );
};

export default DetailsTab;

const customStyles = {
  titleText: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    marginVertical: 15,
    ...textStyles.bold20,
  }),
  desc: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.grey0_5 : colors.light.grey1,
    ...textStyles.regular13,
  }),
  leftText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    width: '35%',
    color: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    ...textStyles.regular12,
  }),
  rightText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    width: '65%',
    color: isDarkTheme ? colors.dark.white : colors.light.grey1,
    ...textStyles.semiBold12,
  }),
};

const styles = StyleSheet.create({
  btnStyle: {
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  taskDetails: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  mapContainer: {
    backgroundColor: colors.light.grey0_5,
    height: 120,
    borderRadius: 20,
  },
});
