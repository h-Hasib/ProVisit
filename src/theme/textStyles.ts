import { StyleSheet, TextStyle } from 'react-native';
import { typography } from './typography';

const REGULAR: TextStyle = {
  fontFamily: typography.manropeRegular400,
};
const MEDIUM: TextStyle = {
  fontFamily: typography.manropeMedium500,
};
const SEMIBOLD: TextStyle = {
  fontFamily: typography.manropeSemiBold600,
};
const BOLD: TextStyle = {
  fontFamily: typography.manropeBold700,
};

export const textStyles = StyleSheet.create({
  regular: REGULAR,
  bold: BOLD,
  medium: MEDIUM,
  semiBold: SEMIBOLD,

  semiBold30: {
    ...SEMIBOLD,
    fontSize: 30,
    lineHeight: 42,
  },
  bold24: {
    ...BOLD,
    fontSize: 24,
    lineHeight: 33.6,
  },
  semiBold24: {
    ...SEMIBOLD,
    fontSize: 24,
    lineHeight: 42,
  },
  bold20: {
    ...BOLD,
    fontSize: 20,
    lineHeight: 28,
  },
  semiBold20: {
    ...SEMIBOLD,
    fontSize: 20,
    lineHeight: 28,
  },
  medium20: {
    ...MEDIUM,
    fontSize: 20,
    lineHeight: 28,
  },
  regular20: {
    ...REGULAR,
    fontSize: 20,
    lineHeight: 28,
  },
  semiBold18: {
    ...SEMIBOLD,
    fontSize: 18,
    lineHeight: 26,
  },
  medium18: {
    ...MEDIUM,
    fontSize: 18,
    lineHeight: 25.2,
  },
  regular18: {
    ...REGULAR,
    fontSize: 18,
    lineHeight: 26,
  },
  bold16: {
    ...BOLD,
    fontSize: 16,
    lineHeight: 22.4,
  },
  semiBold16: {
    ...SEMIBOLD,
    fontSize: 16,
    lineHeight: 22.4,
  },
  medium16: {
    ...MEDIUM,
    fontSize: 16,
    lineHeight: 22.4,
  },
  regular16: {
    ...REGULAR,
    fontSize: 16,
    lineHeight: 25.6,
  },
  bold14: {
    ...BOLD,
    fontSize: 14,
    lineHeight: 22.4,
  },
  semiBold14: {
    ...SEMIBOLD,
    fontSize: 14,
    lineHeight: 22.4,
  },
  medium14: {
    ...MEDIUM,
    fontSize: 14,
    lineHeight: 22.4,
  },
  regular14: {
    ...REGULAR,
    fontSize: 14,
    lineHeight: 22.4,
  },
  semiBold13: {
    ...SEMIBOLD,
    fontSize: 13,
    lineHeight: 18.2,
  },
  medium13: {
    ...MEDIUM,
    fontSize: 13,
    lineHeight: 19.5,
  },
  regular13: {
    ...REGULAR,
    fontSize: 13,
    lineHeight: 19.5,
  },
  bold12: {
    ...BOLD,
    fontSize: 12,
    lineHeight: 16.8,
  },
  semiBold12: {
    ...SEMIBOLD,
    fontSize: 12,
    lineHeight: 18,
  },
  medium12: {
    ...MEDIUM,
    fontSize: 12,
    lineHeight: 18,
  },
  regular12: {
    ...REGULAR,
    fontSize: 12,
    lineHeight: 18,
  },
  bold10: {
    ...BOLD,
    fontSize: 10,
    lineHeight: 16,
  },
  semiBold10: {
    ...SEMIBOLD,
    fontSize: 10,
    lineHeight: 16,
  },
  medium10: {
    ...MEDIUM,
    fontSize: 10,
    lineHeight: 16,
  },
  regular10: {
    ...REGULAR,
    fontSize: 10,
    lineHeight: 16,
  },
});
