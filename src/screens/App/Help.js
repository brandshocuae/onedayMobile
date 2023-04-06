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

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, ...props}) => {
  const dispatch = useDispatch();

  const [data, setData] = useState([
    {
      name: 'Frequently Asked Question',
      image: Images.FAQ,
      onPress: () => navigation.navigate('FAQ'),
    },
    {
      name: 'Terms and Condition',
      image: Images.TermsCondition,
      onPress: () => navigation.navigate('TermsCondition'),
    },
    {
      name: 'About OneDayOnly',
      image: Images.About,
      onPress: () => navigation.navigate('About'),
    },
    {
      name: 'Privacy Policy',
      image: Images.Privacy,
      onPress: () => navigation.navigate('PrivacyPolicy'),
    },
    {
      name: 'About Returns',
      image: Images.Return,
      onPress: () => navigation.navigate('AboutReturn'),
    },
    {
      name: 'Report Bug/New Feature',
      image: Images.Report,
      onPress: () => navigation.navigate('ReportBug'),
    },
  ]);

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header title={'Help'} />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={item.onPress}
                  activeOpacity={0.7}
                  style={{width: width, borderBottomWidth: 1}}
                  className={
                    'py-3 flex flex-row justify-between items-center mt-3 px-4 border-slate-500'
                  }>
                  <View className={'flex flex-row items-center'}>
                    <Image
                      source={item.image}
                      className={'w-7 h-7 mr-3'}
                      resizeMode={'contain'}
                    />
                    <Text className={'text-base text-slate-500'}>
                      {item.name}
                    </Text>
                  </View>
                  <Image
                    source={Images.Arrow}
                    className={'w-6 h-6'}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
