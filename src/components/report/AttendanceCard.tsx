import { colors, textStyles } from '@theme';
import { ArrowUpRight, MapPin } from 'phosphor-react-native';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Userpic } from 'react-native-userpic';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import TimerCard from '../common/TimerCard';
interface Props {
  name: string;
  image?: string;
  designation: string;
  location: string;
  isActive: boolean;
}
const AttendanceCard = ({ name, image, designation, location, isActive }: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View
      style={[
        commonStyles.shadow2,
        styles.card,
        { backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white },
      ]}>
      <View style={[commonStyles.rowStart, { marginBottom: 15 }]}>
        <View>
          {image ? (
            <Userpic source={{ uri: image }} size={40} colorize={true} />
          ) : (
            <Userpic name={name} size={40} colorize={true} />
          )}
          <View style={[styles.isActive, { backgroundColor: isActive ? '#0DB050' : '#233852' }]} />
        </View>

        <View style={{ paddingLeft: 8 }}>
          <Text
            numberOfLines={1}
            style={[
              textStyles.bold16,
              { color: isDarkTheme ? colors.dark.white : colors.light.dark, width: 140 },
            ]}>
            {name}
          </Text>
          <Text
            style={[
              textStyles.regular12,
              { color: isDarkTheme ? colors.dark.grey1 : colors.light.grey1 },
            ]}>
            {designation}
          </Text>
        </View>
      </View>
      <View style={[commonStyles.rowSpaceBetween, { marginVertical: 10 }]}>
        <View style={commonStyles.rowStart}>
          <MapPin size={16} weight="bold" color={colors.light.grey2} />
          <Text
            numberOfLines={1}
            style={[
              textStyles.medium13,
              {
                color: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
                marginLeft: 5,
                width: '68%',
              },
            ]}>
            {location}
          </Text>
        </View>
        <View style={commonStyles.rowStart}>
          <Text style={[textStyles.semiBold13, { color: colors.light.blue, marginRight: 5 }]}>
            {i18n.t('See_Map')}
          </Text>
          <ArrowUpRight size={16} weight="bold" color={colors.light.blue} />
        </View>
      </View>
      <TimerCard
        leftColumnName={'Start Time'}
        leftColumnValue="11:48 pm"
        rightColumnName={'Duration'}
        rightColumnValue="2H 40M"
      />
    </View>
  );
};

export default memo(AttendanceCard);

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 15,
    marginBottom: '3%',
  },
  isActive: {
    position: 'absolute',
    top: 28,
    right: 0,
    width: 11,
    height: 11,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FFF',
  },
});
