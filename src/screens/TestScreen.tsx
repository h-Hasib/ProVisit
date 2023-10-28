import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import AppButton from 'src/components/buttons/AppButton';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import { RootStackParamList } from 'src/interfaces/navigation';

const TestScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScreenWrapper>
      <View style={{ marginTop: 40 }}>
        <AppButton
          mode={'contained'}
          onPress={() => navigation.navigate('AppStack')}
          // rightIcon={<ArrowRight size={22} color={'blue'} />}
          // leftIcon={<ArrowLeft size={22} color={'blue'} />}
          isLoading={true}
          isDisable={true}
          styleProp={{ marginVertical: 90 }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default TestScreen;
