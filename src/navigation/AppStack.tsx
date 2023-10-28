import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from 'src/interfaces/navigation';
import AttendanceReportScreen from 'src/screens/report/AttendanceReportScreen';
import EmployeeReportScreen from 'src/screens/report/EmployeeReportScreen';
import MyReportScreen from 'src/screens/report/MyReportScreen';
import ReportDetailsScreen from 'src/screens/report/ReportDetailsScreen';
import ReportSummaryScreen from 'src/screens/report/ReportSummaryScreen';
import ReportTaskListScreen from 'src/screens/report/ReportTaskListScreen';
import VisitTaskListScreen from 'src/screens/report/VisitTaskListScreen';
import TaskDetailsScreen from 'src/screens/task/TaskDetailsScreen';
import AddYourWorkspaceScreen from 'src/screens/welcome/AddYourWorkspaceScreen';
import ManageYourTeamScreen from 'src/screens/welcome/ManageTeamScreen';

const AppStack = createNativeStackNavigator<RootStackParamList>();

export const AppStackNavigation = () => (
  <AppStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="AddYourWorkspaceScreen">
    <AppStack.Screen name="AddYourWorkspaceScreen" component={AddYourWorkspaceScreen} />
    <AppStack.Screen name="ManageYourTeamScreen" component={ManageYourTeamScreen} />
    <AppStack.Screen name="TaskDetailsScreen" component={TaskDetailsScreen} />
    <AppStack.Screen name="MyReportScreen" component={MyReportScreen} />
    <AppStack.Screen name="ReportTaskListScreen" component={ReportTaskListScreen} />
    <AppStack.Screen name="EmployeeReportScreen" component={EmployeeReportScreen} />
    <AppStack.Screen name="ReportDetailsScreen" component={ReportDetailsScreen} />
    <AppStack.Screen name="VisitTaskListScreen" component={VisitTaskListScreen} />
    <AppStack.Screen name="ReportSummaryScreen" component={ReportSummaryScreen} />
    <AppStack.Screen name="AttendanceReportScreen" component={AttendanceReportScreen} />
  </AppStack.Navigator>
);
