import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  PermissionsAndroid,
  Platform,
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
import MyStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';

//third party library
import {useSelector, useDispatch} from 'react-redux';

const Index = ({navigation, ...props}) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.userReducer.isLogin);
  console.log(isLogin);

  const [data, setData] = useState([
    {id: 1, name: 'Profile Information', image: Images.Login, onPress: ''},
    {id: 2, name: 'Orders', image: Images.Order, onPress: ''},
    {id: 3, name: 'Log a Return', image: Images.ReturnProduct, onPress: ''},
    {id: 4, name: 'Wallet', image: Images.Wallet, onPress: ''},
    {id: 5, name: 'Logout', image: Images.Logout, onPress: ''},
  ]);

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header title={'Profile'} />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
          <Image
            source={Images.Picture}
            className={'w-full h-52'}
            resizeMode={'stretch'}
          />
          {!isLogin ? (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
                activeOpacity={0.7}
                style={{width: width}}
                className={
                  'py-3 flex flex-row justify-between items-center mt-3 px-4 border-b-2 border-slate-500'
                }>
                <View className={'flex flex-row items-center'}>
                  <Image
                    source={Images.Login}
                    className={'w-7 h-7 mr-3'}
                    resizeMode={'contain'}
                  />
                  <Text className={'text-base text-slate-500'}>Login</Text>
                </View>
                <Image
                  source={Images.Arrow}
                  className={'w-6 h-6'}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                activeOpacity={0.7}
                style={{width: width}}
                className={
                  'py-3 flex flex-row justify-between items-center mt-3 px-4 border-b-2 border-slate-500'
                }>
                <View className={'flex flex-row items-center'}>
                  <Image
                    source={Images.SignUp}
                    className={'w-7 h-7 mr-3'}
                    resizeMode={'contain'}
                  />
                  <Text className={'text-base text-slate-500'}>
                    Create Account
                  </Text>
                </View>
                <Image
                  source={Images.Arrow}
                  className={'w-6 h-6'}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <FlatList
                data={data}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => navigation.navigate('SignUp')}
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
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
