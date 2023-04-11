import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import {Images} from '../../assets/images';
import Header from '../../components/Header';
import ActionButton from '../../components/ActionButton';
import CartItem from '../../components/CarItem';

//third party library
import {useSelector, useDispatch} from 'react-redux';
import MyStatusBar from '../../components/StatusBar';

//redux
import {addCart} from '../../store/action/cart';

const Index = ({navigation, ...props}) => {
  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header title={'Cart'} />
        <View className={'h-2'} />

        <CartItem />

        <View
          style={{position: 'absolute', bottom: 0}}
          className={'w-full bg-[#D4F1F4]'}>
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

          <ActionButton
            onPress={() => navigation.navigate('Address')}
            title={'proceed to checkout'}
            alignSelf={'center'}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
