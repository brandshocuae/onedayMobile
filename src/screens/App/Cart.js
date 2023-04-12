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

//third party library
import {useSelector, useDispatch} from 'react-redux';
import MyStatusBar from '../../components/StatusBar';

//redux
import {addCart} from '../../store/action/cart';

const Index = ({navigation, ...props}) => {
  const isLogin = useSelector(state => state.userReducer.isLogin);
  console.log('isLogin ===>', isLogin);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.addCart);

  const [allTotal, setAllTotal] = useState(0);

  useEffect(() => {
    console.log('Cart ====>', cart);
    let price = cart.map(res => res.attributes.price.value);

    let total = price.map(i => Number(i));
    let productTotal = total.reduce((a, b) => a + b, 0);
    console.log('productTotal ===>', productTotal);
    setAllTotal(productTotal);
    // console.log('price ===>', price.reduce((a, b) => a + b, 0));
    // console.log('Total',
    //   [1, 2, 3, 4].reduce((a, b) => a + b, 0)
    // )
  }, [cart, allTotal]);

  const removeFromCart = id => {
    console.log('id ===>', id);
    const filteredArray = cart.filter(item => item.id !== id);

    console.log(filteredArray);
    dispatch(addCart(filteredArray));
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

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
        {isLogin ? (
          <>
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
                        <View
                          className={'w-28 h-28 rounded-md overflow-hidden'}>
                          <Image
                            source={{
                              uri: item.attributes.productImages.data[0]
                                .attributes.url,
                            }}
                            style={{width: '100%', height: '100%'}}
                            resizeMode={'stretch'}
                          />
                        </View>
                        <View className={'flex justify-between'}>
                          <View>
                            <Text
                              className={
                                'text-black font-semibold text-lg w-36'
                              }
                              numberOfLines={1}>
                              {item.attributes.productName}
                            </Text>
                            <Text
                              className={'text-slate-500 text-sm w-36'}
                              numberOfLines={1}>
                              {item.attributes.productDescription}
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
                            <Text className={'text-slate-600 text-sm'}>
                              Qty
                            </Text>
                            <View className={'flex flex-row items-center'}>
                              <TouchableOpacity>
                                <Image
                                  source={Images.Minus}
                                  className={'w-3 h-3 mr-3'}
                                  resizeMode={'contain'}
                                />
                              </TouchableOpacity>
                              <Text className={'text-slate-600 text-sm'}>
                                1
                              </Text>
                              <TouchableOpacity>
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
                          <TouchableOpacity
                            onPress={() => removeFromCart(item.id)}>
                            <Image
                              source={Images.Delete}
                              className={'w-4 h-4 flex self-end'}
                              resizeMode={'contain'}
                            />
                          </TouchableOpacity>

                          <Text className={'text-black font-bold text-base'}>
                            AED {item.attributes?.price?.value}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                }}
                ListEmptyComponent={
                  <View className={'flex self-center mt-12'}>
                    <Text className={'text-2xl text-black font-bold'}>
                      No List Found
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
                <Text className={'text-black text-sm font-light'}>
                  Subtotal
                </Text>
                <Text className={'text-black text-sm font-light'}>
                  AED {allTotal}
                </Text>
              </View>
              <View
                className={
                  'flex flex-row justify-between items-center px-5 mb-1'
                }>
                <Text className={'text-black text-sm font-light'}>
                  Shipping
                </Text>
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
                className={
                  'flex flex-row justify-between items-center px-5 mb-1'
                }>
                <Text className={'text-black text-lg font-bold'}>Total</Text>
                <Text className={'text-black text-lg font-bold'}>
                  AED {allTotal}
                </Text>
              </View>

              <ActionButton
                onPress={() => {
                  if (allTotal === 0) {
                    setShowAlert(true);
                    setAlertText('Add Something in Cart');
                  } else {
                    navigation.navigate('Address');
                  }
                }}
                title={'proceed to checkout'}
                alignSelf={'center'}
              />
            </View>
          </>
        ) : (
          <View className={'mt-28'}>
            <ActionButton
              onPress={() => navigation.navigate('SignIn')}
              title={'login first'}
              alignSelf={'center'}
            />
          </View>
        )}
      </SafeAreaView>
      <Alert
        isVisible={showAlert}
        onPress={() => setShowAlert(false)}
        message={alertText}
      />
    </>
  );
};

export default Index;
