import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
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
import DealsMedium from '../../components/DealsMedium';

//third party library
import {useSelector, useDispatch} from 'react-redux';
import Carousel from 'react-native-snap-carousel';

const Index = ({navigation, ...props}) => {
  // const _renderItem = ({item, index}) => {
  //   return (
  //     <Image
  //       source={item.}
  //     />
  //   );
  // };

  const carouselImage = [
    {
      id: 1,
      image: Images.dress1,
    },
    {
      id: 2,
      image: Images.dress2,
    },
    {
      id: 3,
      image: Images.dress3,
    },
    {
      id: 4,
      image: Images.dress4,
    },
    {
      id: 5,
      image: Images.dress5,
    },
  ];
  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          isBack
          isTimer={false}
          _handleBack={() => navigation.goBack()}
          title={'   '}
        />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <View className={'h-4'} />
          <Carousel
            data={carouselImage}
            renderItem={({item}) => {
              return (
                <Image
                  source={item.image}
                  style={{
                    width: width,
                    height: height * 0.4,
                  }}
                  resizeMode={'stretch'}
                />
              );
            }}
            sliderWidth={width}
            itemWidth={width}
          />
          <View className={'h-4'} />
          <View className={'mt-1 ml-3'}>
            <Text className={'text-black font-semibold text-lg'}>
              Wedding Dress
            </Text>
            <Text className={'text-slate-500 text-sm'}>
              Color, detail, and gold.
            </Text>
            <Text className={'text-black font-bold text-xl'}>
              AED 5,000{' '}
              <Text className={'text-sm text-slate-500 line-through'}>
                AED 12,000
              </Text>
            </Text>
            <Text className={'text-red-600 text-base font-bold'}>-30%</Text>
            <Text className={'text-slate-600 text-xs'}>
              ETA: 3-5 working days.
            </Text>
            <Text className={'text-slate-600 text-xs'}>
              Pay in 4 instalments from AED 112 with Payflex
            </Text>
            <View
              style={{
                width: width * 0.94,
                borderWidth: 1,
                borderColor: '#D3D3D3',
              }}
              className={
                'p-3 rounded-md mt-4 felx flex-row items-center justify-between'
              }>
              <Text>Quatity</Text>
              <View className={'flex flex-row items-center'}>
                <TouchableOpacity>
                  <Image
                    source={Images.Minus}
                    className={'w-3 h-3 mr-4'}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity>
                  <Image
                    source={Images.Plus}
                    className={'w-3 h-3 ml-4'}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{borderBottomWidth: 1}}
            className={'h-4 w-full border-slate-300'}
          />
          <View style={{width: width * 0.97}} className={'mt-5 ml-3'}>
            <Text className={'text-black font-bold text-lg'}>About</Text>
            <Text className={'text-slate-400 text-sm'}>
              At Fossil, we believe in the power of the moments that shape us.
              Who we are today is informed by every past experience and dream of
              the future. That’s why everything we create draws inspiration from
              both vintage American style and forward-thinking design. Crafting
              pieces to not only stand the test of time. But define it.
            </Text>
            <Text className={'text-slate-400 text-sm mt-4'}>
              This 44mm Fenmore Midsize features a blue satin dial with Roman
              numerals at the six- and 12-hour markers, multifunction movement
              and a navy stainless steel bracelet.
            </Text>
            <Text className={'text-black font-bold text-lg mt-3'}>
              Product Features
            </Text>
            {[
              {name: 'Case Size: 44MM'},
              {name: 'Water Resistant: 5 ATM'},
              {name: 'Movement: Quartz Multifunction'},
              {name: 'Platform: Fenmore Midsize'},
              {name: 'Strap Material: Stainless Steel'},
              {name: 'Water Resistance: 5 ATM'},
              {name: 'Case Material: Stainless Steel'},
              {name: 'Case Color: Blue'},
              {name: 'Dial Color: Blue'},
              {name: 'Strap Fashion Color: Navy'},
              {name: 'Strap Width: 22MM'},
            ].map((item, index) => (
              <View className={'flex flex-row items-center mt-2'} key={index}>
                <View className={'w-1 h-1 rounded-full bg-black mr-2'} />
                <Text className={'text-slate-400 text-sm'}>{item.name}</Text>
              </View>
            ))}
          </View>
          <View
            style={{width: width * 0.98}}
            className={'flex self-center ml-2'}>
            <FlatList
              data={[1, 2, 3, 4]}
              horizontal
              showsHorizontalScrollIndicator={false}
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
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
