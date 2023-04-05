/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {Images} from '../assets/images';
const {width, height} = Dimensions.get('window');

export default function Deal({image, title, subtitle, price}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{width: width * 0.4, marginRight: width * 0.05}}
      className={'flex items-center mt-5'}>
      <View className={'rounded-lg overflow-hidden'}>
        <ImageBackground
          source={image}
          className={'w-40 h-40'}
          resizeMode={'stretch'}>
          <View
            className={
              'bg-[#e50f62] w-12 h-9 flex items-center justify-center self-end mt-5 rounded-tl-md rounded-bl-md'
            }>
            <Text className={'text-white font-semibold text-xs'}>-30%</Text>
          </View>
        </ImageBackground>
      </View>
      <View className={'flex self-start mt-1'}>
        <Text className={'text-black font-semibold text-lg'}>{title}</Text>
        <Text className={'text-slate-500 text-sm'}>{subtitle}</Text>
        <Text className={'text-black font-bold text-xl'}>AED {price}</Text>
      </View>
    </TouchableOpacity>
  );
}
