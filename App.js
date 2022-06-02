import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from './src/screens/Navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
};

export default App;
