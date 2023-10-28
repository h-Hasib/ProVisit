import { colors, textStyles } from '@theme';
import { LinearGradient } from 'expo-linear-gradient';
import { PencilSimple, Users } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Userpic } from 'react-native-userpic';
import i18n from 'src/languages/i18n';
import Header from '../common/Header';
interface Props {
  name: string;
  memberCount: string;
}
const TeamDetailsCard = ({ name, memberCount }: Props) => {
  return (
    <>
      <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={colors.light.linear2}>
        <View style={{ paddingHorizontal: 20 }}>
          <Header
            rightComponent={
              <TouchableOpacity
                onPress={() => {
                  alert('Hello');
                }}
                style={styles.editIconContainer}>
                <PencilSimple size={20} weight="bold" color={colors.light.white} />
              </TouchableOpacity>
            }
            titleStyle={{ color: colors.light.grey3 }}
            title={i18n.t('Team Details')}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
          <Userpic name={name} size={25} radius={6} colorize={false} />
          <Text style={[textStyles.semiBold18, { color: colors.light.white, marginLeft: 10 }]}>
            {name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            // borderWidth: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}>
          <Users size={16} color={colors.light.white} />
          <Text
            style={[
              textStyles.medium13,
              { color: colors.light.white },
            ]}>{`${memberCount} members`}</Text>
        </View>
      </LinearGradient>
      {/* <Text>TeamDetailsCard</Text>
    </View> */}
    </>
  );
};

export default TeamDetailsCard;

const styles = StyleSheet.create({
  editIconContainer: {
    height: 28,
    width: 28,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
