import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { StatusBar } from 'react-native';
import DrawerNavigator from './src/navigation/drawer.navigator';
import theme from './src/theme/theme';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </>
    </ThemeProvider>
  );
};

export default App;
