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
import Header from '../../components/Header';
import MyStatusBar from '../../components/StatusBar';
import Alert from '../../components/Alert/index';
import Loader from '../../components/Loader.component';

//third party library
import {useDispatch} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import SelectDropdown from 'react-native-select-dropdown';
import axios from '../../utils/axios';
import BaseURL from '../../constants/apiEndPoints';

//redux
import {handleAddItemToCart, handleRemoveItem} from '../../store/action/cart';

const Index = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  const data = route.params.data;

  const [isLoader, setIsLoader] = useState(false);

  const [carouselImage, setCarouselImage] = useState(
    data.attributes.productImages.data,
  );

  const [quantity, setQuantity] = useState(1);

  const [stock, setStock] = useState(false);

  const plus = () => {
    if (!(quantity >= 10)) {
      setQuantity(prevState => (prevState += 1));
    }
    if (quantity >= variantSlug[0]?.attributes?.stock) {
      setStock(true);
    }
  };

  const minus = () => {
    if (!(quantity <= 1)) {
      setQuantity(quantity - 1);
      if (quantity <= variantSlug[0]?.attributes?.stock) {
        setStock(false);
      }
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

  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  const discountPercentage =
    ((data.attributes?.price?.price - data.attributes?.price?.discountPrice) /
      data.attributes?.price?.price) *
    100;

  const newDropdown = data?.attributes?.attributes?.map(item => ({
    name: item.name,
    options: item.options.map(option => option.value),
  }));

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleDropdownChange = (name, value) => {
    setSelectedOptions(prevState => ({...prevState, [name]: value}));
  };

  //get variant
  useEffect(() => {
    getVariant();
  }, []);

  const [selectVariant, setSelectVariant] = useState([]);

  const getVariant = () => {
    setIsLoader(true);
    axios
      .get(BaseURL.GET_VARIANT + data.id)
      .then(res => {
        setSelectVariant(res.data.data);
        setIsLoader(false);
      })
      .catch(err => {
        setIsLoader(false);
      });
  };

  //variant slug selection ====>

  useEffect(() => {
    const defaultValues = {};
    data?.attributes?.attributes?.forEach(item => {
      defaultValues[item.name] = item.options[0].value;
    });
    setSelectedOptions(defaultValues);

    let displayString = '';

    for (const prop in defaultValues) {
      if (defaultValues.hasOwnProperty(prop)) {
        displayString += `${defaultValues[prop]}-`;
      }
    }

    // Remove the last "-" separator if it exists
    if (displayString.endsWith('-')) {
      displayString = displayString.slice(0, -1);
    }
  }, []);

  let displayString = '';
  for (const prop in selectedOptions) {
    if (selectedOptions.hasOwnProperty(prop)) {
      displayString += `${selectedOptions[prop]}-`;
    }
  }
  // Remove the last "-" separator if it exists
  if (displayString.endsWith('-')) {
    displayString = displayString.slice(0, -1);
  }

  let slug = (
    data.attributes.slug +
    '-' +
    displayString.replace(/ /g, '-')
  ).toLowerCase();

  let variantSlug = selectVariant.filter(x => x.attributes.slug === slug);

  setTimeout(() => {
    if (variantSlug[0]?.attributes?.stock == 0 || data.attributes.stock == 0) {
      setStock(true);
    }
  }, 1000);

  const handleCart = () => {
    if (selectVariant.length == 0) {
      dispatch(handleAddItemToCart(data, quantity));
    } else {
      let productData = variantSlug[0];
      productData.productId = data.id;
      productData.attributes.productImages = data.attributes.productImages;
      productData.attributes.productName = data.attributes.productName;
      dispatch(handleAddItemToCart(productData, quantity));
    }

    // setShowAlert(true);
    // setAlertText('Item Added');
  };

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          isBack
          isTimer={false}
          _handleBack={() => navigation.goBack()}
          title={'          '}
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
                AED{' '}
                {selectVariant.length === 0
                  ? data?.attributes?.price?.discountPrice
                  : variantSlug[0]?.attributes?.price?.discountPrice}{' '}
              </Text>
              <Text className={'text-sm text-slate-500 line-through'}>
                AED{' '}
                {selectVariant.length === 0
                  ? data?.attributes?.price?.price
                  : variantSlug[0]?.attributes?.price?.price}
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
            <Text className={'text-lg text-red-600 font-medium uppercase'}>
              {stock == false ? '' : 'out of stock'}
            </Text>

            {data.attributes.attributes != null ? (
              <View className={'w-full mt-3'}>
                {newDropdown.map((item, index) => (
                  <View key={index}>
                    <Text
                      className={
                        'text-lg text-black font-medium mb-2 ml-5 uppercase underline'
                      }>
                      {item.name}:
                    </Text>

                    <SelectDropdown
                      data={item.options}
                      defaultValueByIndex={0}
                      onSelect={(selectedItem, index) => {
                        handleDropdownChange(item.name, selectedItem);
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                      rowTextForSelection={(item, index) => {
                        return item;
                      }}
                      renderDropdownIcon={isOpened => {
                        return (
                          <Image
                            source={Images.DropDownArrow}
                            className={`w-4 h-4 ${
                              isOpened ? 'rotate-180' : ''
                            }`}
                            resizeMode={'contain'}
                          />
                        );
                      }}
                      buttonStyle={{
                        backgroundColor: 'white',
                        width: width * 0.85,
                        alignSelf: 'center',
                        borderWidth: 1,
                        borderRadius: 2,
                        borderColor: 'gray',
                      }}
                      dropdownStyle={{
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderColor: 'gray',
                      }}
                      // dropdownOverlayColor="transparent"
                    />
                  </View>
                ))}
              </View>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                if (stock == false) {
                  handleCart();
                }
              }}
              activeOpacity={0.7}
              style={{width: width * 0.95}}
              className={`pt-2 pb-2 w-full rounded-lg mt-5 cursor-pointer flex items-center justify-center ${
                stock == false ? 'bg-[#8ecc2d]' : 'bg-[#777c6f]'
              } `}>
              <Text className={'text-lg text-white font-semibold uppercase'}>
                i want {alphabet[0]?.alphabet}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{borderBottomWidth: 1}}
            className={'h-4 w-full border-slate-300'}
          />
          {data?.attributes?.description != null ? (
            <View
              className="flex self-center mt-5"
              style={{width: width * 0.9}}>
              <Text
                className={'text-2xl font-semibold uppercase mb-2 text-black'}>
                Product Description:
              </Text>

              <FlatList
                data={data?.attributes?.description?.feature}
                renderItem={({item}) => {
                  return (
                    <>
                      <Text
                        className={
                          'text-2xl text-black font-semibold uppercase mb-2 mt-2'
                        }>
                        {item.title}:
                      </Text>
                      <FlatList
                        data={item.values}
                        renderItem={({item, index}) => {
                          return (
                            <View>
                              <Text className={'text-lg text-black'}>
                                {index + 1}. {item}
                              </Text>
                            </View>
                          );
                        }}
                      />
                    </>
                  );
                }}
              />
            </View>
          ) : null}
        </ScrollView>
      </SafeAreaView>
      {isLoader && <Loader />}
      <Alert
        isVisible={showAlert}
        onPress={() => setShowAlert(false)}
        message={alertText}
      />
    </>
  );
};

export default Index;
