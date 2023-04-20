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
import ReturnLog from '../../components/ReturnLog/index';
import Header from '../../components/Header';
import MyStatusBar from '../../components/StatusBar';

import Loader from '../../components/Loader.component';

//third party library
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';

const Index = ({navigation, ...props}) => {
  const [modal, setModal] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [data, setData] = useState([]);

  const user = useSelector(state => state.userReducer.userData);

  const config = {
    headers: {
      Authorization: `Bearer ` + user?.jwt,
    },
  };

  useEffect(() => {
    const focusListener = navigation.addListener('focus', () => {
      getOrders();
    });
    return focusListener;
  }, []);

  const getOrders = () => {
    setIsLoader(true);
    axios
      .get(
        `${BaseURL.PLACE_ORDER}?populate[0]=order_items&populate[1]=order_items.product&populate[2]=order_items.product.price&populate[3]=order_items.product.productImages&populate[4]=deliveryAddress&sort=id:desc`,
        config,
      )
      .then(res => {
        setData(res.data.data);

        setIsLoader(false);
      })
      .catch(err => {
        setIsLoader(false);
      });
  };

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Orders'}
          CartOnPress={() => navigation.navigate('Cart')}
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
            data={data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('OrderDetail', {
                      data: item,
                    })
                  }
                  style={{width: width * 0.95, borderBottomWidth: 1}}
                  className={
                    'flex self-center flex-row justify-between py-3 border-[#D4D4D4] mt-4'
                  }>
                  <View className={'flex flex-row'}>
                    <View>
                      <Text className={'text-sm text-black font-semibold'}>
                        Order #{item.id}
                      </Text>
                      <Text className={'text-sm text-slate-500 font-semibold'}>
                        Date ordered{' '}
                        <Text className={'text-sm text-black font-semibold'}>
                          {moment(item.attributes.publishedAt).format(
                            'MM/DD/YYYY',
                          )}
                        </Text>
                      </Text>
                      <Text className={'text-sm text-slate-500 font-semibold'}>
                        Item{' '}
                        <Text className={'text-sm text-black font-semibold'}>
                          {item.attributes.order_items?.data?.length}
                        </Text>
                      </Text>
                      <Text className={'text-sm text-slate-500 font-semibold'}>
                        Total{' '}
                        <Text className={'text-sm text-black font-semibold'}>
                          AED {item.attributes.totalAmount}
                        </Text>
                      </Text>
                    </View>
                  </View>
                  <View
                    className={`rounded-full ${
                      !item.attributes?.delivered
                        ? 'bg-slate-500'
                        : 'bg-green-600'
                    }  flex items-center justify-center h-6 px-4`}>
                    <Text
                      className={'text-xs text-white font-semibold uppercase'}>
                      {!item.attributes?.delivered ? 'Pending' : 'Shipped'}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            ListEmptyComponent={
              <View className={'flex self-center mt-12'}>
                <Text className={'text-black font-semibold text-2xl'}>
                  No list Found
                </Text>
              </View>
            }
          />
        </ScrollView>
      </SafeAreaView>
      {isLoader && <Loader />}
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
