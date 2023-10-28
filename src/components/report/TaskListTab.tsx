import { typography } from '@theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TaskListTabProps {
  tabs: string[];
  activeTab: number;
  onChangeTab: (index: number) => void;
}

const TaskListTab: React.FC<TaskListTabProps> = ({ tabs, activeTab, onChangeTab }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tabItem, activeTab === index && styles.activeTabItem]}
          onPress={() => onChangeTab(index)}>
          <Text
            style={[
              styles.tabText,
              {
                color: activeTab === index ? '#FFFFFF' : '#6D7A9D',
              },
            ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  tabItem: {
    flex: 2, // Adjust the flex value to make the tab boxes wider
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DFE3EC',
    backgroundColor: 'transparent',
    marginHorizontal: 5,
  },
  activeTabItem: {
    backgroundColor: '#662BF2',
  },
  tabText: {
    textAlign: 'center',
    fontFamily: typography.manropeRegular400,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 32,
    letterSpacing: 0.12,
    paddingVertical: 5, // Vertical padding
    paddingHorizontal: 5, // Horizontal padding for left and right side distance
  },
});

export default TaskListTab;
