import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
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
import Alert from '../../components/Alert/index';
import {handleEmptyCart} from '../../store/action/cart';

//third party library
import {useSelector, useDispatch} from 'react-redux';
import MyStatusBar from '../../components/StatusBar';

const Index = ({navigation, ...props}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
  const total = useSelector(state => state.cartReducer.total);
  const user = useSelector(state => state.userReducer.userData);

  const config = {
    headers: {
      Authorization: `Bearer ` + user.jwt,
    },
  };

  const [Location, setLocation] = useState('');
  const [Street1, setStreet1] = useState('');
  const [ZipCode, setZipCode] = useState('');

  useEffect(() => {
    getCustomerID();
  }, []);

  const getCustomerID = () => {
    axios
      .get(
        `${BaseURL.GET_CUSTOMER_ID}/${user.user.id}?populate[0]=customer&populate[1]=customer.address_book`,
      )
      .then(response => {
        console.log(response.data);
        setLocation(response.data.customer.address_book.city);
        setStreet1(response.data.customer.address_book.addressLine1);
        setZipCode(response.data.customer.address_book.zipCode);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const proceedToCheckout = () => {
    // const result = cart.map(({id, quantity}) => ({
    //   id,
    //   quantity,
    // }));

    // let params = {
    //   totalAmount: total,
    //   order_items: result,
    // };
    // console.log('params ===>', params);

    // axios
    //   .post(`${BaseURL.PLACE_ORDER}`, params, config)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    dispatch(handleEmptyCart());
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Checkout'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <View className={'h-2'} />

        <View
          style={{borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}}
          className={'w-full py-1 px-3 mt-4'}>
          <Text className={'text-black font-semibold text-lg'}>Address</Text>
          <Text className={'text-slate-600 text-sm'}>
            {Location} {Street1} {ZipCode}
          </Text>
        </View>

        <View
          style={{borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}}
          className={'w-full py-1 px-3 mt-4'}>
          <Text className={'text-black font-semibold text-lg'}>Payment</Text>
          <Text className={'text-slate-600 text-sm'}>Cash On Delivery</Text>
        </View>
        <View
          style={{borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}}
          className={'w-full py-1 px-3 mt-4'}>
          <Text className={'text-black font-semibold text-lg'}>
            Having any problem?
          </Text>
          <Text className={'text-slate-600 text-sm underline'}>Contact Us</Text>
        </View>

        <View
          style={{position: 'absolute', bottom: 0}}
          className={'w-full  bg-[#D4F1F4]'}>
          <View
            className={
              'flex flex-row justify-between items-center px-5 mb-1 mt-5'
            }>
            <Text className={'text-black text-sm font-light'}>Subtotal</Text>
            <Text className={'text-black text-sm font-light'}>AED {total}</Text>
          </View>
          <View
            className={'flex flex-row justify-between items-center px-5 mb-1'}>
            <Text className={'text-black text-sm font-light'}>Shipping</Text>
            <Text className={'text-black text-sm font-light'}>
              Calculate at checkout
            </Text>
          </View>
          <View
            style={{
              height: height * 0.01,
              borderBottomWidth: 1,
              borderBottomColor: '#D4D4D4',
            }}
          />
          <View
            className={'flex flex-row justify-between items-center px-5 mb-1'}>
            <Text className={'text-black text-lg font-bold'}>Total</Text>
            <Text className={'text-black text-lg font-bold'}>AED {total}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              proceedToCheckout();
            }}
            activeOpacity={0.7}
            style={{width: width * 0.9}}
            className={
              'py-2 flex items-center justify-center bg-[#0283c3] mt-3 rounded-md self-center mb-6'
            }>
            <Text className={'text-white font-semibold text-lg uppercase'}>
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Alert
        isVisible={showAlert}
        onPress={() => setShowAlert(false)}
        message={alertText}
      />
      {isLoader && <Loader />}
    </>
  );
};

export default Index;
