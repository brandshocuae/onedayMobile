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

const Header = ({_handleBack, title, isHome, isTimer = true, ...props}) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000); // 24 hours in milliseconds

    return () => clearInterval(intervalId);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const endOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
    );
    const millisecondsLeft = endOfDay - now;

    const hoursLeft = Math.floor(millisecondsLeft / 1000 / 60 / 60);
    const minutesLeft = Math.floor((millisecondsLeft / 1000 / 60) % 60);
    const secondsLeft = Math.floor((millisecondsLeft / 1000) % 60);

    return {hoursLeft, minutesLeft, secondsLeft};
  }

  return (
    <View
      className={
        'w-full bg-[#0283c3] py-1 flex flex-row justify-between px-3 items-center'
      }>
      <TouchableOpacity
        activeOpacity={1}
        onPress={_handleBack}
        className={'flex flex-row items-center'}>
        <Image
          source={Images.back}
          className={'w-4 h-4 mr-2'}
          resizeMode={'contain'}
        />
        {isHome ? (
          <Image
            source={Images.Logo}
            className={'w-28 h-10'}
            resizeMode={'contain'}
          />
        ) : (
          <Text className={'text-xl font-semibold text-white'}>{title}</Text>
        )}
      </TouchableOpacity>
      {isTimer && (
        <View className={'flex items-center'}>
          <Text className={'text-white uppercase text-[10px] font-normal'}>
            Deals Expire in
          </Text>
          <Text
            className={'text-white text-3xl font-bold'}>{`${timeLeft.hoursLeft
            .toString()
            .padStart(2, '0')}:${timeLeft.minutesLeft
            .toString()
            .padStart(2, '0')}:${timeLeft.secondsLeft
            .toString()
            .padStart(2, '0')}`}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
// bg-gradient-to-r from-[#0070b5bf] to-[#0070b5]
