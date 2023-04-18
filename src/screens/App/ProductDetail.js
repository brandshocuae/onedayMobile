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
import VariantSelector from '../../components/Dropdown';

//third party library
import {useSelector, useDispatch} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import Markdown from 'react-native-markdown-display';
import {Picker} from '@react-native-picker/picker';

//redux
import {handleAddItemToCart, handleRemoveItem} from '../../store/action/cart';

const Index = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  const data = route.params.data;
  console.log('data ===>', data);

  const [carouselImage, setCarouselImage] = useState(
    data.attributes.productImages.data,
  );

  const [quantity, setQuantity] = useState(1);

  const plus = () => {
    if (!(quantity >= 10)) {
      setQuantity(quantity + 1);
      dispatch(handleAddItemToCart(data));
    }
  };
  const minus = () => {
    if (!(quantity <= 1)) {
      setQuantity(quantity - 1);
      dispatch(handleRemoveItem(data));
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
    // data.variants = selectedValues;
    // console.log('With Variants ===>', data);
    dispatch(handleAddItemToCart(data));
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  // Picker

  // const renderPicker = (key, options) => {
  //   const selectedValue = selectedValues[key] || '';
  //   return (
  //     <Picker
  //       selectedValue={selectedValue}
  //       onValueChange={itemValue => handleValueChange(itemValue, key)}
  //       style={{width: width * 0.94}}>
  //       <Picker.Item label={`Select ${key}`} value="" />
  //       {options.map((option, index) => (
  //         <Picker.Item key={index} label={option} value={option} />
  //       ))}
  //     </Picker>
  //   );
  // };

  // const [selectedValues, setSelectedValues] = useState({});
  // const [availableOptions, setAvailableOptions] = useState({});
  // console.log('selectedValues ===>', selectedValues);
  // console.log('availableOptions ===>', availableOptions);
  // let variants =
  //   data?.attributes?.product_variants?.data?.[0]?.attributes?.options;
  // useEffect(() => {
  //   const options = {};
  //   variants.forEach(variant => {
  //     Object.entries(variant.values).forEach(([key, value]) => {
  //       if (!options[key]) {
  //         options[key] = [];
  //       }
  //       if (!options[key].includes(value)) {
  //         options[key].push(value);
  //       }
  //     });
  //   });
  //   setAvailableOptions(options);
  // }, []);

  // const handleValueChange = (value, key) => {
  //   setSelectedValues(prevValues => ({
  //     ...prevValues,
  //     [key]: value,
  //   }));
  // };

  // Picker

  const discountPercentage =
    ((data.attributes?.price?.price - data.attributes?.price?.discountPrice) /
      data.attributes?.price?.price) *
    100;

  const MarkdownComponent = () => {
    return (
      <Markdown style={{width: width * 0.9}}>
        {data.attributes.ProductDescription}
      </Markdown>
    );
  };
  // console.log(MarkdownComponent());
  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          isBack
          isTimer={false}
          _handleBack={() => navigation.goBack()}
          title={'              '}
          CartOnPress={() => {
            navigation.navigate('Cart');
            setQuantity(1);
          }}
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
              {data.attributes.productName}
            </Text>
            <View className={'flex flex-row items-end mt-2'}>
              <Text className={'text-black font-bold text-xl'}>
                AED {data.attributes?.price?.discountPrice}{' '}
              </Text>
              <Text className={'text-sm text-slate-500 line-through'}>
                AED {data.attributes?.price?.price}
              </Text>
            </View>

            <Text className={'text-red-600 text-base font-bold'}>
              {discountPercentage.toFixed(0)}%
            </Text>
            <Text className={'text-slate-600 text-xs'}>
              ETA: 3-5 working days.
            </Text>
            {/* <Text className={'text-slate-600 text-xs'}>
              Pay in 4 instalments from AED 112 with Payflex
            </Text> */}
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

            {/* <View className={'mt-4'}>
              {Object.keys(availableOptions).map((key, index) => (
                <View key={index}>
                  <Text className={'text-lg font-semibold text-black'}>
                    {key.toUpperCase()}:
                  </Text>
                  {renderPicker(key, availableOptions[key])}
                </View>
              ))}
            </View> */}

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
            <Text className={'text-2xl font-semibold uppercase mb-4'}>
              Product Description:
            </Text>

            {MarkdownComponent()}
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
