import { colors, typography } from '@theme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import i18n from 'src/languages/i18n';
import commonStyles from 'src/theme/commonStyles';
import TodayTaskCard from './TodayTaskCard';

const { width } = Dimensions.get('window');

export default function TodaysTaskHorizontalList() {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      colors={colors.light.linear2}
      style={{ paddingTop: 36, paddingBottom: 32 }}>
      <View style={[commonStyles.rowSpaceBetween, { marginBottom: 24, marginHorizontal: 20 }]}>
        <View>
          <Animatable.Text animation={'fadeIn'} delay={500} numberOfLines={1} style={styles.today}>
            {i18n.t('Todays Tasks')}
          </Animatable.Text>
          <Animatable.Text animation={'fadeIn'} delay={1000} numberOfLines={1} style={styles.date}>
            Monday, Sep 30
          </Animatable.Text>
        </View>
        <Text numberOfLines={1} onPress={() => alert('See all')} style={styles.seeAll}>
          {i18n.t('See all')}
        </Text>
      </View>

      <FlatList
        data={Array(3).fill(1)}
        horizontal
        showsHorizontalScrollIndicator={false}
        // ListEmptyComponent
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        ListHeaderComponent={() => <View style={{ width: 20 }} />}
        ListFooterComponent={() => <View style={{ width: 20 }} />}
        keyExtractor={(item, index) => index + '_' + item}
        renderItem={({ index }) => (
          <Animatable.View
            animation={{
              from: { opacity: 0, marginRight: width },
              to: { opacity: 1, marginRight: 0 },
            }}
            style={{ width: width / 1.3 }}>
            <TodayTaskCard status={index % 2 === 0 ? 2 : 3} />
          </Animatable.View>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  today: {
    fontFamily: typography.manropeBold700,
    fontSize: 24,
    lineHeight: 33.6,
    color: colors.light.white,
  },
  date: {
    fontFamily: typography.manropeRegular400,
    fontSize: 13,
    lineHeight: 19.5,
    letterSpacing: 0.01,
    color: colors.light.grey3,
  },
  seeAll: {
    paddingHorizontal: 18,
    paddingVertical: 6,
    backgroundColor: colors.light.white + '20',
    borderRadius: 20,
    color: colors.light.white,
  },
});
