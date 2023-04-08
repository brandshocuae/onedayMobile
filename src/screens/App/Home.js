import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
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

const Index = ({navigation, ...props}) => {
  const [shop, setShop] = useState([
    {title: 'Wedding', subtitle: 'Color, detail, and gold.', price: '5,000'},
    {title: 'Wedding', subtitle: 'Color, detail, and gold.', price: '5,000'},
    {title: 'Wedding', subtitle: 'Color, detail, and gold.', price: '5,000'},
    {title: 'Wedding', subtitle: 'Color, detail, and gold.', price: '5,000'},
    {title: 'Wedding', subtitle: 'Color, detail, and gold.', price: '5,000'},
    {title: 'Wedding', subtitle: 'Color, detail, and gold.', price: '5,000'},
    {title: 'Wedding', subtitle: 'Color, detail, and gold.', price: '5,000'},
    {title: 'Wedding', subtitle: 'Color, detail, and gold.', price: '5,000'},
    {title: 'Wedding', subtitle: 'Color, detail, and gold.', price: '5,000'},
    {title: 'Wedding', subtitle: 'Color, detail, and gold.', price: '5,000'},
  ]);

  // const arrays = [];
  // const size = shop.length / 2;
  // while (shop.length > 0) arrays.push(shop.splice(0, size));

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header isHome />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <View className={'flex self-center mt-6'}>
            <FlatList
              data={[1, 2]}
              renderItem={({}) => {
                return (
                  <Deal
                    image={Images.dress1}
                    title={'Wedding Dress'}
                    subtitle={'Color, detail, and gold.'}
                    price={'5,000'}
                    onPress={() => navigation.navigate('ProductDetail')}
                  />
                );
              }}
            />

            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={({}) => {
                return (
                  <DealsMedium
                    image={Images.dress2}
                    title={'Wedding Dress'}
                    subtitle={'Color, detail, and gold.'}
                    price={'5,000'}
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
            <View style={{width: width}} className={'py-1'}>
              <View className={'w-full bg-green-800 py-1'}>
                <Text
                  className={
                    'text-xl font-bold text-white uppercase flex text-center'
                  }>
                  Atom shop
                </Text>
              </View>
              <View
                style={{width: width * 0.98}}
                className={'flex self-center ml-2'}>
                <FlatList
                  data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => {
                    return (
                      <View>
                        <DealsMedium
                          image={Images.dress5}
                          title={'Wedding Dress'}
                          subtitle={'Color, detail, and gold.'}
                          price={'5,000'}
                        />
                        <DealsMedium
                          image={Images.dress5}
                          title={'Wedding Dress'}
                          subtitle={'Color, detail, and gold.'}
                          price={'5,000'}
                        />
                      </View>
                    );
                  }}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Shop')}
                className={
                  'w-full bg-green-800 py-1 flex flex-row items-center justify-center mt-2'
                }>
                <Text
                  className={
                    'text-xl font-bold text-white uppercase flex text-center'
                  }>
                  see all 18 deals
                </Text>
                <Image
                  source={Images.back}
                  className={'w-4 h-4 ml-3 rotate-180'}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              data={[1, 2]}
              renderItem={({}) => {
                return (
                  <Deal
                    image={Images.dress3}
                    title={'Wedding Dress'}
                    subtitle={'Color, detail, and gold.'}
                    price={'5,000'}
                  />
                );
              }}
            />
            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={({}) => {
                return (
                  <DealsMedium
                    image={Images.dress5}
                    title={'Wedding Dress'}
                    subtitle={'Color, detail, and gold.'}
                    price={'5,000'}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

{
  /* <FlatList
  data={shop}
  horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({item}) => {
    return (
      <View>
        <DealsMedium
          image={Images.dress5}
          title={'Wedding Dress'}
          subtitle={'Color, detail, and gold.'}
          price={'5,000'}
        />
        {item.length > 1 ? (
          <DealsMedium
            image={Images.dress5}
            title={'Wedding Dress'}
            subtitle={'Color, detail, and gold.'}
            price={'5,000'}
          />
        ) : null}
      </View>
    );
  }}
/>; */
}
