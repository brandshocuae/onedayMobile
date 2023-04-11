/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import {Images} from '../assets/images';
const {width, height} = Dimensions.get('window');

//third party library
import {useSelector, useDispatch} from 'react-redux';

//redux
import {addCart} from '../store/action/cart';

export default function Deal({}) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.addCart);
  useEffect(() => {
    console.log('Cart ====>', cart);
  }, [cart]);

  const removeFromCart = id => {
    console.log('id ===>', id);
    const filteredArray = cart.filter(item => item.id !== id);

    console.log(filteredArray);
    dispatch(addCart(filteredArray));
  };

  return (
    <View style={{height: height * 0.52}}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View
              style={{borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}}
              className={'w-full py-2 mt-4'}>
              <View className={'px-2 flex flex-row justify-between'}>
                <View className={'w-28 h-28 rounded-md overflow-hidden'}>
                  <Image
                    source={{
                      uri: item.attributes.productImages.data[0].attributes.url,
                    }}
                    style={{width: '100%', height: '100%'}}
                    resizeMode={'stretch'}
                  />
                </View>
                <View className={'flex justify-between'}>
                  <View>
                    <Text
                      className={'text-black font-semibold text-lg w-36'}
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
                    <Text className={'text-slate-600 text-sm'}>Qty</Text>
                    <View className={'flex flex-row items-center'}>
                      <TouchableOpacity>
                        <Image
                          source={Images.Minus}
                          className={'w-3 h-3 mr-3'}
                          resizeMode={'contain'}
                        />
                      </TouchableOpacity>
                      <Text className={'text-slate-600 text-sm'}>1</Text>
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
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Image
                      source={Images.Delete}
                      className={'w-4 h-4 flex self-end'}
                      resizeMode={'contain'}
                    />
                  </TouchableOpacity>

                  <Text className={'text-black font-bold text-base'}>
                    AED 5,000
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
  );
}
