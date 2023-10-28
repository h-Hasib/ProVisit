import { colors, textStyles, typography } from '@theme';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';

interface ProgressBarProps {
  progress: number; // Progress value in percentage (0-100)
  progressBarStyle?: StyleProp<ViewStyle>;
  progressStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  progressBarStyle,
  progressStyle,
  textStyle,
}) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  return (
    <View style={[styles.container]}>
      <View style={styles.progTest}>
        <Text style={[customTextStyles.contentText(isDarkTheme), textStyle]}>Visit Done</Text>
        <Text
          style={[
            customTextStyles.contentText(isDarkTheme),
            textStyle,
            { fontFamily: typography.manropeBold700 },
          ]}>{`${progress}%`}</Text>
      </View>
      <View style={[customViewStyles.progressBar(isDarkTheme), progressBarStyle]}>
        <View
          style={[
            styles.progress,
            progressStyle,
            {
              width: `${progress}%`,
            },
          ]}
        />
      </View>
    </View>
  );
};

const customViewStyles = {
  progressBar: (isDarkTheme: boolean): StyleProp<ViewStyle> => ({
    height: 5,
    width: '100%',
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: isDarkTheme ? colors.dark.grey4 : ' rgba(102, 43, 242, 0.1)',
  }),
};
const customTextStyles = {
  contentText: (isDarkTheme: boolean): StyleProp<TextStyle> => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    ...textStyles.regular12,
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progTest: {
    ...commonStyles.rowSpaceBetween,
    paddingBottom: 10,
    width: '100%',
  },
  progress: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#8BED4F',
  },
});

export default ProgressBar;
