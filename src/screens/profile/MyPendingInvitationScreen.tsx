import { textStyles } from '@theme';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from 'src/components/common/Header';
import ScreenWrapper from 'src/components/containers/ScreenWrapper';
import PendingInvitationCard from 'src/components/myPendingInvitation/PendingInvitationCard';
import { flashMessage } from 'src/services/flash-message.service';

const MyPendingInvitationScreen = () => {
  const [updatedData, setUpdatedData] = useState(data);
  const rejectedInvitation = (selectedItem: dataTypes) => {
    //REMOVE
    const newData = updatedData.filter(item => item.id !== selectedItem?.id);
    setUpdatedData(newData);
    flashMessage.success({ message: 'Invitation rejected' });
  };
  const acceptedInvitation = (selectedItem: dataTypes) => {
    //Do whatever needs to be done with accepted Invitation
    const newData = updatedData.filter(item => item.id !== selectedItem?.id);
    setUpdatedData(newData);
  };
  return (
    <ScreenWrapper scrollable={false}>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Header title={'My Pending Invitation'} />
        </View>

        <FlatList
          data={updatedData}
          renderItem={({ item }) => (
            <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
              <PendingInvitationCard
                item={item}
                onReject={rejectedInvitation}
                onAccept={acceptedInvitation}
              />
            </View>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={true}
          ListFooterComponent={<View style={{ marginVertical: 40 }}></View>}
          ListEmptyComponent={
            <View style={styles.listEmptyScreen}>
              <Text style={[textStyles.bold20, { color: 'tomato' }]}>No Data Found</Text>
            </View>
          }
        />
      </View>
    </ScreenWrapper>
  );
};

export default MyPendingInvitationScreen;

const styles = StyleSheet.create({
  listEmptyScreen: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
interface dataTypes {
  id: string;
  workspaceName: string;
  role: string;
}
const data: dataTypes[] = [
  {
    id: '1',
    workspaceName: 'Development',
    role: 'Owner',
  },
  {
    id: '2',
    workspaceName: 'Marketing Heroes',
    role: 'Admin',
  },
  {
    id: '3',
    workspaceName: 'Sales Force',
    role: 'User',
  },
  {
    id: '4',
    workspaceName: 'Abcd Efgh Ijkl Mnop Qrst Uvwx yz Abcd ',
    role: 'Abcdefghij',
  },
];
