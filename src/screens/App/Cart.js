import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import {Images} from '../../assets/images';
import Header from '../../components/Header';
import ActionButton from '../../components/ActionButton';
import Alert from '../../components/Alert/index';
import axios from '../../utils/axios';
import BaseURL from '../../constants/apiEndPoints';

//third party library
import {useSelector, useDispatch} from 'react-redux';
import MyStatusBar from '../../components/StatusBar';

//redux
import {handleAddItemToCart, handleRemoveItem} from '../../store/action/cart';

const Index = ({navigation, ...props}) => {
  const isLogin = useSelector(state => state.userReducer.isLogin);
  const user = useSelector(state => state.userReducer.userData);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
  const total = useSelector(state => state.cartReducer.total);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [forLogin, setForLogin] = useState(false);

  const addQuantity = item => {
    dispatch(handleAddItemToCart(item, 1));
  };
  const removeQuantity = item => {
    dispatch(handleRemoveItem(item));
  };

  useEffect(() => {
    getCustomerID();
  }, []);

  const [addressID, setAddressID] = useState(null);

  const getCustomerID = () => {
    axios
      .get(
        `${BaseURL.GET_CUSTOMER_ID}/${user?.user?.id}?populate[0]=customer&populate[1]=customer.address_book`,
      )
      .then(response => {
        if (response.data.customer.address_book !== null) {
          setAddressID(response.data.customer.address_book.id);
        }
      })
      .catch(error => {});
  };

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Cart'}
          isCart
          isBack
          _handleBack={() => navigation.goBack()}
        />
        <View className={'h-2'} />

        <View style={{height: height * 0.52}}>
          <FlatList
            data={cart}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#D4D4D4',
                  }}
                  className={'w-full py-2 mt-4'}>
                  <View className={'px-2 flex flex-row justify-between'}>
                    <View className={'w-28 h-28 rounded-md overflow-hidden'}>
                      <Image
                        source={{
                          uri: item?.attributes?.productImages?.data[0]
                            ?.attributes?.url,
                        }}
                        style={{width: '100%', height: '100%'}}
                        resizeMode={'stretch'}
                      />
                    </View>
                    <View className={'flex justify-between'}>
                      <View>
                        <Text
                          style={{width: width * 0.49}}
                          className={'text-black font-semibold text-lg'}>
                          {/* {item?.attributes?.productName} */}
                          {item?.attributes?.name == undefined
                            ? item?.attributes?.productName
                            : item?.attributes?.name}
                        </Text>

                        <Text className={'text-slate-600 text-xs'}>
                          ETA: 3-5 working days.
                        </Text>
                      </View>

                      <View
                        style={{
                          width: width * 0.3,
                          borderWidth: 1,
                          borderColor: '#D3D3D3',
                        }}
                        className={
                          'p-2 rounded-md felx flex-row items-center justify-between'
                        }>
                        <Text className={'text-slate-600 text-sm'}>Qty</Text>
                        <View className={'flex flex-row items-center'}>
                          <TouchableOpacity
                            onPress={() => removeQuantity(item)}>
                            <Image
                              source={Images.Minus}
                              className={'w-3 h-3 mr-3'}
                              resizeMode={'contain'}
                            />
                          </TouchableOpacity>
                          <Text className={'text-slate-600 text-sm'}>
                            {item.quantity}
                          </Text>
                          <TouchableOpacity onPress={() => addQuantity(item)}>
                            <Image
                              source={Images.Plus}
                              className={'w-3 h-3 ml-3'}
                              resizeMode={'contain'}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View className={'flex justify-between'}>
                      <Text className={'text-black font-bold text-base'}>
                        AED {item.attributes?.price?.discountPrice}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
            ListEmptyComponent={
              <View className={'flex self-center mt-12'}>
                <Text className={'text-2xl text-black font-bold'}>
                  Cart is empty
                </Text>
              </View>
            }
          />
        </View>

        <View
          style={{position: 'absolute', bottom: height * 0.02}}
          className={'w-full bg-[#D4F1F4]'}>
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

          <ActionButton
            onPress={() => {
              if (total === 0) {
                setShowAlert(true);
                setAlertText('Add Something in Cart');
              } else if (isLogin == true) {
                if (addressID === null) {
                  navigation.navigate('Address', {
                    fromCart: 'fromCart',
                  });
                } else {
                  navigation.navigate('Checkout');
                }
              } else {
                setShowAlert(true);
                setAlertText('For Proceed to Checkout you have to login first');
                setForLogin(true);
              }
            }}
            title={'proceed to checkout'}
            alignSelf={'center'}
          />
        </View>
      </SafeAreaView>
      <Alert
        isVisible={showAlert}
        onPress={() => {
          if (forLogin === true) {
            navigation.navigate('SignIn', {
              fromCheckout: 'fromCheckout',
            });
          }
          setShowAlert(false);
        }}
        message={alertText}
      />
    </>
  );
};

export default Index;
