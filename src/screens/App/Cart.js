import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  PermissionsAndroid,
  Platform,
  Dimensions,
  FlatList,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import {Images} from '../../assets/images';
import Input from '../../components/Input/index';
import axios from '../../utils/axios';
import BaseURL from '../../constants/apiEndPoints';
import Loader from '../../components/Loader.component';
import Header from '../../components/Header';

//third party library
import {useSelector, useDispatch} from 'react-redux';
import MyStatusBar from '../../components/StatusBar';

const Index = ({navigation, ...props}) => {
  const dispatch = useDispatch();

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header title={'Cart'} />
        <View className={'h-2'} />

        <View style={{height: height * 0.5}}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            showsVerticalScrollIndicator={false}
            renderItem={({}) => {
              return (
                <View
                  style={{borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}}
                  className={'w-full py-2 mt-4'}>
                  <View className={'px-2 flex flex-row justify-between'}>
                    <View className={'w-28 h-28 rounded-md overflow-hidden'}>
                      <Image
                        source={Images.dress1}
                        style={{width: '100%', height: '100%'}}
                        resizeMode={'stretch'}
                      />
                    </View>
                    <View className={'flex justify-between'}>
                      <View>
                        <Text
                          className={'text-black font-semibold text-lg'}
                          numberOfLines={1}>
                          Wedding Dress
                        </Text>
                        <Text
                          className={'text-slate-500 text-sm'}
                          numberOfLines={1}>
                          Color, detail, and gold.
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
                        <Text>Qty</Text>
                        <View className={'flex flex-row items-center'}>
                          <TouchableOpacity>
                            <Image
                              source={Images.Minus}
                              className={'w-3 h-3 mr-3'}
                              resizeMode={'contain'}
                            />
                          </TouchableOpacity>
                          <Text>1</Text>
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
                      <TouchableOpacity>
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
          />
        </View>
        <View
          style={{position: 'absolute', bottom: 0}}
          className={'w-full  bg-[#D4F1F4]'}>
          <View
            className={
              'flex flex-row justify-between items-center px-5 mb-1 mt-5'
            }>
            <Text className={'text-black text-sm font-light'}>Subtotal</Text>
            <Text className={'text-black text-sm font-light'}>AED 5,000</Text>
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
            <Text className={'text-black text-lg font-bold'}>AED 5,000</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Address')}
            activeOpacity={0.7}
            style={{width: width * 0.9}}
            className={
              'py-2 flex items-center justify-center bg-[#0283c3] mt-3 rounded-md self-center mb-3'
            }>
            <Text className={'text-white font-semibold text-lg uppercase'}>
              proceed to checkout
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
{
  /* <Text className={'text-lg font-bold text-black text-center'}>
            Pushing around an empty trolley,{'\n'}huh?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.7}
            style={{width: width * 0.9}}
            className={
              'py-2 flex items-center justify-center bg-[#0283c3] mt-3 rounded-md self-center'
            }>
            <Text className={'text-white font-semibold text-lg uppercase'}>
              fill that thing up
            </Text>
          </TouchableOpacity> */
}
