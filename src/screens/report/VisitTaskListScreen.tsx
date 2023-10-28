// ReportTaskListScreen.tsx

import React, { useState } from 'react';
import { View } from 'react-native';
import Header from 'src/components/common/Header';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import MyVisit from 'src/components/report/MyVisit';
import TaskListTab from 'src/components/report/TaskListTab';

export default function VisitTaskListScreen() {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab

  const tabs = ['All Tasks', 'Completed', 'In Progress', 'Pending'];

  const tasks = [
    {
      title: 'Visit at Chinatown, USA',
      date: 'Saturday, 9th Dec',
      reason: 'For Retail Shop Visit',
      status: 'COMPLETED',
    },
    {
      title: 'Visit at Chinatown, USA',
      date: 'Saturday, 9th Dec',
      reason: 'For Retail Shop Visit',
      status: 'TO-DO',
    },
    {
      title: 'Visit at Chinatown, USA',
      date: 'Saturday, 9th Dec',
      reason: 'For Retail Shop Visit',
      status: 'IN PROGRESS',
    },
    {
      title: 'Visit at Chinatown, USA',
      date: 'Saturday, 9th Dec',
      reason: 'For Retail Shop Visit',
      status: 'COMPLETED',
    },
  ];

  // Filter tasks based on the active tab
  const filteredTasks = () => {
    switch (activeTab) {
      case 0: // All Tasks
        return tasks;
      case 1: // Completed
        return tasks.filter(task => task.status === 'COMPLETED');
      case 2: // In Progress
        return tasks.filter(task => task.status === 'IN PROGRESS');
      case 3: // Pending
        return tasks.filter(task => task.status === 'TO-DO');
      default:
        return [];
    }
  };

  return (
    <ScreenWrapper>
      <View style={{ paddingLeft: 20 }}>
        <Header title="Visit Lists" />
      </View>
      <TaskListTab tabs={tabs} activeTab={activeTab} onChangeTab={setActiveTab} />
      <View>
        {filteredTasks().map((task, index) => (
          <MyVisit
            key={index}
            title={task.title}
            date={task.date}
            reason={task.reason}
            status={task.status}
          />
        ))}
      </View>
    </ScreenWrapper>
  );
}
