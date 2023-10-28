import { Alert, BackHandler } from 'react-native';
export const closeApp = () => {
  Alert.alert(
    'Exit ProVisit',
    'Are you sure you want to close the application ?',
    [
      { text: 'Yes', onPress: () => BackHandler.exitApp() },
      { text: 'No', onPress: () => {} },
    ],
    { cancelable: true },
  );
};
