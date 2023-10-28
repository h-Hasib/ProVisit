import { colors, textStyles } from '@theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Clock, MapPin, PencilSimple } from 'phosphor-react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import i18n from 'src/languages/i18n';
import Header from '../common/Header';
import EditTaskModal from './EditTaskModal';

const TaskHeader = () => {
  const [isEditTaskVisible, setIsEditTaskVisible] = useState(false);
  return (
    <>
      <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={colors.light.linear2}>
        <View style={{ paddingHorizontal: 20 }}>
          <Header
            rightComponent={
              <TouchableOpacity
                onPress={() => {
                  setIsEditTaskVisible(!isEditTaskVisible);
                }}
                style={styles.editIconContainer}>
                <PencilSimple size={20} weight="bold" color={colors.light.white} />
              </TouchableOpacity>
            }
            titleStyle={{ color: colors.light.grey3 }}
            title={i18n.t('Task Detail')}
          />
        </View>
        <View style={styles.container}>
          <Text style={[styles.title, textStyles.semiBold18]}>Pharmacy Shop Visit</Text>
          <Text style={[styles.des, textStyles.regular13]}>
            {`The purpose of this task is to gather specific information and perform an evaluation of the pharmacy's services and environment.`}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.visitTime}>
              <MapPin size={14} weight="bold" color={colors.light.white} />
              <Text style={[styles.visitTimeText, textStyles.medium13]}>15 {i18n.t('Visits')}</Text>
            </View>
            <View style={styles.visitTime}>
              <Clock size={14} weight="bold" color={colors.light.white} />
              <Text style={[styles.visitTimeText, textStyles.medium13]}>54H 32M</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <EditTaskModal setIsVisible={setIsEditTaskVisible} isVisible={isEditTaskVisible} />
    </>
  );
};

export default TaskHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  editIconContainer: {
    height: 28,
    width: 28,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.light.white,
  },
  des: {
    color: colors.light.grey4,
    marginVertical: 15,
  },
  visitTime: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 6,
    marginRight: 10,
  },
  visitTimeText: {
    color: colors.light.white,
    marginLeft: 5,
  },
});
