import { textStyles, typography } from '@theme';
import { CaretDown, CheckCircle, Coffee, MapPin, PlayCircle } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import HomeSkeleton from 'src/components/dashboard/HomeSkeleton';
import TaskCompleteCard from 'src/components/dashboard/TaskCompleteCard';
import TaskViewModal from 'src/components/dashboard/TaskViewModal';
import WorkspaceHeader from 'src/components/dashboard/WorkspaceHeader';
import { useAppSelector } from 'src/store/hooks';
import { colors } from 'src/theme/colors';
import commonStyles from 'src/theme/commonStyles';
import TeamTasksCard from '../../components/dashboard/TeamTasksCard';

export interface TeamTaskListType {
  id: number;
  title: string;
}

const TEAM_TASK_LIST: TeamTaskListType[] = [
  { id: 0, title: 'Sakib' },
  { id: 1, title: 'Rakib' },
  { id: 2, title: 'Sohel' },
  { id: 3, title: 'Shadin' },
];

export default function HomeScreen() {
  //Handles the effect of pressing Hardware Back button
  // const route = useRoute();
  // useFocusEffect(
  //   useCallback(() => {
  //     const onBackPress = () => {
  //       if (route.name === 'HomeScreen') {
  //         closeApp();
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     };
  //     BackHandler.addEventListener('hardwareBackPress', onBackPress);
  //     return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //   }, [route]),
  // );
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [isTaskViewVisible, setIsTaskViewVisible] = useState(false);
  const [selectedTaskViewItem, setSelectedTaskViewItem] = useState<string | null>('Today Task');
  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);
  }, []);

  const handleTaskViewSelect = (item: string) => {
    setSelectedTaskViewItem(item);
    setIsTaskViewVisible(false);
  };

  return (
    <>
      {showSkeleton ? (
        <HomeSkeleton />
      ) : (
        <ScreenWrapper>
          <WorkspaceHeader />
          <View style={styles.dayStartBtnContainer}>
            <Text style={customTextStyles.dayStartLeftText(isDarkTheme)}>
              Let’s Manage & Track your Visits
            </Text>
            <TouchableOpacity style={styles.dayStartBtn}>
              <MapPin size={12} weight="bold" color={colors.light.earthBlue} />
              <Text style={styles.dayStartText}>Day Start</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.taskContainer}>
            <View style={customViewStyles.taskComplete(isDarkTheme)}>
              <View style={styles.taskContent}>
                <View style={styles.checkCircle}>
                  <CheckCircle size={20} weight="bold" color="#DF980F" />
                </View>
              </View>
              <View style={{ position: 'absolute', bottom: 20, left: 20 }}>
                <Text style={customTextStyles.compTaskCount(isDarkTheme)}>140</Text>
                <Text style={customTextStyles.compTaskText(isDarkTheme)}>Task Completed</Text>
              </View>
            </View>
            <View style={{ height: responsiveHeight(24), justifyContent: 'space-between' }}>
              <View style={customViewStyles.taskPending(isDarkTheme)}>
                <View style={commonStyles.rowSpaceBetween}>
                  <View>
                    <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>12</Text>
                    <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>Pending</Text>
                  </View>
                  <View style={styles.checkCircle}>
                    <Coffee size={20} weight="bold" color="#2EA8DC" />
                  </View>
                </View>
              </View>
              <View style={customViewStyles.taskOngoing(isDarkTheme)}>
                <View style={commonStyles.rowSpaceBetween}>
                  <View>
                    <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>28</Text>
                    <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>
                      On Going
                    </Text>
                  </View>
                  <View style={styles.checkCircle}>
                    <PlayCircle size={20} weight="bold" color="#A490F6" />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.titleCont}>
            <Text style={customTextStyles.titleText(isDarkTheme)}>Team Tasks</Text>
            <TouchableOpacity style={styles.titleBtn}>
              <Text style={styles.titleBtnTxt}>See all</Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              contentContainerStyle={{ paddingHorizontal: 20 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={TEAM_TASK_LIST}
              renderItem={data => <TeamTasksCard {...{ data }} />}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={styles.titleCont}>
            <Text style={customTextStyles.titleText(isDarkTheme)}>Today task</Text>
            <TouchableOpacity
              onPress={() => setIsTaskViewVisible(!isTaskViewVisible)}
              style={styles.titleBtn}>
              <Text style={styles.titleBtnTxt}>{selectedTaskViewItem} </Text>
              <CaretDown size={10} weight="bold" color={colors.dark.earthBlue} />
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <TaskCompleteCard />
            <View style={{ marginVertical: 5 }} />
            <TaskCompleteCard />
            <View style={{ marginVertical: 5 }} />
          </View>
        </ScreenWrapper>
      )}
      <TaskViewModal
        setIsVisible={setIsTaskViewVisible}
        isVisible={isTaskViewVisible}
        handleTaskViewSelect={handleTaskViewSelect}
      />
    </>
  );
}

const customViewStyles = {
  taskComplete: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    backgroundColor: isDarkTheme ? '#F5B435' : '#FFD88D',
    borderRadius: 12,
    height: responsiveHeight(24),
    width: responsiveWidth(43.2),
  }),
  taskPending: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    padding: 20,
    backgroundColor: isDarkTheme ? '#17A6E3' : '#B1E5FC',
    borderRadius: 12,
    height: responsiveHeight(11.3),
    width: responsiveWidth(43.2),
    paddingBottom: 5,
  }),
  taskOngoing: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    padding: 20,
    backgroundColor: isDarkTheme ? '#5C3ED0' : '#CABDFF',
    borderRadius: 12,
    height: responsiveHeight(11.3),
    width: responsiveWidth(43.2),
  }),
};

const customTextStyles = {
  dayStartLeftText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold800,
    fontSize: 22,
    lineHeight: 32,
    width: responsiveWidth(60),
  }),
  titleText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold700,
    fontSize: 20,
    lineHeight: 30,
  }),
  compTaskCount: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold700,
    fontSize: 37,
    lineHeight: 38,
  }),
  compTaskText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    ...textStyles.medium12,
  }),
  penAndOngoingTaskCount: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold700,
    fontSize: 24,
    lineHeight: 30,
  }),
  penAndOngoingTaskText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    ...textStyles.medium12,
  }),
};

const styles = StyleSheet.create({
  dayStartBtnContainer: {
    ...commonStyles.rowSpaceBetween,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  dayStartBtn: {
    ...commonStyles.rowStart,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: colors.light.white,
    shadowColor: '#272e38',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  dayStartText: {
    ...textStyles.semiBold12,
    marginLeft: 5,
    color: colors.light.earthBlue,
  },
  titleCont: {
    ...commonStyles.rowSpaceBetween,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  titleBtn: {
    backgroundColor: ' rgba(102, 43, 242, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    ...commonStyles.rowStart,
  },
  titleBtnTxt: {
    color: colors.light.earthBlue,
    ...textStyles.semiBold13,
  },
  taskContainer: {
    ...commonStyles.rowSpaceBetween,
    paddingHorizontal: 20,
  },
  taskContent: {
    padding: 20,
    justifyContent: 'flex-end',
  },
  checkCircle: {
    width: 36,
    height: 36,
    backgroundColor: colors.light.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
