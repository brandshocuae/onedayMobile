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
        <Header title={'Cart'} />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <Text className={'text-lg font-bold text-black text-center'}>
            Pushing around an empty trolley,{'\n'}huh?
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{width: width * 0.9}}
            className={
              'py-2 flex items-center justify-center bg-[#0283c3] mt-3 rounded-md self-center'
            }>
            <Text className={'text-white font-semibold text-lg uppercase'}>
              fill that thing up
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
