import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, typography } from '@theme';
import { ChartBar, CheckSquareOffset, House, Plus, UserCircle } from 'phosphor-react-native';
import React, { useState } from 'react';
import {
  Dimensions,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Add from 'src/assets/svg/bottomTab/Add';
import ActionModal from 'src/components/bottom-sheet/ActionModal';
import i18n from 'src/languages/i18n';
import HomeScreen from 'src/screens/dashboard/HomeScreen';
import ProfileScreen from 'src/screens/profile/ProfileScreen';
import ReportScreen from 'src/screens/report/ReportScreen';
import TaskListScreen from 'src/screens/task/TaskListScreen';
import { useAppSelector } from 'src/store/hooks';

const { width } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

export default function BottomTabBar() {
  interface Iicon {
    focused?: boolean;
    color?: string;
    size?: number;
  }
  const BottomTabList = [
    {
      name: 'HomeScreen',
      component: HomeScreen,
      tabBarLabel: i18n.t('Home'),
      tabBarIcon: ({ color }: Iicon) => <House size={20} color={color} weight="duotone" />,
    },
    {
      name: 'TaskScreen',
      component: TaskListScreen,
      tabBarLabel: i18n.t('Task List'),
      tabBarIcon: ({ color }: Iicon) => (
        <CheckSquareOffset size={20} color={color} weight="duotone" />
      ),
    },
    {
      name: 'Add',
      component: HomeScreen,
      tabBarLabel: i18n.t('Add'),
      tabBarIcon: ({ color }: Iicon) => <Plus size={24} color={color} weight="bold" />,
    },
    {
      name: 'ReportScreen',
      component: ReportScreen,
      tabBarLabel: i18n.t('Reports'),
      tabBarIcon: ({ color }: Iicon) => <ChartBar size={20} color={color} weight="duotone" />,
    },
    {
      name: 'ProfileScreen',
      component: ProfileScreen,
      tabBarLabel: i18n.t('Profile'),
      tabBarIcon: ({ color }: Iicon) => <UserCircle size={20} color={color} weight="duotone" />,
    },
  ];
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      {BottomTabList.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{ tabBarLabel: item.tabBarLabel, tabBarIcon: item.tabBarIcon }}
        />
      ))}
    </Tab.Navigator>
  );
}

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const { isDarkTheme } = useAppSelector(state => state.app);

  return (
    <View style={customStyles.container(isDarkTheme)}>
      <View style={customStyles.innerContainer(isDarkTheme)}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate('TabNavigation', { screen: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (index === 2) {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setModalVisible(true)}
                style={styles.roundedBtnContainer}>
                {<Add borderColor={isDarkTheme ? colors.dark.background : colors.light.grey5} />}
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                key={index}
                // activeOpacity={0.6}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  alignItems: 'center',
                  marginRight: index === 1 ? 21 : 0,
                  marginLeft: index === 3 ? 21 : 0,
                }}>
                {options.tabBarIcon &&
                  options.tabBarIcon({
                    color: getTabColor(isDarkTheme, isFocused),
                    focused: true,
                    size: 20,
                  })}
                <Text style={[styles.tabText, { color: getTabColor(isDarkTheme, isFocused) }]}>
                  {label?.toString()}
                </Text>
              </TouchableOpacity>
            );
          }
        })}
        {setModalVisible && (
          <ActionModal setModalVisible={setModalVisible} modalVisible={modalVisible} />
        )}
      </View>
    </View>
  );
}
const getTabColor = (isDarkTheme: boolean, isFocused: boolean) =>
  isFocused
    ? isDarkTheme
      ? colors.light.white
      : colors.light.earthBlue
    : isDarkTheme
    ? colors.dark.grey1
    : colors.light.grey2;

const styles = StyleSheet.create({
  roundedBtnContainer: {
    position: 'absolute',
    top: -42,
    left: width / 2 - (14 + 60 / 2),
  },
  tabText: {
    fontFamily: typography.manropeSemiBold600,
    fontSize: 12,
    marginTop: 2,
  },
});

const customStyles = {
  container: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    backgroundColor: isDarkTheme ? colors.dark.background : colors.light.background,
  }),
  innerContainer: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    padding: 18,
    paddingBottom: Platform.OS === 'ios' ? 34 : 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: isDarkTheme ? colors.dark.grey5 : colors.light.white,
    shadowColor: '#2E3234',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }),
};
