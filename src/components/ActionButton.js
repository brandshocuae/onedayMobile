import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Images} from '../assets/images';
const {width, height} = Dimensions.get('window');

const Header = ({onPress, title, alignSelf, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{width: width * 0.9, alignSelf: alignSelf}}
      className={
        'py-2 flex items-center justify-center bg-[#0283c3] mt-3 rounded-md'
      }>
      <Text className={'text-white font-semibold text-lg uppercase'}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Header;
// bg-gradient-to-r from-[#0070b5bf] to-[#0070b5]
