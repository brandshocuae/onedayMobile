import React, {useState, useEffect} from 'react';
import {ImageBackground, View, Image, Animated, Text} from 'react-native';

//local import
import {Images} from '../../assets/images';

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, ...props}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'BottomNavigator'}],
      });
    }, 3000);
  }, []);

  return (
    <>
      <View className={'flex-1 bg-[#0283c3] justify-center items-center'}>
        <Image
          source={Images.Logo}
          className={'w-80 h-80'}
          resizeMode={'contain'}
        />
      </View>
    </>
  );
};

export default Index;
