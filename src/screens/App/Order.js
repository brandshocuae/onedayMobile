import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  View,
  Modal,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import {Images} from '../../assets/images';
import Input from '../../components/Input/index';
import axios from '../../utils/axios';
import BaseURL from '../../constants/apiEndPoints';
import Loader from '../../components/Loader.component';
import ReturnLog from '../../components/ReturnLog/index';
import Header from '../../components/Header';
import MyStatusBar from '../../components/StatusBar';

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, ...props}) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Orders'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: height * 0.07,
          }}>
          <Text
            className={'ml-4 mt-4 text-lg font-semibold text-black underline'}
            onPress={() => {
              setModal(true);
            }}>
            How to log a return:
          </Text>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('OrderDetail')}
                  style={{width: width * 0.95, borderBottomWidth: 1}}
                  className={
                    'flex self-center flex-row justify-between py-3 border-[#D4D4D4] mt-4'
                  }>
                  <View className={'flex flex-row'}>
                    <View
                      className={
                        'h-24 w-24 overflow-hidden bg-red-200 rounded-md mr-2'
                      }>
                      <Image
                        source={Images.dress1}
                        className={'w-[100%] h-[100%]'}
                        resizeMode={'stretch'}
                      />
                    </View>
                    <View>
                      <Text className={'text-sm text-black font-semibold'}>
                        Order #0283c3
                      </Text>
                      <Text className={'text-sm text-slate-500 font-semibold'}>
                        Date ordered{' '}
                        <Text className={'text-sm text-black font-semibold'}>
                          10-02-23
                        </Text>
                      </Text>
                      <Text className={'text-sm text-slate-500 font-semibold'}>
                        Item{' '}
                        <Text className={'text-sm text-black font-semibold'}>
                          2
                        </Text>
                      </Text>
                      <Text className={'text-sm text-slate-500 font-semibold'}>
                        Total{' '}
                        <Text className={'text-sm text-black font-semibold'}>
                          AED 5,000
                        </Text>
                      </Text>
                    </View>
                  </View>
                  <View
                    className={
                      'rounded-full bg-green-600 flex items-center justify-center h-6 px-4'
                    }>
                    <Text
                      className={'text-xs text-white font-semibold uppercase'}>
                      Shipped
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </SafeAreaView>
      <ReturnLog
        isVisible={modal}
        onPress={() => {
          setModal(false);
        }}
      />
    </>
  );
};

export default Index;
