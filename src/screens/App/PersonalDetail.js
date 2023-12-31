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
  const user = useSelector(state => state.userReducer.userData);
  const [userName, setUserName] = useState(user?.user?.username);
  const [email, setEmail] = useState(user?.user?.email);

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Personal Detail'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <View className={'flex items-center mt-6'}>
            <Input
              editable={false}
              title={'user name'}
              placeholderText={'User Name'}
              value={userName}
              handleOnChangeTxt={text => setUserName(text)}
            />

            <Input
              editable={false}
              title={'email address'}
              placeholderText={'Email Address'}
              value={email}
              handleOnChangeTxt={text => setEmail(text)}
              marginTop={height * 0.02}
            />

            {/* <ActionButton
              onPress={() => navigation.navigate('Checkout')}
              title={'save'}
            /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
