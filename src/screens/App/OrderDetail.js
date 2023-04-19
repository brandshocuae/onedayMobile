import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Dimensions,
  View,
  Image,
  FlatList,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import {Images} from '../../assets/images';
import Header from '../../components/Header';
import MyStatusBar from '../../components/StatusBar';

//third party library
import moment from 'moment';

const Index = ({navigation, route, ...props}) => {
  const data = route.params.data;
  console.log('Data ===>', data);

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Order Detail'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: height * 0.07,
          }}>
          <View
            style={{width: width * 0.95, borderBottomWidth: 1}}
            className={'flex self-center border-[#D4D4D4] py-2 mt-4'}>
            <Text className={'text-black font-semibold text-xl'}>
              Delivery to
            </Text>
            {data.attributes.deliveryAddress != null ? (
              <Text className={'text-slate-500 text-base'}>
                {data.attributes.deliveryAddress.city}{' '}
                {data.attributes.deliveryAddress.addressLine1}{' '}
                {data.attributes.deliveryAddress.companyOrBuilding}
                {'\n'}
                {data.attributes.deliveryAddress.zipCode}
              </Text>
            ) : null}
          </View>

          <View
            style={{width: width * 0.95, borderBottomWidth: 1}}
            className={'flex self-center border-[#D4D4D4] py-2'}>
            <Text className={'text-black font-semibold text-xl'}>
              Order Summary
            </Text>
            <Text className={'text-slate-500 text-base'}>
              Order placed{'          '}{' '}
              <Text className={'text-black'}>
                {moment(data.attributes.publishedAt).format('MM/DD/YYYY')}
              </Text>
            </Text>
            <Text className={'text-black font-bold mt-5 text-base'}>
              To be shipped
            </Text>
            <Text className={'text-black font-bold mb-5 text-base'}>
              ETA: 5-10 working days from order date
            </Text>
            <FlatList
              data={data.attributes.order_items.data}
              renderItem={({item}) => {
                return (
                  <View className={'flex flex-row mt-4'}>
                    <View
                      className={
                        'h-28 w-28 overflow-hidden bg-red-200 rounded-md mr-2'
                      }>
                      <Image
                        source={{
                          uri: item.attributes.product.data.attributes
                            .productImages.data[0].attributes.url,
                        }}
                        className={'w-[100%] h-[100%]'}
                        resizeMode={'stretch'}
                      />
                    </View>
                    <View>
                      <Text
                        numberOfLines={1}
                        className={'text-base text-black font-semibold w-64'}>
                        {item.attributes.product.data.attributes.productName}
                      </Text>
                      <Text
                        numberOfLines={1}
                        className={
                          'text-base text-slate-500 font-semibold w-64'
                        }>
                        {item.attributes.product.data.attributes.productName}
                      </Text>
                      <Text
                        className={'text-base text-slate-500 font-semibold'}>
                        Item{' '}
                        <Text className={'text-base text-black font-semibold'}>
                          {item.attributes.quantity}
                        </Text>
                      </Text>
                      <Text
                        className={'text-base text-slate-500 font-semibold'}>
                        AED{' '}
                        {
                          item.attributes.product.data.attributes.price
                            .discountPrice
                        }{' '}
                        x{item.attributes.quantity}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{width: width * 0.95, borderBottomWidth: 1}}
            className={'flex self-center border-[#D4D4D4] py-2'}>
            <Text className={'text-black font-semibold text-xl'}>Payment</Text>
            <View className={'flex flex-row w-52 justify-between'}>
              <Text className={'text-slate-500 text-base'}>Subtotal</Text>
              <Text className={'text-black font-bold text-base'}>
                AED {data.attributes.totalAmount}
              </Text>
            </View>
            {/* <View className={'flex flex-row w-52 justify-between'}>
              <Text className={'text-slate-500 text-base'}>Vat(incl.)</Text>
              <Text className={'text-black font-bold text-base'}>AED 100</Text>
            </View> */}
            {/* <View className={'flex flex-row w-52 justify-between'}>
              <Text className={'text-slate-500 text-base'}>Delivery</Text>
              <Text className={'text-black font-bold text-base'}>AED 140</Text>
            </View> */}
            <View className={'flex flex-row w-52 justify-between'}>
              <Text className={'text-slate-500 text-base'}>Total</Text>
              <Text className={'text-black font-bold text-base'}>
                AED {data.attributes.totalAmount}
              </Text>
            </View>
            {/* <View className={'flex flex-row w-52 justify-between'}>
              <Text className={'text-slate-500 text-base'}>Paid via</Text>
              <Text className={'text-black font-bold text-base'}>EFT</Text>
            </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
