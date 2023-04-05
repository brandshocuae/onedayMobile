import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, View, Dimensions, Platform, Text} from 'react-native';
import {Images} from '../assets/images';

//Screens
import Home from '../screens/App/Home';
import Cart from '../screens/App/Cart';
import Profile from '../screens/App/Profile';
import Help from '../screens/App/Help';
import ProfileInfo from '../screens/App/ProfileInfo';
import ChangePassword from '../screens/App/ChangePassword';
import PersonalDetail from '../screens/App/PersonalDetail';
import FAQ from '../screens/App/FAQ';
import TermsCondition from '../screens/App/TermsCondition';
import About from '../screens/App/About';
import PrivacyPolicy from '../screens/App/PrivacyPolicy';
import AboutReturn from '../screens/App/AboutReturn';
import ReportBug from '../screens/App/ReportBug';

// dimenstion
const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabImage =
  name =>
  ({focused}) => {
    return (
      <View
        style={{
          width: width * 0.16,
          height: height * 0.06,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={Images[(!focused ? 'Un' : '') + name]}
          style={{width: width * 0.06, height: width * 0.06}}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: width * 0.035,
            marginTop: height * 0.005,
            color: !focused ? 'black' : '#0070b5',
          }}>
          {name}
        </Text>
      </View>
    );
  };

export function HomeTab() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export function CartTab() {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
export function ProfileTab() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="PersonalDetail" component={PersonalDetail} />
    </Stack.Navigator>
  );
}

export function HelpTab() {
  return (
    <Stack.Navigator
      initialRouteName="Help"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="TermsCondition" component={TermsCondition} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="AboutReturn" component={AboutReturn} />
      <Stack.Screen name="ReportBug" component={ReportBug} />
    </Stack.Navigator>
  );
}

export const BottomNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? height * 0.1 : height * 0.06,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: TabImage('Home'),
        }}
        component={HomeTab}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: TabImage('Cart'),
        }}
        component={CartTab}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: TabImage('Profile'),
        }}
        component={ProfileTab}
      />
      <Tab.Screen
        name="Help"
        options={{
          tabBarIcon: TabImage('Help'),
        }}
        component={HelpTab}
      />
    </Tab.Navigator>
  );
};
