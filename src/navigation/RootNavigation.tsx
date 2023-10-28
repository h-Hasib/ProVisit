import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { RootStackParamList } from 'src/interfaces/navigation';
import TestScreen from 'src/screens/TestScreen';
import AcceptInvitationSuccessScreen from 'src/screens/profile/AcceptInvitationSuccessScreen';
import EditProfileScreen from 'src/screens/profile/EditProfileScreen';
import MyPendingInvitationScreen from 'src/screens/profile/MyPendingInvitationScreen';
import NotificationSetupScreen from 'src/screens/profile/NotificationSetupScreen';
import TaskCategoryScreen from 'src/screens/profile/TaskCategoryScreen';
import TaskTypeScreen from 'src/screens/profile/TaskTypeScreen';
import TeamDetailsScreen from 'src/screens/profile/TeamDetailsScreen';
import TeamSetupScreen from 'src/screens/profile/TeamSetupScreen';
import WorkspaceScreen from 'src/screens/profile/WorkspaceScreen';
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
import { AppStackNavigation } from './AppStack';
import { AuthStackNavigation } from './AuthStack';
import TabNavigation from './TabNavigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TabNavigation">
    <RootStack.Screen name="TestScreen" component={TestScreen} />
    <RootStack.Screen name="AuthStack" component={AuthStackNavigation} />
    <RootStack.Screen name="TabNavigation" component={TabNavigation} />
    <RootStack.Screen name="AppStack" component={AppStackNavigation} />
    <RootStack.Screen name="MyReportScreen" component={MyReportScreen} />
    <RootStack.Screen name="ReportTaskListScreen" component={ReportTaskListScreen} />
    <RootStack.Screen name="EmployeeReportScreen" component={EmployeeReportScreen} />
    <RootStack.Screen name="AddYourWorkspaceScreen" component={AddYourWorkspaceScreen} />
    <RootStack.Screen name="ManageYourTeamScreen" component={ManageYourTeamScreen} />
    <RootStack.Screen name="TaskDetailsScreen" component={TaskDetailsScreen} />
    <RootStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    <RootStack.Screen name="ReportDetailsScreen" component={ReportDetailsScreen} />
    <RootStack.Screen name="VisitTaskListScreen" component={VisitTaskListScreen} />
    <RootStack.Screen name="WorkspaceScreen" component={WorkspaceScreen} />
    <RootStack.Screen name="ReportSummaryScreen" component={ReportSummaryScreen} />
    <RootStack.Screen name="AttendanceReportScreen" component={AttendanceReportScreen} />
    <RootStack.Screen name="TaskTypeScreen" component={TaskTypeScreen} />
    <RootStack.Screen name="TaskCategoryScreen" component={TaskCategoryScreen} />
    <RootStack.Screen name="MyPendingInvitationScreen" component={MyPendingInvitationScreen} />
    <RootStack.Screen name="NotificationSetupScreen" component={NotificationSetupScreen} />
    <RootStack.Screen name="TeamSetupScreen" component={TeamSetupScreen} />
    <RootStack.Screen name="TeamDetailsScreen" component={TeamDetailsScreen} />
    <RootStack.Screen
      name="AcceptInvitationSuccessScreen"
      component={AcceptInvitationSuccessScreen}
    />
  </RootStack.Navigator>
);
