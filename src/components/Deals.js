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

export default function Deal({
  image,
  title,
  subtitle,
  price,
  onPress,
  discount,
}) {
  console.log('discount ===>', discount);

  const discountPercentage = ((price - discount) / price) * 100;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{width: width * 0.9}}
      className={'flex items-center mt-4 self-center'}>
      <View className={'rounded-lg overflow-hidden'}>
        <ImageBackground
          source={{uri: image}}
          className={'h-80'}
          style={{width: width * 0.9}}
          resizeMode={'stretch'}>
          {discount != null ? (
            <View
              className={
                'bg-[#e50f62] w-16 h-10 flex items-center justify-center self-end mt-5 rounded-tl-md rounded-bl-md'
              }>
              <Text className={'text-white font-semibold text-sm'}>
                {discountPercentage.toFixed(0)}%
              </Text>
            </View>
          ) : null}
        </ImageBackground>
      </View>
      <View className={'flex self-start mt-1'}>
        <Text className={'text-black font-semibold text-lg'}>{title}</Text>
        <Text className={'text-slate-500 text-sm'}>{subtitle}</Text>
        <Text className={'text-black font-bold text-xl'}>AED {discount}</Text>
      </View>
    </TouchableOpacity>
  );
}
