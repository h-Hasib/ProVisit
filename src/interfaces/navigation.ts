export type RootStackParamList = {
  AuthStack: undefined;
  AppStack: undefined;
  TabNavigation: undefined;
  TestScreen: undefined;

  SplashScreen: undefined;
  GetStartedScreen: undefined;
  SetupEmailScreen: undefined;
  SetupEmailOtpScreen: { email: string };
  EmailVerifiedScreen: { email: string };
  CreateAccountScreen: { email: string };
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  ResetPasswordOtpScreen: { email: string };
  ResetPasswordScreen: { email: string };
  ResetPasswordSuccessScreen: undefined;

  ActionButton: undefined;
  HomeScreen: undefined;
  TaskListScreen: undefined;
  ReportScreen: undefined;
  ProfileScreen: undefined;

  AddYourWorkspaceScreen: undefined;
  ManageYourTeamScreen: undefined;
  TaskDetailsScreen: undefined;
  MyReportScreen: undefined;
  ReportTaskListScreen: undefined;
  EmployeeReportScreen: undefined;
  EditProfileScreen: undefined;
  ReportDetailsScreen: undefined;
  VisitTaskListScreen: undefined;
  WorkspaceScreen: undefined;
  ReportSummaryScreen: undefined;
  AttendanceReportScreen: undefined;
  TaskTypeScreen: undefined;
  TaskCategoryScreen: undefined;
  MyPendingInvitationScreen: undefined;
  AcceptInvitationSuccessScreen: undefined;
  NotificationSetupScreen: undefined;
  TeamSetupScreen: undefined;
  TeamDetailsScreen: { item: { name: string; memberCount: string } };
};
