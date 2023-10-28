import { colors, typography } from '@theme';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

interface Props {
  handleTabClick: (tabName: string) => void;
  activeTab: string;
}

const TaskTypeTab: React.FC<Props> = ({ handleTabClick, activeTab }: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View style={styles.outerContainer}>
      <View style={customViewStyles.container(isDarkTheme)}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Team' && styles.activeTab,
            styles.commonTabStyle,
            activeTab === 'Team' && styles.selectedTab,
          ]}
          onPress={() => handleTabClick('Team')}>
          <Text style={[styles.header, activeTab === 'Team' && styles.activeText]}>Team</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Individual' && styles.activeTab,
            styles.commonTabStyle,
            activeTab === 'Individual' && styles.selectedTab,
          ]}
          onPress={() => handleTabClick('Individual')}>
          <Text style={[styles.header, activeTab === 'Individual' && styles.activeText]}>
            Individual
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const customViewStyles = {
  container: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 0,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: isDarkTheme ? '#1B2E44' : '#FFFFFF',
    backgroundColor: isDarkTheme ? colors.dark.dark : colors.light.white,
  }),
};
const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderRadius: 13,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  activeTab: {
    borderColor: '#2E64EF',
  },
  header: {
    color: '#6D7A9D',
    textAlign: 'center',
    fontFamily: typography.manropeRegular400,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22.4,
  },
  activeText: {
    color: '#FFFFFF',
  },
  commonTabStyle: {
    display: 'flex',
    padding: 15,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    shadowColor: '#662BF2',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    gap: 10,
  },
  selectedTab: {
    backgroundColor: '#662BF2',
    shadowColor: '#662BF2',
  },
});

export default TaskTypeTab;
