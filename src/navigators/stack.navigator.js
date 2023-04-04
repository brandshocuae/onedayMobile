import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Auth
import Splash from '../screens/Auth/Splash';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';

//main screen

//bottom tab
import {BottomNavigator} from './bottom.navigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />

      {/* BOTTOM TAB */}
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
