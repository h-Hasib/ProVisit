import { colors, textStyles } from '@theme';
import { LinearGradient } from 'expo-linear-gradient';
import { CaretRight } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Premium from 'src/assets/svg/logo/Premium';
import PremiumButtonCircle1 from 'src/assets/svg/premiumButton/PremiumButtonCircle1';
import PremiumButtonCircle2 from 'src/assets/svg/premiumButton/PremiumButtonCircle2';
import i18n from 'src/languages/i18n';

const PremiumButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => alert(`You'll be our Premium user`)}>
      <LinearGradient
        style={[styles.updateToPremiumBtn]}
        colors={colors.dark.linear3}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}>
        <View style={{ position: 'absolute', top: 0, left: 0 }}>
          <PremiumButtonCircle1 />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Premium />
          <Text style={[textStyles.semiBold18, { marginLeft: 15, color: '#ffffff' }]}>
            {i18n.t(`Upgrade to Premium`)}
          </Text>
        </View>
        <CaretRight size={20} color={'#fff'} weight="bold" />
        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <PremiumButtonCircle2 />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PremiumButton;

const styles = StyleSheet.create({
  updateToPremiumBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
});
