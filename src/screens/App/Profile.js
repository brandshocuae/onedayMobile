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
import MyStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import Alert from '../../components/Alert/index';

//third party library
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../store/action/user';

const Index = ({navigation, ...props}) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.userReducer.isLogin);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  const [data, setData] = useState([
    {
      id: 1,
      name: 'Profile Information',
      image: Images.Login,
      onPress: () => navigation.navigate('ProfileInfo'),
    },
    {
      id: 3,
      name: 'Wallet',
      image: Images.Wallet,
      onPress: () => {
        setShowAlert(true);
        setAlertText('Coming Soon');
      },
    },
    {
      id: 4,
      name: 'Address',
      image: Images.FAQ,
      onPress: () => navigation.navigate('Address'),
    },

    {
      id: 5,
      name: 'Logout',
      image: Images.Logout,
      onPress: () => {
        dispatch(logout());
        navigation.reset({
          index: 0,
          routes: [{name: 'Splash'}],
        });
      },
    },
  ]);

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Profile'}
          CartOnPress={() => navigation.navigate('Cart')}
        />
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
                style={{width: width, borderBottomWidth: 1}}
                className={
                  'py-4 flex flex-row justify-between items-center mt-3 px-4 border-b-2 border-slate-500'
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
                style={{width: width, borderBottomWidth: 1}}
                className={
                  'py-4 flex flex-row justify-between items-center mt-3 px-4 border-b-2 border-slate-500'
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
                      onPress={item.onPress}
                      activeOpacity={0.7}
                      style={{width: width, borderBottomWidth: 1}}
                      className={
                        'py-4 flex flex-row justify-between items-center mt-3 px-4 border-slate-500'
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
