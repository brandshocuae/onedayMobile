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
import {login} from '../../store/action/user';
import MyStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, ...props}) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <Header
        title={'Create Account'}
        isTimer={false}
        _handleBack={() => navigation.goBack()}
        isBack
      />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <View className={'flex items-center mt-6'}>
            <Input
              title={'first name'}
              placeholderText={'Enter First Name'}
              value={firstName}
              handleOnChangeTxt={text => setFirstName(text)}
            />
            <Input
              title={'last name'}
              placeholderText={'Enter Last Name'}
              value={lastName}
              handleOnChangeTxt={text => setLastName(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'email address'}
              placeholderText={'Enter Email'}
              value={email}
              handleOnChangeTxt={text => setEmail(text)}
              keyboardType={'email-address'}
              marginTop={height * 0.02}
            />
            <Input
              title={'password'}
              placeholderText={'Enter Password'}
              value={password}
              handleOnChangeTxt={text => setPassword(text)}
              keyboardType={'email-address'}
              marginTop={height * 0.02}
              isPassword
            />

            <TouchableOpacity
              activeOpacity={0.7}
              style={{width: width * 0.9}}
              className={
                'py-2 flex items-center justify-center bg-[#0283c3] mt-3 rounded-md'
              }>
              <Text className={'text-white font-semibold text-lg uppercase'}>
                Sign up
              </Text>
            </TouchableOpacity>
            <Text
              onPress={() => navigation.navigate('SignIn')}
              className={'text-base text-slate-600 mt-2'}>
              Do you have an account?{' '}
              <Text className={'text-[#0283c3] font-semibold'}>
                Log In here
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
