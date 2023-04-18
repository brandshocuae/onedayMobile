import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import axios from '../../utils/axios';
import BaseURL from '../../constants/apiEndPoints';
import Loader from '../../components/Loader.component';
import Header from '../../components/Header';
import Alert from '../../components/Alert/index';
import {handleEmptyCart} from '../../store/action/cart';

//third party library
import {useSelector, useDispatch} from 'react-redux';
import MyStatusBar from '../../components/StatusBar';

const Index = ({navigation, ...props}) => {
  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Payment Method'}
          isBack
          isCart
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <View className={'h-6'} />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Checkout')}
          style={{borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}}
          className={'w-full py-1 px-3'}>
          <Text className={'text-black font-semibold text-lg'}>
            Cash On Delivery
          </Text>
        </TouchableOpacity>
        <View
          style={{borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}}
          className={'w-full py-1 px-3 mt-3'}>
          <Text className={'text-slate-500 font-semibold text-lg'}>
            Other Method Coming Soon
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
