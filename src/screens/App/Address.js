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

const Index = ({navigation, route, ...props}) => {
  const user = useSelector(state => state.userReducer.userData);
  console.log(user.user.id);
  const fromCart = route?.params?.fromCart;
  console.log('fromCart', fromCart);

  const config = {
    headers: {
      Authorization: `Bearer ` + user.jwt,
    },
  };

  const [contactNo, setContactNo] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const [customerID, setCustomerID] = useState(null);

  const _handleAddress = () => {
    setIsLoader(true);
    console.log('created');
    if (
      contactNo === '' ||
      street1 === '' ||
      zipCode === '' ||
      location === ''
    ) {
      setShowAlert(true);
      setAlertText(
        'Contact Number, Street 1, Zip Code, City Fields are Required',
      );
    } else {
      let params = {
        data: {
          email: user.user.email,
          city: location,
          addressLine1: street1,
          addressLine2: street2,
          contact: contactNo,
          zipCode: zipCode,
          companyOrBuilding: company,
          customer: customerID,
        },
      };
      console.log(params);
      axios
        .post(`${BaseURL.ADDRESS_BOOK}`, params, config)
        .then(response => {
          console.log(response);
          setShowAlert(true);
          setAlertText('Address Created Successfully');
          setIsLoader(false);
          // navigation.goBack();
        })
        .catch(error => {
          console.log(error);
          setShowAlert(true);
          setAlertText('Error');
          setIsLoader(false);
        });
    }
  };

  const _handleUpdateAddress = () => {
    setIsLoader(true);
    console.log('edit');
    if (
      contactNo === '' ||
      street1 === '' ||
      zipCode === '' ||
      location === ''
    ) {
      setShowAlert(true);
      setAlertText(
        'Contact Number, Street 1, Zip Code, City Fields are Required',
      );
    } else {
      let params = {
        data: {
          email: user.user.email,
          city: location,
          addressLine1: street1,
          addressLine2: street2,
          contact: contactNo,
          zipCode: zipCode,
          companyOrBuilding: company,
          customer: customerID,
        },
      };
      console.log(params);
      axios
        .put(`${BaseURL.ADDRESS_BOOK}/${addressID}`, params, config)
        .then(response => {
          console.log(response);
          setShowAlert(true);
          setAlertText('Address Edit Successfully');
          setIsLoader(false);
          // navigation.goBack();
        })
        .catch(error => {
          console.log(error);
          setShowAlert(true);
          setAlertText('Error');
          setIsLoader(false);
        });
    }
  };

  useEffect(() => {
    getCustomerID();
  }, []);

  const [addressID, setAddressID] = useState(null);

  const getCustomerID = () => {
    setIsLoader(true);
    axios
      .get(
        `${BaseURL.GET_CUSTOMER_ID}/${user?.user?.id}?populate[0]=customer&populate[1]=customer.address_book`,
      )
      .then(response => {
        console.log('Response ===>', response.data);
        if (response.data.customer.address_book !== null) {
          setContactNo(response.data.customer.address_book.contact);
          setLocation(response.data.customer.address_book.city);
          setCompany(response.data.customer.address_book.companyOrBuilding);
          setStreet1(response.data.customer.address_book.addressLine1);
          setStreet2(response.data.customer.address_book.addressLine2);
          setZipCode(response.data.customer.address_book.zipCode);
          setAddressID(response.data.customer.address_book.id);
        }
        setIsLoader(false);
        setCustomerID(response.data.customer.id);
      })
      .catch(error => {
        console.log('Error ===>', error);
        setIsLoader(false);
      });
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
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.35}}>
          <View className={'flex items-center mt-6'}>
            <Input
              editable={false}
              title={'email'}
              placeholderText={'Email'}
              value={user.user.email}
              // handleOnChangeTxt={text => setEmail(text)}
            />

            <Input
              title={'contact number'}
              placeholderText={'+971 XXX-XXXX'}
              value={contactNo}
              handleOnChangeTxt={text => setContactNo(text)}
              marginTop={height * 0.02}
              keyboardType={'numeric'}
            />
            <Input
              title={'city'}
              placeholderText={'City'}
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
              keyboardType={'numeric'}
            />

            <ActionButton
              onPress={() => {
                if (addressID == null) {
                  _handleAddress();
                } else {
                  _handleUpdateAddress();
                }
              }}
              title={addressID == null ? 'Add' : 'Update'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <Alert
        isVisible={showAlert}
        onPress={() => {
          setShowAlert(false);
          setAlertText('');
          if (fromCart == 'fromCart') {
            navigation.navigate('Checkout');
          }
        }}
        message={alertText}
      />
      {isLoader && <Loader />}
    </>
  );
};

export default Index;
