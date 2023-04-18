import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, ScrollView, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import Input from '../../components/Input/index';
import axios from '../../utils/axios';
import BaseURL from '../../constants/apiEndPoints';
import Loader from '../../components/Loader.component';
import {login} from '../../store/action/user';
import MyStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import ActionButton from '../../components/ActionButton';
import Alert from '../../components/Alert/index';

//third party library
import {useDispatch} from 'react-redux';

const Index = ({navigation, route, ...props}) => {
  const isFromCheckout = route?.params?.fromCheckout;
  console.log(isFromCheckout);

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    setShowAlert(true);
    setAlertText('You have entered an invalid email address!');
    return false;
  }

  const _handleLogin = () => {
    console.log('working');
    setIsLoader(true);

    let params = {
      identifier: email,
      password: password,
    };

    axios
      .post(`${BaseURL.LOGIN}`, params)
      .then(res => {
        console.log('Data ===>', res.data);
        setIsLoader(false);
        dispatch(login(res.data));
        if (isFromCheckout === 'fromCheckout') {
          navigation.reset({
            index: 0,
            routes: [{name: 'Cart'}],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{name: 'Splash'}],
          });
        }
      })
      .catch(err => {
        console.log('Error ===>', err);
        setIsLoader(false);
        setShowAlert(true);
        setAlertText(err?.data?.error?.message);
      });
  };

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <Header
        title={'Log In'}
        isTimer={false}
        _handleBack={() => navigation.goBack()}
        isBack
        isCart
      />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <View className={'flex items-center mt-6'}>
            <Input
              title={'email address'}
              placeholderText={'Enter Email'}
              value={email}
              handleOnChangeTxt={text => setEmail(text)}
              keyboardType={'email-address'}
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
            <Text
              className={
                'flex self-end mr-4 mt-2 text-base font-semibold uppercase text-[#0283c3]'
              }>
              forget password
            </Text>

            <ActionButton
              onPress={() => {
                if (ValidateEmail()) {
                  _handleLogin();
                }
              }}
              title={'login'}
            />
            <Text
              onPress={() => navigation.navigate('SignUp')}
              className={'text-base text-slate-600 mt-2'}>
              Don't have an account?{' '}
              <Text className={'text-[#0283c3] font-semibold'}>
                Create one now
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      {isLoader && <Loader />}
      <Alert
        isVisible={showAlert}
        onPress={() => {
          setShowAlert(false);
          setAlertText('');
        }}
        message={alertText}
      />
    </>
  );
};

export default Index;
