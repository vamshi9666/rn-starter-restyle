import { BoxProps, createBox } from '@shopify/restyle';
import React, { PropsWithChildren } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Theme } from '../../theme/theme';

type AppHeaderProps = {
  onMenuClicked: () => void;
} & PropsWithChildren<BoxProps<Theme>>;

const Box = createBox<Theme>();

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  return (
    <Box height={40}>
      <IonIcon name="menu" />
    </Box>
  );
};

export default AppHeader;
