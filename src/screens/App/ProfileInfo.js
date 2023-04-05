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
  Alert,
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
    {
      id: 1,
      name: 'Profile Detail',
      onPress: () => navigation.navigate('PersonalDetail'),
    },
    {
      id: 2,
      name: 'Address Book',
      onPress: () => navigation.navigate('Address'),
    },
    {
      id: 3,
      name: 'Change Password',
      onPress: () => navigation.navigate('ChangePassword'),
    },
    {id: 4, name: 'Delete Account', onPress: () => {}},
  ]);

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Profile Info'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
        />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.07}}>
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
