import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  PermissionsAndroid,
  Platform,
  Dimensions,
  FlatList,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import {Images} from '../../assets/images';
import Input from '../../components/Input/index';
import axios from '../../utils/axios';
import BaseURL from '../../constants/apiEndPoints';
import Loader from '../../components/Loader.component';
import Header from '../../components/Header';

//third party library
import {useSelector, useDispatch} from 'react-redux';
import MyStatusBar from '../../components/StatusBar';

const Index = ({navigation, ...props}) => {
  const dispatch = useDispatch();

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Checkout'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
        />
        <View className={'h-2'} />

        <View
          style={{borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}}
          className={'w-full py-1 px-3 mt-4'}>
          <Text className={'text-black font-semibold text-lg'}>Address</Text>
          <Text className={'text-slate-600 text-sm'}>
            1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United
            Arab Emirates
          </Text>
        </View>

        <View
          style={{borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}}
          className={'w-full py-1 px-3 mt-4'}>
          <Text className={'text-black font-semibold text-lg'}>Payment</Text>
          <Text className={'text-slate-600 text-sm'}>Cash On Delivery</Text>
        </View>
        <View
          style={{borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}}
          className={'w-full py-1 px-3 mt-4'}>
          <Text className={'text-black font-semibold text-lg'}>Having any problem?</Text>
          <Text className={'text-slate-600 text-sm underline'}>Contact Us</Text>
        </View>

        <View
          style={{position: 'absolute', bottom: 0}}
          className={'w-full  bg-[#D4F1F4]'}>
          <View
            className={
              'flex flex-row justify-between items-center px-5 mb-1 mt-5'
            }>
            <Text className={'text-black text-sm font-light'}>Subtotal</Text>
            <Text className={'text-black text-sm font-light'}>AED 5,000</Text>
          </View>
          <View
            className={'flex flex-row justify-between items-center px-5 mb-1'}>
            <Text className={'text-black text-sm font-light'}>Shipping</Text>
            <Text className={'text-black text-sm font-light'}>
              Calculate at checkout
            </Text>
          </View>
          <View
            style={{
              height: height * 0.01,
              borderBottomWidth: 1,
              borderBottomColor: '#D4D4D4',
            }}
          />
          <View
            className={'flex flex-row justify-between items-center px-5 mb-1'}>
            <Text className={'text-black text-lg font-bold'}>Total</Text>
            <Text className={'text-black text-lg font-bold'}>AED 5,000</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.7}
            style={{width: width * 0.9}}
            className={
              'py-2 flex items-center justify-center bg-[#0283c3] mt-3 rounded-md self-center mb-6'
            }>
            <Text className={'text-white font-semibold text-lg uppercase'}>
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
