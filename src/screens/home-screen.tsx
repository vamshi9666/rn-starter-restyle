import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Button, View } from 'react-native';
import AppHeader from '../components/shared/app-header';
import { ScreensList } from '../navigation/drawer.navigator';

type Props = DrawerScreenProps<ScreensList, 'HOME_SCREEN'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AppHeader onMenuClicked={() => ({})} />
      <Button onPress={() => navigation.openDrawer()} title="Go to Profile" />
    </View>
  );
};

export default HomeScreen;
