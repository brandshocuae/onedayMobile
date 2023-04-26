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
          title={'About OneDayDeals'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: height * 0.07,
            alignItems: 'center',
          }}>
          <Text
            style={{width: width * 0.95}}
            className={'mt-3 text-black text-base'}>
            To return an item from your order, go to your orders page, select
            the relevant order, and click the "log a return" button at the
            bottom of the page. Follow the steps here to submit your return
            request. Our customer service team will review and approve your
            return before it is processed. Note that returns are only accepted
            with prior authorization and are subject to our terms and
            conditions, which can be found here.
          </Text>
          <Text
            style={{width: width * 0.95}}
            className={'mt-3 text-black text-base'}>
            Products received more than 7 days ago Products that have been used
            or are missing any parts or accessories Products that have been
            opened or unsealed, including but not limited to: swimwear,
            underwear, lingerie, bodysuits, beauty and cosmetic items and
            devices, fragrances, linen, bedding, towels, DVD’s, CD’s, games,
            software, foodstuffs, supplements, adult toys and accessories,
            animal feed, cleaning products, medical equipment, personal
            protective equipment, certain jewelry items, pillows, earphones, and
            electronics. Vouchers such as service-related vouchers, travel deals
            or other digital downloads OneDayOnly Gift Vouchers Personalized
            products or products that have been made to the customer’s
            specifications A product where the customer has already registered
            the warranty.
          </Text>
          <Text
            style={{width: width * 0.95}}
            className={'mt-3 text-black text-base'}>
            For products that are damaged or faulty, our standard warranty
            period is 6 months from the date of receipt. In some cases, there
            may be an extended supplier warranty. If you're unsure of the
            warranty period, please log your return and we'll assist. If your
            return is approved, you will be eligible for a refund. If you paid
            via EFT, SnapScan, Zapper, Ozow, eBucks or Discovery Miles, please
            remember to send your bank details so we can process your refund. A
            bank transfer refund could take up to 5 working days to reflect,
            while a refund to your credit card can take up to 2 weeks, depending
            on your bank. We may also process your refund as a store credit, but
            you can always request a cash refund instead. If you're still
            waiting after this time, please contact us and we’ll assist.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
