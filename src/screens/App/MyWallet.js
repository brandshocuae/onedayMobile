import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import {Images} from '../../assets/images';
import Input from '../../components/Input/index';
import axios from '../../utils/axios';
import BaseURL from '../../constants/apiEndPoints';
import Loader from '../../components/Loader.component';
import Header from '../../components/Header';
import MyStatusBar from '../../components/StatusBar';
import ActionButton from '../../components/ActionButton';

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, ...props}) => {
  const dispatch = useDispatch();

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'My Wallet'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <View className={'flex items-center mt-6'}>
            <View className={'w-80 flex flex-row justify-between'}>
              <Text className={'text-xl font-semibold text-black'}>
                Available:
              </Text>
              <Text className={'text-xl font-semibold text-black'}>AED 0</Text>
            </View>

            <ActionButton
              onPress={() => {
                navigation.navigate('Home');
              }}
              title={'start shopping'}
            />
            <Text
              style={{width: width * 0.9}}
              className={'mt-5 font-semibold text-black text-base'}>
              What is my wallet?{'\n\n'}
              <Text className={'mt-5 font-normal text-black text-sm'}>
                Wallet credit can be either refunded to you instead of cash or
                could be awarded to you as a competition prize.{'\n\n'}
              </Text>
              How do I use it?{'\n\n'}
              <Text className={'mt-5 font-normal text-black text-sm'}>
                The next time you make a purchase and proceed to checkout, your
                available "Wallet" will be applied automatically to the order.
                You will be able to edit the wallet amount applied or remove it
                completely - up to you! Any outstanding amount required after
                applying your wallet to the order can be paid by any of our
                other payment methods.
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
