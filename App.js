import React from 'react';
import {View} from 'react-native';
import Mobile from './components/Mobile';
import LoginScreen from './screens/LoginScreen';
import TestMyPrep from './screens/TestMyPrep';

const App = () => {
  return (
    <View>
      {/* <LoginScreen /> */}
      <TestMyPrep />
    </View>
  );
};

export default App;
