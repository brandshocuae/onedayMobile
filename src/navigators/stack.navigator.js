import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Auth
import Splash from '../screens/Auth/Splash';

//main screen

//bottom tab
import {BottomNavigator} from './bottom.navigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />

      {/* BOTTOM TAB */}
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
