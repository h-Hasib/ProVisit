import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '@theme';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from 'src/interfaces/navigation';
import { textStyles } from 'src/theme/textStyles';

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(logoOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(logoOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      navigation.navigate('GetStartedScreen');
    });
  }, [navigation, logoOpacity]);

  const interpolatedColorBlue = logoOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ffff', '#3448FD'],
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={'light'} animated={true} translucent={true} />
      <LinearGradient
        style={styles.gradient}
        colors={colors.light.linear1}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.8577]}>
        <View style={styles.container}>
          <Animated.Image
            source={require('src/assets/icon/icon.png')}
            style={[styles.logoImage, { tintColor: interpolatedColorBlue }]}
          />
          <Text style={styles.logoText}>{`P R O V I S I T`}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    ...textStyles.semiBold24,
    color: colors.light.white,
    textAlign: 'center',
  },
  logoImage: {
    width: 164,
    height: 120,
  },
});
