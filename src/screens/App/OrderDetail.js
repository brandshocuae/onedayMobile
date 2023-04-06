import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Dimensions,
  View,
  Image,
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

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, ...props}) => {
  const dispatch = useDispatch();

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Order Detail'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: height * 0.07,
          }}>
          <View
            style={{width: width * 0.95, borderBottomWidth: 1}}
            className={'flex self-center border-[#D4D4D4] py-2 mt-4'}>
            <Text className={'text-black font-semibold text-base'}>
              Delivery to
            </Text>
            <Text className={'text-slate-500 text-xs'}>
              1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai -
              United Arab Emirates
            </Text>
          </View>

          <View
            style={{width: width * 0.95, borderBottomWidth: 1}}
            className={'flex self-center border-[#D4D4D4] py-2'}>
            <Text className={'text-black font-semibold text-base'}>
              Order Summary
            </Text>
            <Text className={'text-slate-500 text-xs'}>
              Order placed{'          '}{' '}
              <Text className={'text-black'}>10-03-23</Text>
            </Text>
            <Text className={'text-black font-bold mt-5 text-xs'}>
              To be shipped
            </Text>
            <Text className={'text-black font-bold mb-5 text-xs'}>
              ETA: 5-10 working days from order date
            </Text>
            <View className={'flex flex-row'}>
              <View
                className={
                  'h-24 w-24 overflow-hidden bg-red-200 rounded-md mr-2'
                }>
                <Image
                  source={Images.dress1}
                  className={'w-[100%] h-[100%]'}
                  resizeMode={'stretch'}
                />
              </View>
              <View>
                <Text className={'text-sm text-black font-semibold'}>
                  Wedding dress
                </Text>
                <Text className={'text-sm text-slate-500 font-semibold'}>
                  Color, detail, and gold.
                </Text>
                <Text className={'text-sm text-slate-500 font-semibold'}>
                  Item{' '}
                  <Text className={'text-sm text-black font-semibold'}>2</Text>
                </Text>
                <Text className={'text-sm text-slate-500 font-semibold'}>
                  AED 5,000 x1
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{width: width * 0.95, borderBottomWidth: 1}}
            className={'flex self-center border-[#D4D4D4] py-2'}>
            <Text className={'text-black font-semibold text-base'}>Payment</Text>
            <View className={'flex flex-row w-52 justify-between'}>
              <Text className={'text-slate-500 text-xs'}>Subtotal</Text>
              <Text className={'text-black font-bold text-xs'}>AED 2,000</Text>
            </View>
            <View className={'flex flex-row w-52 justify-between'}>
              <Text className={'text-slate-500 text-xs'}>Vat(incl.)</Text>
              <Text className={'text-black font-bold text-xs'}>AED 100</Text>
            </View>
            <View className={'flex flex-row w-52 justify-between'}>
              <Text className={'text-slate-500 text-xs'}>Delivery</Text>
              <Text className={'text-black font-bold text-xs'}>AED 140</Text>
            </View>
            <View className={'flex flex-row w-52 justify-between'}>
              <Text className={'text-slate-500 text-xs'}>Total</Text>
              <Text className={'text-black font-bold text-xs'}>AED 2,500</Text>
            </View>
            <View className={'flex flex-row w-52 justify-between'}>
              <Text className={'text-slate-500 text-xs'}>Paid via</Text>
              <Text className={'text-black font-bold text-xs'}>EFT</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
