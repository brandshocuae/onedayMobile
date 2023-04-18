import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
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
import Deal from '../../components/Deals';
import DealsMedium from '../../components/DealsMedium';
import Alert from '../../components/Alert/index';

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, ...props}) => {
  const [isLoader, setIsLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  // const arrays = [];
  // const size = shop.length / 2;
  // while (shop.length > 0) arrays.push(shop.splice(0, size));
  useEffect(() => {
    getTodayDeal();
    getBanner();
    getShops();
  }, []);

  const [mainBanner, setMainBanner] = useState('');
  const [products, setProducts] = useState([]);

  const getTodayDeal = () => {
    setIsLoader(true);
    axios
      .get(`${BaseURL.GET_PRODUCT}`)
      .then(res => {
        setProducts(res.data.data);

        setIsLoader(false);
      })
      .catch(err => {
        // console.log('Error ====>', err);
        setIsLoader(false);
      });
  };

  const getBanner = () => {
    setIsLoader(true);
    axios
      .get(`${BaseURL.TODAYS_DEAL}?populate=deep`)
      .then(res => {
        setMainBanner(
          res.data.data[0].attributes.dealMainBanner.data.attributes.formats
            .large.url,
        );

        setIsLoader(false);
      })
      .catch(err => {
        // console.log('Error ====>', err);
        setIsLoader(false);
      });
  };

  const [shopData, setShopData] = useState([]);
  const [shopName, setShopName] = useState('');
  const getShops = () => {
    setIsLoader(true);
    axios
      .get(`${BaseURL.GET_SHOPS}`)
      .then(res => {
        setIsLoader(false);
        console.log('Shops ===>', res.data.data[0].attributes);
        setShopName(res.data.data[0].attributes.name);
        setShopData(res.data.data[0].attributes.deals.data);
      })
      .catch(err => {
        console.log('Error ====>', err);
        setIsLoader(false);
      });
  };

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header isHome CartOnPress={() => navigation.navigate('Cart')} />
        <ScrollView
          contentContainerStyle={{paddingBottom: height * 0.2}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{width: width * 0.9}}
            className={'h-24 felx self-center mt-3 rounded-md overflow-hidden'}>
            <Image
              style={{width: '100%', height: '100%'}}
              resizeMode={'stretch'}
              source={{uri: mainBanner}}
            />
          </View>
          <View className={'flex self-center mt-1'}>
            <FlatList
              data={products}
              renderItem={({item, index}) => {
                if (item.attributes.placement === 'large') {
                  return (
                    <Deal
                      key={index}
                      onPress={() =>
                        navigation.navigate('ProductDetail', {
                          data: item,
                        })
                      }
                      image={
                        item.attributes.productImages.data[0].attributes.url
                      }
                      title={item.attributes.productName}
                      subtitle={item.attributes.productName}
                      price={item.attributes.price.price}
                      discount={item.attributes.price.discountPrice}
                    />
                  );
                }
              }}
              contentContainerStyle={{
                width: width * 0.9,
                marginTop: height * 0.01,
                alignSelf: 'center',
              }}
            />

            <FlatList
              data={products}
              // numColumns={2}
              renderItem={({item, index}) => {
                if (
                  item.attributes.placement === 'medium' ||
                  item.attributes.placement === 'small'
                ) {
                  return (
                    <DealsMedium
                      key={index}
                      onPress={() =>
                        navigation.navigate('ProductDetail', {
                          data: item,
                        })
                      }
                      image={
                        item.attributes.productImages.data[0].attributes.url
                      }
                      title={item.attributes.productName}
                      subtitle={item.attributes.productName}
                      price={item.attributes.price.price}
                      discount={item.attributes.price.discountPrice}
                    />
                  );
                }
              }}
              contentContainerStyle={{
                width: width * 0.9,
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: width * 0.025,
                alignContent: 'center',
                // marginTop: height * 0.01,
                alignSelf: 'center',
              }}
            />

            <View style={{width: width}} className={'py-1'}>
              <View className={'w-full bg-green-800 py-1'}>
                <Text
                  className={
                    'text-xl font-bold text-white uppercase flex text-center'
                  }>
                  {shopName}
                </Text>
              </View>
              <View
                style={{width: width * 0.98}}
                className={'flex self-center'}>
                <FlatList
                  data={shopData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => {
                    return (
                      <DealsMedium
                        onPress={() =>
                          navigation.navigate('ProductDetail', {
                            data: item,
                          })
                        }
                        image={
                          item.attributes.productImages.data[0].attributes.url
                        }
                        title={item.attributes.productName}
                        subtitle={item.attributes.productDescription}
                        price={item.attributes.price?.price}
                        discount={item.attributes.price.discountPrice}
                      />
                    );
                  }}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('Shop', {
                    data: shopData,
                  })
                }
                className={
                  'w-full bg-green-800 py-1 flex flex-row items-center justify-center mt-2'
                }>
                <Text
                  className={
                    'text-xl font-bold text-white uppercase flex text-center'
                  }>
                  see all deals
                </Text>
                <Image
                  source={Images.back}
                  className={'w-4 h-4 ml-3 rotate-180'}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {isLoader && <Loader />}
      <Alert
        isVisible={showAlert}
        onPress={() => {
          setShowAlert(false);
          setAlertText('');
        }}
        message={alertText}
      />
    </>
  );
};

export default Index;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   item: {
//     padding: 10,
//     margin: 5,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
// });

{
  /* <FlatList
  data={shop}
  horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({item}) => {
    return (
      <View>
        <DealsMedium
          image={Images.dress5}
          title={'Wedding Dress'}
          subtitle={'Color, detail, and gold.'}
          price={'5,000'}
        />
        {item.length > 1 ? (
          <DealsMedium
            image={Images.dress5}
            title={'Wedding Dress'}
            subtitle={'Color, detail, and gold.'}
            price={'5,000'}
          />
        ) : null}
      </View>
    );
  }}
/>; */
}

{
  /* <FlatList
              data={products}
              numColumns={2}
              renderItem={({item, index}) => {
                if (item.attributes.placement === 'large') {
                  return (
                    <Deal
                      key={index}
                      onPress={() =>
                        navigation.navigate('ProductDetail', {
                          data: item,
                        })
                      }
                      image={
                        item.attributes.productImages.data[0].attributes.url
                      }
                      title={item.attributes.productName}
                      subtitle={item.attributes.productDescription}
                      price={item.attributes.price.value}
                    />
                  );
                } else if (item.attributes.placement === 'medium') {
                  return (
                    <DealsMedium
                      key={index}
                      onPress={() =>
                        navigation.navigate('ProductDetail', {
                          data: item,
                        })
                      }
                      image={
                        item.attributes.productImages.data[0].attributes.url
                      }
                      title={item.attributes.productName}
                      subtitle={item.attributes.productDescription}
                      price={item.attributes.price.value}
                    />
                  );
                } else if (item.attributes.placement === 'small') {
                  return (
                    <DealsMedium
                      key={index}
                      onPress={() =>
                        navigation.navigate('ProductDetail', {
                          data: item,
                        })
                      }
                      image={
                        item.attributes.productImages.data[0].attributes.url
                      }
                      title={item.attributes.productName}
                      subtitle={item.attributes.productDescription}
                      price={item.attributes.price.value}
                    />
                  );
                }
              }}
            /> */
}
