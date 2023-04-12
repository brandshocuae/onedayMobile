import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
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
import MyStatusBar from '../../components/StatusBar';
import Deal from '../../components/Deals';
import DealsMedium from '../../components/DealsMedium';

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, route, ...props}) => {
  const data = route.params.data;
  console.log(data);

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={data.name}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <View className={'flex self-center mt-6'}>
            <FlatList
              data={data?.deals?.data}
              renderItem={({item}) => {
                return (
                  <DealsMedium
                    onPress={() =>
                      navigation.navigate('ProductDetail', {
                        data: item,
                      })
                    }
                    image={item.attributes.productImages.data[0].attributes.url}
                    title={item.attributes.productName}
                    subtitle={item.attributes.productDescription}
                    price={'500'}
                  />
                );
              }}
              contentContainerStyle={{
                width: width * 0.9,
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: width * 0.025,
                alignContent: 'center',
                marginTop: height * 0.01,
                alignSelf: 'center',
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
