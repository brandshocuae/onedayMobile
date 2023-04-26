import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, ScrollView, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import Header from '../../components/Header';
import MyStatusBar from '../../components/StatusBar';

//third party library

const Index = ({navigation, ...props}) => {
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
          <Text
            style={{width: width * 0.95}}
            className={'mt-3 text-black text-base'}>
            It was brought to our attention that, since we're capturing your
            details, we should have a privacy policy in place. Fair enough.
            OneDayOnly respects your privacy and is committed to the protection
            of your Personal Information. We had a look around and found two
            options: we {'\n'}1) copy/paste someone else's, and replace some
            other company's name with ours or {'\n'}2) get a legal firm to draft
            one for us. Option one is lame and option two bloody expensive. And
            we're all about not being lame and being cheap. So, here's our best
            effort at explaining what data we capture, what we do with it and
            –more importantly- what we don't do with it. This is not a legal
            document, but rather an explanation in laymen's terms of what we do
            and don't do. A Privacy Policy suitable to the good viewers of
            Sesame Street, if you will. OneDayOnly’s Privacy Policy sets out how
            OneDayOnly uses and processes your Personal Information in
            compliance with the Promotion of Access to Information Act 2 of 2000
            (“PAIA”) and the Protection of Personal Information Act 4 of 2013
            (“POPIA”). Our Privacy Policy applies to all Users of our website,
            related mobi-sites and software applications, collectively referred
            to as our “Platforms”, which are accessed by Users in order to
            purchase products and services. By making use of our Platforms,
            Users agree to this Privacy Policy together with our other Terms and
            Conditions. By agreeing to this Privacy Policy, you provide us with
            your express consent and agreement that we may collect, get,
            receive, record, organise, collate, store, update, change, retrieve,
            read, process, consult, use and share your Personal Information in
            the manner set out in this Privacy Policy. Users that are below the
            age of 18 have to obtain consent from their parent or guardian
            before accessing our Platforms or provide us with Personal
            Information. We may request confirmation from your parent or
            guardian that they have given such consent and contact them to
            verify the information provided by you. Where we cannot obtain such
            confirmation or verify your information provided, you are not
            entitled to make use of our Platforms and we will not use or retain
            your Personal Information.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
