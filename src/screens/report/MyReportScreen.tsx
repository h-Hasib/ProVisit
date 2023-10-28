import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles, typography } from '@theme';
import { CaretDown, CheckCircle } from 'phosphor-react-native';
import React, { useState } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TextStyle, ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import ProfileCard from 'src/components/common/ProfileCard';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import MonthViewModal from 'src/components/report/MonthViewModal';
import TotalTaskCard from 'src/components/report/TotalTaskCard';
import { RootStackParamList } from 'src/interfaces/navigation';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';

const MyReportScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isTaskViewVisible, setIsTaskViewVisible] = useState(false);
  const [selectedTaskViewItem, setSelectedTaskViewItem] = useState<string | null>('July');

  const handleTaskViewSelect = (item: string) => {
    setSelectedTaskViewItem(item);
    setIsTaskViewVisible(false);
  };
  return (
    <ScreenWrapper>
      <View>
        <ProfileCard
          name={'Adam Leonardo'}
          email={'adam.leonardeo@gmail.com'}
          image={`https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg`}
        />
      </View>
      <View>
        <View style={styles.titleCont}>
          <Text style={customTextStyles.titleText(isDarkTheme)}>My Reports</Text>
          <TouchableOpacity
            onPress={() => setIsTaskViewVisible(!isTaskViewVisible)}
            style={styles.titleBtn}>
            <Text style={styles.titleBtnTxt}>{selectedTaskViewItem} </Text>
            <CaretDown size={10} weight="bold" color={colors.dark.earthBlue} />
          </TouchableOpacity>
        </View>
        <View style={[styles.daySecondBtnContainer, { bottom: 10 }]}>
          <Text style={customTextStyles.startSecondLeftText(isDarkTheme)}>
            Reports based on the task summary
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <TotalTaskCard totalVisit={'10'} totalHour={'2h 30m'} totalTask={'18'} />
      </View>
      <View style={styles.taskContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ReportTaskListScreen')}>
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
        </TouchableOpacity>
        <View style={{ height: responsiveHeight(24), justifyContent: 'space-between' }}>
          <View style={customViewStyles.taskPending(isDarkTheme)}>
            <TouchableOpacity onPress={() => navigation.navigate('ReportTaskListScreen')}>
              <View style={commonStyles.rowSpaceBetween}>
                <View>
                  <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>12</Text>
                  <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>Pending</Text>
                </View>
                <View style={styles.checkCircle}>
                  <CheckCircle size={20} weight="bold" color="#DF980F" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={customViewStyles.taskOngoing(isDarkTheme)}>
            <TouchableOpacity onPress={() => navigation.navigate('ReportTaskListScreen')}>
              <View style={commonStyles.rowSpaceBetween}>
                <View>
                  <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>28</Text>
                  <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>On Going</Text>
                </View>
                <View style={styles.checkCircle}>
                  <CheckCircle size={20} weight="bold" color="#DF980F" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <MonthViewModal
        setIsVisible={setIsTaskViewVisible}
        isVisible={isTaskViewVisible}
        handleTaskViewSelect={handleTaskViewSelect}
      />
    </ScreenWrapper>
  );
};

export default MyReportScreen;

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

const styles = StyleSheet.create({
  dayStartBtnContainer: {
    ...commonStyles.rowSpaceBetween,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  daySecondBtnContainer: {
    ...commonStyles.rowStart,
    paddingHorizontal: 20,
    marginVertical: 0,
  },
  cardView: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  internalCard: {
    paddingVertical: 5,
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
});

const customTextStyles = {
  startLeftText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold800,
    fontSize: 24,
    lineHeight: 33.6,
    width: responsiveWidth(35),
  }),
  startSecondLeftText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeRegular400,
    fontSize: 13,
    lineHeight: 19.5,
    width: responsiveWidth(60),
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
  titleText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeBold700,
    fontSize: 20,
    lineHeight: 30,
  }),
};
