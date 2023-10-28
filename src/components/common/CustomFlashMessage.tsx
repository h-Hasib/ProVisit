import { colors, typography } from '@theme';
import { CheckCircle, Info, Warning, XCircle } from 'phosphor-react-native';
import React from 'react';
import { Platform, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FlashMessage, { MessageComponentProps, Position } from 'react-native-flash-message';

export default function CustomFlashMessage() {
  return (
    <FlashMessage
      MessageComponent={(props: MessageComponentProps) => {
        const message = props.message.message;
        const type = props.message.type;
        const position = props.position;

        return (
          <Animatable.View animation="bounceInUp" style={customStyles.container(position, type)}>
            {takeIcon(type)}
            <Text numberOfLines={1} style={styles.message}>
              {message}
            </Text>
          </Animatable.View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  message: {
    fontFamily: typography.manropeSemiBold600,
    fontSize: 16,
    lineHeight: 22.4,
    color: colors.light.white,
    marginLeft: 8,
  },
});

const customStyles = {
  container: (position: Position | undefined, type: string | undefined): StyleProp<ViewStyle> => ({
    marginBottom: position === 'bottom' ? (Platform.OS === 'ios' ? 134 : 114) : 0,
    marginTop: position === 'top' ? (Platform.OS === 'ios' ? 134 : 114) : 0,
    width: 300,
    height: 46,
    borderRadius: 6,
    padding: 12,
    alignSelf: 'center',
    backgroundColor: takeBGColor(type),
    flexDirection: 'row',
    alignItems: 'center',
  }),
};

const takeBGColor = (type: string | undefined) => {
  if (type === 'success') return colors.light.green;
  if (type === 'danger') return colors.light.red;
  if (type === 'warning') return colors.light.yellow;
  if (type === 'info') return colors.light.grey2;
};

const takeIcon = (type: string | undefined) => {
  if (type === 'success') return <CheckCircle size={20} color={colors.light.white} />;
  if (type === 'danger') return <XCircle size={20} color={colors.light.white} />;
  if (type === 'warning') return <Warning size={20} color={colors.light.white} />;
  if (type === 'info') return <Info size={20} color={colors.light.white} />;
};
