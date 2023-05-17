import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import Header from '../../components/Header';
import MyStatusBar from '../../components/StatusBar';

//third party library

const Index = ({navigation, ...props}) => {
  const data = [
    '1.1 We may collect the following information: ',
    'a) Name',
    'b) Contact information including email address',
    'c) Demographic information such as postcode, preferences and interests ',
    'd) Other information relevant to customer surveys and/or offers',
    '•	www.oneday.ae promise to keep your personal information confidential and not share it with any third party, except as outlined in this policy or required by law. If there is a fraudulent online payment, Snatcher may need to disclose personal information to help with a criminal investigation or to meet any other legal obligations.',
    '1.2 Although we will take reasonable measures to safeguard your privacy rights, we cannot assure or take responsibility for any unauthorized or illegal sharing of your personal information by third parties not under our authority, except in cases where such sharing is due to our gross negligence.',
    '1.3 If you give us permission, we may send you emails about our store, including new products and other updates.',
    '1.4 The website may use cookie and tracking technology depending on its features. These tools are helpful in collecting data such as the type of browser and operating system, monitoring the number of visitors and understanding their behavior on the site. Cookies can also be used to customize the site for visitors. While personal information cannot be collected through cookies and tracking technology, if you have previously provided personally identifiable information, cookies may be associated with that information. Third parties may receive aggregated cookie and tracking information.',
    '1.5 We will make sure that anyone who has access to your personal information, including our employees, third-party service providers, divisions, and partners, and their respective employees and third-party service providers, are legally obligated to maintain the confidentiality of your information and refrain from using it for any other purposes.',
    "1.6 Third-party service providers who work with us will collect, use, and disclose your information only as necessary for them to perform their services. However, some third-party providers, such as payment gateways and processors, have their own privacy policies regarding the information required for your purchase-related transactions. We suggest that you review their privacy policies to understand how these providers will handle your personal information. It's important to note that some providers may be located in different jurisdictions than you or us, and if you proceed with a transaction involving their services, your information may be subject to the laws of those jurisdictions. Once you leave our website or are redirected to a third-party website, you are no longer governed by our Privacy Policy or Terms of Service. When you click on links on our website, you may be directed to another site, and we are not responsible for their privacy practices, so we encourage you to read their privacy statements.",
  ];
  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Privacy Policy'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: height * 0.07,
            alignItems: 'center',
          }}>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <Text
                  key={index}
                  className={'ml-4 text-base font-montserrat text-gray-800 mt-3'}>
                  {item}
                </Text>
              );
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
