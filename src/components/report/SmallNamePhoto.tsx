import { colors, textStyles } from '@theme';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Userpic } from 'react-native-userpic';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
interface Props {
  onPress?: () => void;
  name: string;
  image?: string;
}
const SmallNamePhoto = ({ name, image }: Props) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View style={{ left: 17 }}>
      <View style={[commonStyles.rowStart]}>
        <View>
          {image ? (
            <Userpic source={{ uri: image }} size={20} colorize={true} />
          ) : (
            <Userpic name={name} size={20} colorize={true} />
          )}
        </View>
        <View style={{ paddingLeft: 8 }}>
          <Text
            numberOfLines={1}
            style={[
              textStyles.bold14,
              { color: isDarkTheme ? colors.dark.white : colors.light.dark, width: 140 },
            ]}>
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(SmallNamePhoto);
