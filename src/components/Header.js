import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Images} from '../assets/images';
const {width, height} = Dimensions.get('window');

//redux
import {useSelector, useDispatch} from 'react-redux';

const Header = ({
  _handleBack,
  title,
  isHome,
  isTimer = true,
  isBack,
  CartOnPress,
  isCart,
  ...props
}) => {
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

  const cart = useSelector(state => state.cartReducer.cart);
  // console.log('cart ===>', cart.length);

  return (
    <View
      className={
        'w-full bg-[#0283c3] py-1 flex flex-row justify-between px-3 items-center'
      }>
      <TouchableOpacity
        activeOpacity={1}
        onPress={_handleBack}
        className={'flex flex-row items-center'}>
        {isBack && (
          <Image
            source={Images.back}
            className={'w-4 h-4 mr-2'}
            resizeMode={'contain'}
          />
        )}

        {isHome ? (
          <Image
            source={Images.LogoVertical}
            className={'w-28 h-10'}
            resizeMode={'contain'}
          />
        ) : (
          <Text className={'text-xl font-semibold text-white'}>{title}</Text>
        )}
      </TouchableOpacity>
      <View className={'flex flex-row items-center'}>
        {isTimer && (
          <View className={'flex items-center py-1'}>
            <Text className={'text-white uppercase text-xs font-normal'}>
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
        {!isCart && (
          <TouchableOpacity className={'w-8 h-8 ml-3'} onPress={CartOnPress}>
            <ImageBackground
              source={Images.ShoppingCart}
              style={{width: '100%', height: '100%'}}
              resizeMode={'contain'}>
              {!cart?.length == 0 ? (
                <View
                  className={
                    'w-5 h-5 bg-red-600 rounded-full ml-4 -mt-4 flex items-center justify-center'
                  }>
                  <Text className={'text-sm text-white font-semibold'}>
                    {cart.length}
                  </Text>
                </View>
              ) : null}
            </ImageBackground>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
// bg-gradient-to-r from-[#0070b5bf] to-[#0070b5]
