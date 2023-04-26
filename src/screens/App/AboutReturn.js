import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, ScrollView, Dimensions} from 'react-native';

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
          title={'About Return'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: height * 0.07,
            marginLeft: width * 0.04,
          }}>
          <Text className={'font-semibold text-base text-black mt-5'}>
            How to log a return
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>
            If you are not entirely satisfied with your order or product
            received, you can log a return on this page
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>
            1. Find your order and click through to the order detail
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>
            2 Click the big 'log a return' button at the bottom
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>
            3. Select the products(s) you would like to return and click
            'continue'{' '}
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>
            4. Follow the steps to submit{' '}
          </Text>
          <Text className={'text-sm text-slate-600 mt-2'}>
            Once your return is logged, our customer service team will evaluate
            and validate your return for eligibility before it is processed. No
            returns will be accepted without prior authorisation being obtained.{' '}
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>Please note:</Text>
          <Text className={'text-sm text-slate-600 mt-2'}>
            • Standard returns must be submitted within 7 days of receipt of the
            item
          </Text>
          <Text className={'text-sm text-slate-600 mt-2'}>
            • Due to their nature, certain hygiene and other products are not
            eligible for return{' '}
          </Text>
          <Text className={'text-sm text-slate-600 mt-2'}>
            • Returns are subject to our T&C's which you can find here.
          </Text>
          <Text className={'text-sm text-slate-600 mt-2'}>
            • Please refer to our returns page for further information.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
