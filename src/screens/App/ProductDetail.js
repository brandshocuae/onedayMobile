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
import Alert from '../../components/Alert/index';

//third party library
import {useSelector, useDispatch} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import Markdown from 'react-native-markdown-display';

//redux
import {addCart} from '../../store/action/cart';

const Index = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cartReducer.addCart);

  const data = route.params.data;

  const [carouselImage, setCarouselImage] = useState(
    data.attributes.productImages.data,
  );

  const [quantity, setQuantity] = useState(1);

  const plus = () => {
    if (!(quantity >= 10)) {
      setQuantity(quantity + 1);
    }
  };
  const minus = () => {
    if (!(quantity <= 1)) {
      setQuantity(quantity - 1);
    }
  };

  const numberAplhabet = [
    {numeric: 1, alphabet: 'one'},
    {numeric: 2, alphabet: 'two'},
    {numeric: 3, alphabet: 'three'},
    {numeric: 4, alphabet: 'four'},
    {numeric: 5, alphabet: 'five'},
    {numeric: 6, alphabet: 'six'},
    {numeric: 7, alphabet: 'seven'},
    {numeric: 8, alphabet: 'eight'},
    {numeric: 9, alphabet: 'nine'},
    {numeric: 10, alphabet: 'ten'},
  ];
  let alphabet = numberAplhabet.filter(x => x.numeric == quantity);

  const handleCart = () => {
    var tempArr = cartItems;
    let items = cartItems.filter(x => x.id === data.id);
    console.log(items);

    if (items.length === 0) {
      tempArr.push(data);
      console.log('tempArr ===>', tempArr);
      dispatch(addCart(tempArr));
      setShowAlert(true);
      setAlertText('Added in Cart');
    } else {
      setShowAlert(true);
      setAlertText('Already in Cart');
    }
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  const markdown = `# About 
  - Jelly bean style T shirt, best for parties and born fires
  - wollen fur keeps you warn in cold winter nights at camp fires
  
  # Specification
  - 100% pure sheep wool.
  - machine washable
  - no fritz or fur spread for 1 year **Guaranteed**
  
  # sizes
  | small | medium | large |
  | - | - | - | 
  |40 Inches|50 Inches|60 Inches |`;

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          isBack
          isTimer={false}
          _handleBack={() => navigation.goBack()}
          title={'              '}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <View className={'h-4'} />
          <Carousel
            data={carouselImage}
            renderItem={({item}) => {
              return (
                <Image
                  source={{uri: item.attributes.url}}
                  style={{
                    width: width,
                    height: height * 0.4,
                  }}
                  resizeMode={'contain'}
                />
              );
            }}
            sliderWidth={width}
            itemWidth={width}
          />
          <View className={'h-4'} />
          <View className={'mt-1 ml-3'}>
            <Text className={'text-black font-semibold text-lg'}>
              {data.attributes.productName}
            </Text>
            <Text className={'text-slate-500 text-sm'}>
              {data.attributes.productDescription}
            </Text>
            <View className={'flex flex-row items-end mt-2'}>
              <Text className={'text-black font-bold text-xl'}>
                AED {data.attributes?.price?.value}{' '}
              </Text>
              <Text className={'text-sm text-slate-500 line-through'}>
                AED 12,000
              </Text>
            </View>

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
              <Text className={'text-slate-600 text-sm'}>Quatity</Text>
              <View className={'flex flex-row items-center'}>
                <TouchableOpacity onPress={() => minus()}>
                  <Image
                    source={Images.Minus}
                    className={'w-3 h-3 mr-4'}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
                <Text className={'text-slate-600 text-sm'}>{quantity}</Text>
                <TouchableOpacity onPress={() => plus()}>
                  <Image
                    source={Images.Plus}
                    className={'w-3 h-3 ml-4'}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => handleCart()}
              activeOpacity={0.7}
              style={{width: width * 0.95}}
              className={
                'pt-2 pb-2 w-full rounded-lg mt-5 cursor-pointer flex items-center justify-center bg-[#8ecc2d]'
              }>
              <Text className={'text-lg text-white font-semibold uppercase'}>
                i want {alphabet[0]?.alphabet}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{borderBottomWidth: 1}}
            className={'h-4 w-full border-slate-300'}
          />

          <View className="flex self-center mt-5" style={{width: width * 0.9}}>
            <Markdown style={{width: width * 0.9}}>{markdown}</Markdown>
          </View>
          <View
            style={{borderBottomWidth: 1}}
            className={'h-4 w-full border-slate-300'}
          />
        </ScrollView>
      </SafeAreaView>
      <Alert
        isVisible={showAlert}
        onPress={() => setShowAlert(false)}
        message={alertText}
      />
    </>
  );
};

export default Index;
