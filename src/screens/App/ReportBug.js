import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  View,
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
  const [reportBug, setReportBug] = useState('');

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Report Bugs / New Feature'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: height * 0.07,
            alignItems: 'center',
          }}>
          <Input
            title={'Report Bug'}
            value={reportBug}
            handleOnChangeTxt={text => setReportBug(text)}
            placeholderText={'Report Bug'}
            marginTop={height * 0.04}
          />

          <ActionButton onPress={() => {}} title={'report bugs'} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
