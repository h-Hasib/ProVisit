import { textStyles } from '@theme';
import { PlusCircle } from 'phosphor-react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import CancelAction from 'src/assets/svg/bottomTab/CancelAction';
import CreateTaskModal from 'src/components/create-task/CreateTaskModal';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import { colors } from 'src/theme/colors';
import InstantVisitModal from '../instant-visit/InstantVisitModal';

interface propTypes {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const ActionModal = ({ modalVisible, setModalVisible }: propTypes) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isCreateTaskVisible, setCreateTaskVisible] = useState(false);
  const [isInstantVisitVisible, setInstantVisitVisible] = useState(false);

  const styles = StyleSheet.create({
    modalContainer: {
      margin: 0,
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    container: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    option: {
      paddingVertical: 16,
      paddingHorizontal: 18,
      borderWidth: 0,
      borderRadius: 16,
      marginHorizontal: 25,
      backgroundColor: colors.light.white,
      marginVertical: 12,
    },
    cancelOption: {
      paddingVertical: 20,
      paddingHorizontal: 0,
      borderWidth: 0,
      borderRadius: 0,
      marginHorizontal: 0,
      paddingLeft: 5,
      // backgroundColor: isDarkTheme ? '#2A446599' : '#10213599',
      marginVertical: 12,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });

  return (
    <>
      <Modal
        backdropOpacity={0.9}
        isVisible={modalVisible}
        backdropColor={isDarkTheme ? '#2A446599' : colors.dark.background}
        onBackdropPress={() => setModalVisible(true)}
        onBackButtonPress={() => setModalVisible(false)}
        style={[styles.modalContainer]}>
        <View style={[styles.container, {}]}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.option}
            onPress={() => {
              setCreateTaskVisible(!isCreateTaskVisible);
              setModalVisible(false);
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <PlusCircle size={26} color={colors.light.earthBlue} weight={'duotone'} />
              <Text style={[textStyles.semiBold16, { marginLeft: 12, color: colors.light.dark }]}>
                {i18n.t(`Create Task`)}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.option}
            onPress={() => {
              setInstantVisitVisible(!isInstantVisitVisible);
              setModalVisible(false);
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <PlusCircle size={26} color={colors.light.earthBlue} weight={'duotone'} />
              <Text style={[textStyles.semiBold16, { marginLeft: 12, color: colors.light.dark }]}>
                {i18n.t(`Instant Visit`)}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.cancelOption}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setModalVisible(false);
              }}>
              <CancelAction />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {isCreateTaskVisible && (
        <CreateTaskModal setIsVisible={setCreateTaskVisible} isVisible={isCreateTaskVisible} />
      )}
      {isInstantVisitVisible && (
        <InstantVisitModal
          setIsVisible={setInstantVisitVisible}
          isVisible={isInstantVisitVisible}
        />
      )}
    </>
  );
};

export default ActionModal;
