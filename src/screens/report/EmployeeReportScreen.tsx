import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles, typography } from '@theme';
import { CaretDown } from 'phosphor-react-native';
import React, { useState } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Header from 'src/components/common/Header';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import DayViewModal from 'src/components/report/DayViewModal';
import IndividualReport from 'src/components/report/IndividualReport';
import TaskTypeTab from 'src/components/report/TaskTypeTab';
import TeamReport from 'src/components/report/TeamReport';
import { RootStackParamList } from 'src/interfaces/navigation';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';

export default function EmployeeReportScreen() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isTaskViewVisible, setIsTaskViewVisible] = useState(false);
  const [selectedTaskViewItem, setSelectedTaskViewItem] = useState<string | null>('Last 7 Days');

  const [activeTab, setActiveTab] = useState('Team');

  const handleTaskViewSelect = (item: string) => {
    setSelectedTaskViewItem(item);
    setIsTaskViewVisible(false);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper>
      <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
        <Header title="Employee Reports" />
      </View>
      <View style={styles.dayStartBtnContainer}>
        <Text style={customTextStyles.startLeftText(isDarkTheme)}>Employee Reports</Text>
        <TouchableOpacity
          onPress={() => setIsTaskViewVisible(!isTaskViewVisible)}
          style={styles.titleBtn}>
          <Text style={styles.titleBtnTxt}>{selectedTaskViewItem} </Text>
          <CaretDown size={10} weight="bold" color={colors.dark.earthBlue} />
        </TouchableOpacity>
      </View>
      <View>
        <TaskTypeTab handleTabClick={handleTabClick} activeTab={activeTab} />
        {activeTab === 'Team' && (
          <TeamReport teamName={'Front End Devs'} totalTask={3} duration={'1h 30m'} />
        )}
        {activeTab === 'Team' && (
          <TeamReport teamName={'Front End Devs'} totalTask={3} duration={'1h 30m'} />
        )}
        {activeTab === 'Team' && (
          <TeamReport teamName={'Front End Devs'} totalTask={3} duration={'1h 30m'} />
        )}
        {activeTab === 'Team' && (
          <TeamReport teamName={'Front End Devs'} totalTask={3} duration={'1h 30m'} />
        )}
        {activeTab === 'Individual' && (
          <IndividualReport
            onPress={() => navigation.navigate('ReportDetailsScreen')}
            name={'John Doe'}
            userType={'Employee'}
            totalVisit={5}
            ongoingVisit={2}
            totalTask={8}
            duration={'2h 30m'}
          />
        )}
        {activeTab === 'Individual' && (
          <IndividualReport
            onPress={() => navigation.navigate('ReportDetailsScreen')}
            name={'John Doe'}
            userType={'Employee'}
            totalVisit={5}
            ongoingVisit={2}
            totalTask={8}
            duration={'2h 30m'}
          />
        )}
        {activeTab === 'Individual' && (
          <IndividualReport
            onPress={() => navigation.navigate('ReportDetailsScreen')}
            name={'John Doe'}
            userType={'Employee'}
            totalVisit={5}
            ongoingVisit={2}
            totalTask={8}
            duration={'2h 30m'}
          />
        )}
        {activeTab === 'Individual' && (
          <IndividualReport
            onPress={() => navigation.navigate('ReportDetailsScreen')}
            name={'John Doe'}
            userType={'Employee'}
            totalVisit={5}
            ongoingVisit={2}
            totalTask={8}
            duration={'2h 30m'}
          />
        )}
        {activeTab === 'Individual' && (
          <IndividualReport
            onPress={() => navigation.navigate('ReportDetailsScreen')}
            name={'John Doe'}
            userType={'Employee'}
            totalVisit={5}
            ongoingVisit={2}
            totalTask={8}
            duration={'2h 30m'}
          />
        )}
      </View>
      <DayViewModal
        setIsVisible={setIsTaskViewVisible}
        isVisible={isTaskViewVisible}
        handleTaskViewSelect={handleTaskViewSelect}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  dayStartBtnContainer: {
    ...commonStyles.rowSpaceBetween,
    paddingHorizontal: 20,
    marginVertical: 5,
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
    fontSize: 20,
    lineHeight: 30,
    width: responsiveWidth(60),
  }),
};
