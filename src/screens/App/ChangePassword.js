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
import Alert from '../../components/Alert/index';

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, ...props}) => {
  const user = useSelector(state => state.userReducer.userData);

  const config = {
    headers: {
      Authorization: `Bearer ` + user.jwt,
    },
  };

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  const _handleChangePassword = () => {
    setIsLoader(true);
    if (newPassword === confirmPassword) {
      let params = {
        currentPassword: currentPassword,
        password: newPassword,
        passwordConfirmation: confirmPassword,
      };

      axios
        .post(`${BaseURL.CHANGE_PASSWORD}`, params, config)
        .then(res => {
          console.log('Data ===>', res.data);
          setIsLoader(false);
          setShowAlert(true);
          setAlertText('Password Changed');
          navigation.goBack();
        })
        .catch(err => {
          console.log('Error ===>', err);
          setIsLoader(false);
          setShowAlert(true);
          setAlertText('The provided current password is invalid');
        });
    } else {
      setShowAlert(true);
      setAlertText('Password Did not Match');
      setIsLoader(false);
    }
  };

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Change Password'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
        />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <View className={'flex items-center mt-6'}>
            <Input
              title={'current password'}
              placeholderText={'Current Password'}
              value={currentPassword}
              handleOnChangeTxt={text => setCurrentPassword(text)}
              isPassword
            />
            <Input
              title={'new password'}
              placeholderText={'New Password'}
              value={newPassword}
              handleOnChangeTxt={text => setNewPassword(text)}
              marginTop={height * 0.02}
              isPassword
            />
            <Input
              title={'confirm new password'}
              placeholderText={'Confirm New Password'}
              value={confirmPassword}
              handleOnChangeTxt={text => setConfirmPassword(text)}
              marginTop={height * 0.02}
              isPassword
            />

            <ActionButton
              onPress={() => _handleChangePassword()}
              title={'update password'}
            />
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
