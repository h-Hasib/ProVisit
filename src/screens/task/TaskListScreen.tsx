import React from 'react';
import * as Animatable from 'react-native-animatable';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import SortableTaskList from 'src/components/task-list/SortableTaskList';
import TodaysTaskHorizontalList from 'src/components/task-list/TodaysTaskHorizontalList';

export default function TaskListScreen() {
  // const { isDarkTheme } = useAppSelector(state => state.app);

  // if (1 === 1) return <Animatable.View />;
  // else
  return (
    <ScreenWrapper>
      <TodaysTaskHorizontalList />
      <Animatable.View delay={2000} style={{ paddingHorizontal: 20, marginTop: 30 }}>
        <SortableTaskList data={Array(2).fill(1)} />
      </Animatable.View>
    </ScreenWrapper>
  );
}
