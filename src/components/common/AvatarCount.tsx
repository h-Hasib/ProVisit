import { colors, typography } from '@theme';
import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Userpic } from 'react-native-userpic';
import commonStyles from 'src/theme/commonStyles';

interface IData {
  id: number;
  name: string;
  uri: string | null | undefined;
}
export default function AvatarCount({ size = 21, data }: { size?: number; data?: IData[] }) {
  // REMOVE THIS DUMMY DATA
  data = [
    {
      id: 1,
      name: 'John Doe',
      uri: 'https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg',
    },
    {
      id: 2,
      name: 'Alex',
      uri: 'https://img.freepik.com/premium-photo/handsome-confident-businessman-wearing-suit-standing-isolated-black-wall-arms-folded_171337-93222.jpg',
    },
    {
      id: 3,
      name: 'Smith',
      uri: null,
    },
    {
      id: 4,
      name: 'Smith',
      uri: null,
    },
    {
      id: 4,
      name: 'Smith',
      uri: null,
    },
    {
      id: 5,
      name: 'Smith',
      uri: null,
    },
  ];
  return (
    <View style={commonStyles.rowStart}>
      {data
        .slice(0, 3)
        .map((item, index) =>
          item.uri ? (
            <Userpic
              key={index}
              size={size}
              style={customStyles.image(index)}
              source={{ uri: item.uri }}
              name={item.name}
              colorize={true}
              radius={size}
            />
          ) : (
            <Userpic
              key={index}
              size={size}
              style={customStyles.image(index)}
              name={item.name}
              colorize={true}
              radius={size}
            />
          ),
        )}
      {data.length > 3 && (
        <View style={customStyles.countContainer(size)}>
          <Text style={styles.count}>+{data.length - 3}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  count: {
    fontFamily: typography.manropeSemiBold600,
    fontSize: 10,
    lineHeight: 16,
    color: colors.light.white,
  },
});

const customStyles = {
  image: (index: number) => ({
    borderWidth: 1,
    borderColor: colors.light.white,
    marginLeft: index === 0 ? 0 : -8 * index,
  }),
  countContainer: (size: number): StyleProp<ViewStyle> => ({
    backgroundColor: '#5A71AD',
    height: size,
    width: size,
    borderRadius: size,
    ...customStyles.image(4),
    marginLeft: -24,
    alignItems: 'center',
    justifyContent: 'center',
  }),
};
