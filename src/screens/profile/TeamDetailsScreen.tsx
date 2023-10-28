import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import { RootStackParamList } from 'src/interfaces/navigation';

type Props = {
  route: RouteProp<RootStackParamList, 'TeamDetailsScreen'>;
};

const TeamDetailsScreen = ({ route }: Props) => {
  const teamName = useState<string>(route.params.item.name);
  const memberCount = useState<string>(route.params.item.memberCount);
  return (
    <ScreenWrapper>
      {/* <TeamDetailsCard name={teamName} memberCount={memberCount} /> */}
      <Text>{`${teamName}`}</Text>
      <Text>{`${memberCount}`}</Text>
    </ScreenWrapper>
  );
};

export default TeamDetailsScreen;

const styles = StyleSheet.create({});
