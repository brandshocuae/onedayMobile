import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Auth
import Splash from '../screens/Auth/Splash';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';

//main screen
import ProductDetail from '../screens/App/ProductDetail';
import Address from '../screens/App/Address';
import Checkout from '../screens/App/Checkout';
import MyWallet from '../screens/App/MyWallet';
import Shop from '../screens/App/Shop';
import Order from '../screens/App/Order';
import OrderDetail from '../screens/App/OrderDetail';

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
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="MyWallet" component={MyWallet} />
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />

      {/* BOTTOM TAB */}
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
