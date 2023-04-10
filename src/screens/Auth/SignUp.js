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
import ActionButton from '../../components/ActionButton';

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, ...props}) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _handleSignUp = () => {
    setIsLoader(true);

    let params = {
      email: email,
      username: firstName,
      password: password,
      role: 'seller',
    };

    axios
      .post(`${BaseURL.SIGN_UP}`, params)
      .then(res => {
        console.log(res.data);
        setIsLoader(false);
        dispatch(login(res.data));
        navigation.reset({
          index: 0,
          routes: [{name: 'Splash'}],
        });
      })
      .catch(err => {
        console.log(err);
        setIsLoader(false);
      });
  };

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

            <ActionButton onPress={() => {}} title={'Sign up'} />
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
