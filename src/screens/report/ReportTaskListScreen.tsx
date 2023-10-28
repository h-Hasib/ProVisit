// ReportTaskListScreen.tsx

import React, { useState } from 'react';
import { View } from 'react-native';
import Header from 'src/components/common/Header';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import MyTask from 'src/components/report/MyTask';
import TaskListTab from 'src/components/report/TaskListTab';

export default function ReportTaskListScreen() {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab

  const tabs = ['All Tasks', 'Completed', 'In Progress', 'Pending'];

  const tasks = [
    {
      title: 'Retail Shop Visit',
      description:
        'The Project Manager should use appropriate verification techniques to manage ...',
      location: '25/B, Chinatown, USA',
      status: 'COMPLETED',
    },
    {
      title: 'Office Meeting',
      description: 'Discuss project updates and strategy with the team members.',
      location: '123 Main St, Cityville, USA',
      status: 'TO-DO',
    },
    {
      title: 'Design Review',
      description: 'Review and finalize the design for the new product.',
      location: '50 Park Ave, Metropolis, USA',
      status: 'IN PROGRESS',
    },
    {
      title: 'Client Presentation',
      description: 'Prepare and deliver a presentation to the client.',
      location: '789 Business Rd, Townsville, USA',
      status: 'TO-DO',
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
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        <Header title="Task Lists" />
      </View>
      <TaskListTab tabs={tabs} activeTab={activeTab} onChangeTab={setActiveTab} />
      <View>
        {filteredTasks().map((task, index) => (
          <MyTask
            key={index}
            title={task.title}
            description={task.description}
            location={task.location}
            status={task.status}
          />
        ))}
      </View>
    </ScreenWrapper>
  );
}
