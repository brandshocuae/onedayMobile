import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';

//local import
import {Images} from '../../assets/images';

//third party library

const Index = ({navigation, ...props}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'BottomNavigator'}],
      });
    }, 3000);
  }, []);

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
    <>
      <View className={'flex-1 bg-[#0283c3] justify-center items-center'}>
        <Image
          source={Images.LogoVertical}
          className={'w-80 h-32'}
          resizeMode={'contain'}
        />
        <View className={'flex self-start ml-10 py-1 mt-5'}>
          <Text
            className={'text-white text-4xl font-bold'}>{`${timeLeft.hoursLeft
            .toString()
            .padStart(2, '0')}:${timeLeft.minutesLeft
            .toString()
            .padStart(2, '0')}:${timeLeft.secondsLeft
            .toString()
            .padStart(2, '0')}`}</Text>
          <Text className={'text-white uppercase text-2xl font-semibold mt-5'}>
            Deals Expire in
          </Text>
        </View>
      </View>
    </>
  );
};

export default Index;
