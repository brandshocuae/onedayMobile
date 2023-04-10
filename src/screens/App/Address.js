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
          title={'Add Address'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
        />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <View className={'flex items-center mt-6'}>
            <Input
              title={'first name'}
              placeholderText={'First Name'}
              // value={email}
              // handleOnChangeTxt={text => setEmail(text)}
            />
            <Input
              title={'last name'}
              placeholderText={'Last Name'}
              // value={email}
              // handleOnChangeTxt={text => setEmail(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'contact number'}
              placeholderText={'+971 XXX-XXXX'}
              // value={email}
              // handleOnChangeTxt={text => setEmail(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'location nickname (optional)'}
              placeholderText={'Location Nickname'}
              // value={email}
              // handleOnChangeTxt={text => setEmail(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'company or building (optional)'}
              placeholderText={'Company or building'}
              // value={email}
              // handleOnChangeTxt={text => setEmail(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'street line 1'}
              placeholderText={'Street Line 1'}
              // value={email}
              // handleOnChangeTxt={text => setEmail(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'street line 2 (optional)'}
              placeholderText={'Street Line 2'}
              // value={email}
              // handleOnChangeTxt={text => setEmail(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'delivery instruction (optional)'}
              placeholderText={'Delivery instruction'}
              // value={email}
              // handleOnChangeTxt={text => setEmail(text)}
              marginTop={height * 0.02}
            />
         
            <ActionButton
              onPress={() => navigation.navigate('Checkout')}
              title={'save'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
