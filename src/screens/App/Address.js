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
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [deliveryInstruction, setDeliveryInstruction] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  const _handleAddress = () => {
    if (email === '' || contactNo === '' || street1 === '' || zipCode === '') {
      setShowAlert(true);
      setAlertText(
        'Email, Contact Number, Street 1, Zip Code Fields are Required',
      );
    } else{
      let params ={

      }
    }
  };

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Add Address'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <View className={'flex items-center mt-6'}>
            <Input
              title={'email'}
              placeholderText={'Email'}
              value={email}
              handleOnChangeTxt={text => setEmail(text)}
            />

            <Input
              title={'contact number'}
              placeholderText={'+971 XXX-XXXX'}
              value={contactNo}
              handleOnChangeTxt={text => setContactNo(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'location nickname (optional)'}
              placeholderText={'Location Nickname'}
              value={location}
              handleOnChangeTxt={text => setLocation(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'company or building (optional)'}
              placeholderText={'Company or building'}
              value={company}
              handleOnChangeTxt={text => setCompany(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'street line 1'}
              placeholderText={'Street Line 1'}
              value={street1}
              handleOnChangeTxt={text => setStreet1(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'street line 2 (optional)'}
              placeholderText={'Street Line 2'}
              value={street2}
              handleOnChangeTxt={text => setStreet2(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'zip code'}
              placeholderText={'Zip Code'}
              value={zipCode}
              handleOnChangeTxt={text => setZipCode(text)}
              marginTop={height * 0.02}
            />
            <Input
              title={'delivery instruction (optional)'}
              placeholderText={'Delivery instruction'}
              value={deliveryInstruction}
              handleOnChangeTxt={text => setDeliveryInstruction(text)}
              marginTop={height * 0.02}
            />

            <ActionButton onPress={() => _handleAddress()} title={'save'} />
          </View>
        </ScrollView>
      </SafeAreaView>
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
