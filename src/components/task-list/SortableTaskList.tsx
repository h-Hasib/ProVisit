import { colors } from '@theme';
import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useAppSelector } from 'src/store/hooks';
import TaskCard from './TaskCard';

const { height } = Dimensions.get('window');

export default function SortableTaskList({ data }: { data: number[] }) {
  const { isDarkTheme } = useAppSelector(state => state.app);

  // if (1 == 1) return <View />;
  // else
  return (
    <>
      <Animatable.View
        animation="fadeIn"
        style={{
          backgroundColor: isDarkTheme ? colors.dark.grey0_5 + '50' : colors.light.grey4,
          height: 40,
          borderRadius: 6,
        }}
      />

      <FlatList
        data={data}
        // ListEmptyComponent
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        ListHeaderComponent={() => <View style={{ height: 24 }} />}
        ListFooterComponent={() => <View style={{ height: 80 }} />}
        keyExtractor={(item, index) => index + '_' + item}
        renderItem={({ index }) => (
          <Animatable.View
            animation={{
              from: { opacity: 0, marginBottom: height },
              to: { opacity: 1, marginBottom: 0 },
            }}>
            <TaskCard status={index % 2 === 0 ? 2 : 3} />
          </Animatable.View>
        )}
      />
    </>
  );
}
