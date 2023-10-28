import { colors, textStyles } from '@theme';
import Constants from 'expo-constants';
import { MapPin } from 'phosphor-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import RegularButton from 'src/components/buttons/RegularButton';
import TabComponent from 'src/components/common/TabComponent';
import CommentTab from 'src/components/task-details/CommentTab';
import DetailsTab from 'src/components/task-details/DetailsTab';
import StartVisitModal from 'src/components/task-details/StartVisitModal';
import TaskHeader from 'src/components/task-details/TaskHeader';
import VisitTab from 'src/components/task-details/VisitTab';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';

const tabs = [
  { name: 'Visit', content: <VisitTab /> },
  { name: 'Details', content: <DetailsTab /> },
  { name: 'Comment', content: <CommentTab /> },
];

const TaskDetailsScreen = () => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isVisitStartModalVisible, setIsVisitStartModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <TaskHeader />
        <ScrollView style={customStyles.contentContainer(isDarkTheme)}>
          <TabComponent tabs={tabs} />
          {/* <View style={{ height: 100 }} /> */}
        </ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <RegularButton
            onPress={() => {
              setIsVisitStartModalVisible(!isVisitStartModalVisible);
            }}
            leftIcon={<MapPin size={20} color={colors.light.white} />}
            title={i18n.t('Start Visit')}
            style={styles.visitStartBtn}
            btnText={textStyles.semiBold16}
          />
        </View>
      </View>

      <StartVisitModal
        setIsVisible={setIsVisitStartModalVisible}
        isVisible={isVisitStartModalVisible}
      />
    </>
  );
};

export default TaskDetailsScreen;

const customStyles = {
  contentContainer: (isDarkTheme: boolean) => ({
    flex: 1,
    backgroundColor: isDarkTheme ? colors.dark.background : colors.light.background,
    paddingHorizontal: 16,
    paddingTop: 20,
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  visitStartBtn: {
    paddingVertical: 16,
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignSelf: 'center',
  },
});
