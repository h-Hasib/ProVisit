import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, textStyles, typography } from '@theme';
import { CaretDown, CheckCircle, Coffee, PlayCircle, SquaresFour } from 'phosphor-react-native';
import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Header from 'src/components/common/Header';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import DayViewModal from 'src/components/report/DayViewModal';
import SmallNamePhoto from 'src/components/report/SmallNamePhoto';
import { RootStackParamList } from 'src/interfaces/navigation';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';

export default function ReportDetailsScreen() {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isTaskViewVisible, setIsTaskViewVisible] = useState(false);
  const [selectedTaskViewItem, setSelectedTaskViewItem] = useState<string | null>('Last 7 Days');
  const [activeTab, setActiveTab] = useState('Team');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleTaskViewSelect = (item: string) => {
    setSelectedTaskViewItem(item);
    setIsTaskViewVisible(false);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <ScreenWrapper>
      <View style={{ paddingLeft: 20 }}>
        <Header title="Employee Reports" />
      </View>
      <View style={styles.dayStartBtnContainer}>
        <Text style={customTextStyles.startLeftText(isDarkTheme)}>Report Details</Text>
        <TouchableOpacity
          onPress={() => setIsTaskViewVisible(!isTaskViewVisible)}
          style={styles.titleBtn}>
          <Text style={styles.titleBtnTxt}>{selectedTaskViewItem} </Text>
          <CaretDown size={10} weight="bold" color={colors.dark.earthBlue} />
        </TouchableOpacity>
      </View>
      <View>
        <SmallNamePhoto name={'Ronald Richards'} />
      </View>
      <View style={{ top: 50, left: 20 }}>
        <Text style={[customTextStyles.startLeftText(isDarkTheme)]}>Task Status</Text>
      </View>
      <View style={{ top: 70 }}>
        <View style={styles.taskContainer}>
          <View style={customViewStyles.taskComplete(isDarkTheme)}>
            <TouchableOpacity onPress={() => navigation.navigate('ReportTaskListScreen')}>
              <View style={commonStyles.rowSpaceBetween}>
                <View>
                  <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>
                    Completed Task
                  </Text>
                  <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>1</Text>
                </View>
                <View style={styles.checkCircle}>
                  <CheckCircle size={61} weight="bold" color="#FFFFFF" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: responsiveHeight(24), justifyContent: 'space-between' }}>
            <View style={customViewStyles.taskPending(isDarkTheme)}>
              <TouchableOpacity onPress={() => navigation.navigate('ReportTaskListScreen')}>
                <View style={commonStyles.rowSpaceBetween}>
                  <View>
                    <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>
                      On Going Task
                    </Text>
                    <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>3</Text>
                  </View>
                  <View style={styles.playButton}>
                    <PlayCircle size={61} weight="bold" color="#FFFFFF" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={customViewStyles.taskOngoing(isDarkTheme)}>
              <TouchableOpacity onPress={() => navigation.navigate('ReportTaskListScreen')}>
                <View style={commonStyles.rowSpaceBetween}>
                  <View>
                    <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>
                      Cancelled Task
                    </Text>
                    <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>1</Text>
                  </View>
                  <View style={styles.checkCircle}>
                    <CheckCircle size={61} weight="bold" color="#FFFFFF" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={customViewStyles.pending2(isDarkTheme)}>
              <TouchableOpacity onPress={() => navigation.navigate('ReportTaskListScreen')}>
                <View style={commonStyles.rowSpaceBetween}>
                  <View>
                    <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>
                      Pending Task
                    </Text>
                    <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>1</Text>
                  </View>
                  <View style={styles.coffee}>
                    <Coffee size={61} weight="bold" color="#FFFFFF" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={customViewStyles.cancel(isDarkTheme)}>
              <TouchableOpacity onPress={() => navigation.navigate('ReportTaskListScreen')}>
                <View style={commonStyles.rowSpaceBetween}>
                  <View>
                    <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>
                      Total Task
                    </Text>
                    <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>1</Text>
                  </View>
                  <View style={styles.square}>
                    <SquaresFour size={61} weight="bold" color="#FFFFFF" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ top: 190, left: 20 }}>
        <Text style={[customTextStyles.startLeftText(isDarkTheme)]}>Visit Status</Text>
      </View>
      <View style={{ top: 210 }}>
        <View style={styles.taskContainer}>
          <View style={customViewStyles.taskComplete(isDarkTheme)}>
            <TouchableOpacity onPress={() => navigation.navigate('VisitTaskListScreen')}>
              <View style={commonStyles.rowSpaceBetween}>
                <View>
                  <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>
                    Completed Visit
                  </Text>
                  <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>1</Text>
                </View>
                <View style={styles.checkCircle}>
                  <CheckCircle size={61} weight="bold" color="#FFFFFF" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: responsiveHeight(24), justifyContent: 'space-between' }}>
            <View style={customViewStyles.taskPending(isDarkTheme)}>
              <TouchableOpacity onPress={() => navigation.navigate('VisitTaskListScreen')}>
                <View style={commonStyles.rowSpaceBetween}>
                  <View>
                    <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>
                      On Going Visit
                    </Text>
                    <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>3</Text>
                  </View>
                  <View style={styles.playButton}>
                    <PlayCircle size={61} weight="bold" color="#FFFFFF" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={customViewStyles.totalVisit(isDarkTheme)}>
              <TouchableOpacity onPress={() => navigation.navigate('VisitTaskListScreen')}>
                <View style={commonStyles.rowSpaceBetween}>
                  <View>
                    <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>
                      Total Visit
                    </Text>
                    <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>1</Text>
                  </View>
                  <View style={styles.square}>
                    <SquaresFour size={61} weight="bold" color="#FFFFFF" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={customViewStyles.pending2(isDarkTheme)}>
              <TouchableOpacity onPress={() => navigation.navigate('VisitTaskListScreen')}>
                <View style={commonStyles.rowSpaceBetween}>
                  <View>
                    <Text style={customTextStyles.penAndOngoingTaskText(isDarkTheme)}>
                      Paused Visit
                    </Text>
                    <Text style={customTextStyles.penAndOngoingTaskCount(isDarkTheme)}>1</Text>
                  </View>
                  <View style={styles.coffee}>
                    <Coffee size={61} weight="bold" color="#FFFFFF" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <DayViewModal
        setIsVisible={setIsTaskViewVisible}
        isVisible={isTaskViewVisible}
        handleTaskViewSelect={handleTaskViewSelect}
      />
    </ScreenWrapper>
  );
}

const customViewStyles = {
  taskComplete: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    padding: 20,
    backgroundColor: isDarkTheme ? '#0DB050' : '#0DB050',
    borderRadius: 12,
    height: responsiveHeight(11.3),
    width: responsiveWidth(43.2),
    bottom: 52,
  }),
  taskPending: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    padding: 20,
    backgroundColor: isDarkTheme ? '#17A6E3' : '#2E64EF',
    borderRadius: 12,
    height: responsiveHeight(11.3),
    width: responsiveWidth(43.2),
    paddingBottom: 5,
  }),
  taskOngoing: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    padding: 20,
    backgroundColor: isDarkTheme ? '#F45757' : '#F45757',
    borderRadius: 12,
    height: responsiveHeight(11.3),
    width: responsiveWidth(43.2),
    top: 10,
  }),
  totalVisit: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    padding: 20,
    backgroundColor: isDarkTheme ? '#6D7A9D' : '#6D7A9D',
    borderRadius: 12,
    height: responsiveHeight(11.3),
    width: responsiveWidth(43.2),
    top: 10,
  }),
  pending2: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    padding: 20,
    backgroundColor: isDarkTheme ? '#E9AF59' : '#E9AF59',
    borderRadius: 12,
    height: responsiveHeight(11.3),
    width: responsiveWidth(43.2),
    right: 190,
    bottom: 85,
  }),
  cancel: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    padding: 20,
    backgroundColor: isDarkTheme ? '#6D7A9D' : '#6D7A9D',
    borderRadius: 12,
    height: responsiveHeight(11.3),
    width: responsiveWidth(43.2),
    right: 190,
    bottom: 75,
  }),
};

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
    paddingHorizontal: 17,
  },
  taskContent: {
    padding: 20,
    justifyContent: 'flex-end',
  },
  checkCircle: {
    position: 'absolute',
    right: -20.445,
    bottom: -8.445,
    width: 61,
    height: 61,
    transform: [{ rotate: '-13.36deg' }],
    opacity: 0.15,
    top: 20,
    color: '#FFFFFF',
  },
  playButton: {
    width: 61,
    height: 61,
    transform: [{ rotate: '-13.36deg' }],
    position: 'absolute',
    right: -20.445,
    bottom: -8.445,
    opacity: 0.1,
    top: 20,
    color: '#FFFFFF',
  },
  titleCont: {
    ...commonStyles.rowSpaceBetween,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  coffee: {
    width: 61,
    height: 61,
    transform: [{ rotate: '-13.36deg' }],
    position: 'absolute',
    right: -20.445,
    bottom: -8.445,
    opacity: 0.1,
    top: 20,
    color: '#FFFFFF',
  },
  square: {
    width: 61,
    height: 61,
    transform: [{ rotate: '-13.36deg' }],
    position: 'absolute',
    right: -20.445,
    bottom: -8.445,
    opacity: 0.1,
    top: 15,
    color: '#FFFFFF',
  },
});

const customTextStyles = {
  startLeftText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    fontFamily: typography.manropeSemiBold600,
    fontSize: 16,
    lineHeight: 22.4,
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
    color: isDarkTheme ? colors.dark.white : colors.light.white,
    fontFamily: typography.manropeBold700,
    fontSize: 24,
    lineHeight: 30,
  }),
  penAndOngoingTaskText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.white,
    ...textStyles.medium12,
  }),
};
