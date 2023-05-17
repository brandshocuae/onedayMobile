import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';

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
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Index = ({navigation, route, ...props}) => {
  const isFromCheckout = route?.params?.fromCheckout;

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
    setIsLoader(true);

    let params = {
      identifier: email,
      password: password,
    };

    axios
      .post(`${BaseURL.LOGIN}`, params)
      .then(res => {
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
        setIsLoader(false);
        setShowAlert(true);
        setAlertText(err?.data?.error?.message);
      });
  };

  // const handleFBLogin = async () => {
  //   try {
  //     const result = await LoginManager.logInWithPermissions([
  //       'public_profile',
  //       'email',
  //     ]);

  //     if (result.isCancelled) {
  //       console.log('Login cancelled');
  //     } else {
  //       const accessToken = await AccessToken.getCurrentAccessToken();
  //       console.log('Logged in successfully!', accessToken);
  //     }
  //   } catch (error) {
  //     console.log('Login error:', error);
  //   }
  // };

  // Settings.setAppID('1440158213191276');
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
              marginBottom={height * 0.03}
            />
            <Button
              title={'Sign in with Google'}
              onPress={() => {
                GoogleSignin.configure({
                  iosClientId:
                    '96488899777-i0627dh7tq6huvfiigobg4j4848t7d6j.apps.googleusercontent.com',
                  androidClientId:
                    '96488899777-qih1l2mkjb1ir0vq61sbla05dopukrps.apps.googleusercontent.com',
                });
                GoogleSignin.hasPlayServices()
                  .then(hasPlayService => {
                    if (hasPlayService) {
                      GoogleSignin.signIn()
                        .then(userInfo => {
                          console.log(JSON.stringify(userInfo));
                        })
                        .catch(e => {
                          console.log('ERROR IS: ' + JSON.stringify(e));
                        });
                    }
                  })
                  .catch(e => {
                    console.log('ERROR IS: ' + JSON.stringify(e));
                  });
              }}
              c
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
// IOS 96488899777-i0627dh7tq6huvfiigobg4j4848t7d6j.apps.googleusercontent.com
// 96488899777-i0627dh7tq6huvfiigobg4j4848t7d6j.apps.googleusercontent.com

// ANDROID 96488899777-qih1l2mkjb1ir0vq61sbla05dopukrps.apps.googleusercontent.com
