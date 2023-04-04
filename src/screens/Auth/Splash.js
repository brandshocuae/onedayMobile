import React, {useState, useEffect} from 'react';
import {ImageBackground, View, Image, Animated, Text} from 'react-native';

//local import
import {Images} from '../../assets/images';

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, ...props}) => {
  const isLogin = useSelector(state => state.userReducer.isLogin);
  useEffect(() => {
    setTimeout(() => {
      if (isLogin === false) {
        navigation.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomNavigator'}],
        });
      }
    }, 3000);
  }, []);

  return (
    <>
      <View
        className={'flex-1 bg-red-400 justify-center items-center'}></View>
    </>
  );
};

export default Index;
