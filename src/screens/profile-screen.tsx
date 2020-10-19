import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Button, View } from 'react-native';
import { ScreensList } from '../navigation/drawer.navigator';

type Props = DrawerScreenProps<ScreensList, 'PROFILE_SCREEN'>;

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.openDrawer()} title="Go to home" />
    </View>
  );
};

export default ProfileScreen;
