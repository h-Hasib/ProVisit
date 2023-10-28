import { colors, textStyles } from '@theme';
import { ArrowUpRight, CheckCircle, MapPin } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Userpic } from 'react-native-userpic';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import TimerCard from '../common/TimerCard';

const PreviousListCard = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white },
      ]}>
      <View style={[commonStyles.rowSpaceBetween]}>
        <View style={commonStyles.rowStart}>
          <Userpic name="Halima Akter" size={38} colorize={true} />
          <View style={{ marginLeft: 10 }}>
            <Text
              numberOfLines={1}
              style={[
                textStyles.bold16,
                { color: isDarkTheme ? colors.dark.white : colors.light.dark, width: 140 },
              ]}>
              Maruf Hossain Maruf
            </Text>
            <Text
              style={[
                textStyles.regular12,
                { color: isDarkTheme ? colors.dark.grey1 : colors.light.grey1 },
              ]}>
              Saturday 12 Aug 2021, 22:50
            </Text>
          </View>
        </View>
        <View style={commonStyles.rowStart}>
          <CheckCircle size={12} weight="fill" color={colors.light.green} />
          <Text style={[textStyles.bold10, { marginLeft: 5, color: colors.light.green }]}>
            COMPLETED
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
            25/B, Chinatown, USA 25/B, Chinatown, USA
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
        leftColumnValue={'11:48 pm'}
        rightColumnName={'Duration'}
        rightColumnValue={'2H 40M'}
      />
    </View>
  );
};

export default React.memo(PreviousListCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#ccc9c9',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
});
