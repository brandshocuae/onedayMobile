import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, ScrollView, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
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
          title={'About OneDayDeals'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: height * 0.07,
          }}>
          <Text
            className={
              ' text-2xl font-montserrat font-semibold uppercase mb-2 mt-8 ml-4'
            }>
            What OneDay.ae is all about.
          </Text>
          <Text
            style={{width: width * 0.95}}
            className={'text-base font-montserrat text-gray-500 ml-4'}>
            Simply put we are about providing you, the customer, with the best
            prices! We obtain a wide range of products, including electronics to
            even food, and reduce their prices. These discounted items are
            available for purchase for only a day. Our process involves
            refreshing our deals every night at midnight, so you have a new
            selection of products to choose from every day. You have 24 hours to
            make a purchase. After selecting your desired items, they will be
            shipped to your doorstep within 5-10 business days.
          </Text>
          <Text
            style={{width: width * 0.95}}
            className={
              ' text-2xl font-montserrat font-semibold uppercase mb-2 mt-8 ml-4'
            }>
            What is AnotherDayOnly?
          </Text>
          <Text
            style={{width: width * 0.95}}
            className={' text-base font-montserrat text-gray-500 ml-4'}>
            Deals Upto 80% off! New deals every 24 hours Excellent Customer
            Satisfaction A wide range of products
          </Text>
          <Text
            style={{width: width * 0.95}}
            className={
              ' text-2xl font-montserrat font-semibold uppercase mb-2 mt-7 ml-4'
            }>
            Never miss another deal!
          </Text>
          <Text
            style={{width: width * 0.95}}
            className={' text-base font-montserrat text-gray-500 ml-4'}>
            Want to get the deals before everyone else? Click *here* to
            subscribe to our newsletter and never miss any of the crazy deals we
            put out.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
