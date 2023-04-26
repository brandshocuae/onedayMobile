import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import

import Header from '../../components/Header';
import MyStatusBar from '../../components/StatusBar';

//third party library

const Index = ({navigation, ...props}) => {
  let data = [
    {
      name: 'General',
      lines: [
        "For purposes of these General Terms and Conditions and elsewhere on the website, OneDayOnly means OneDayOnly Offers (Pty) Ltd, Reg nr: 2009/020929/07. OneDayOnly's head office is located at Unit G06 - The Old Castle Brewery, 6 Beach Road, Woodstock, 7925, South Africa",
      ],
    },
    {
      name: 'Application',
      lines: [
        'These General Terms and Conditions will apply to any and all agreements and legal relations pursuant to which OneDayOnly acts as a supplier of items.',
      ],
    },
    {
      name: 'Product specifications; pricing; ttypographical errors',
      lines: [
        'OneDayOnly will not be required to execute an order or compensate a buyer for any loss if OneDayOnly made an error when presenting the item, formulating its characteristics or specifications, or stating its price, and',
        'it should have been clear to the buyer that such involved a printing or clerical error; or ii) if the buyer should not, under the circumstances, have reasonably relied on OneDayOnly delivering quoted item, with stated characteristics, at this price.',
      ],
    },
    {
      name: 'Prices',
      lines: [
        'Products sold by OneDayOnly are billed in Rands (zar) and include VAT.',
      ],
    },
    {
      name: 'Market',
      lines: [
        'Items are currently delivered to buyers in the Republic of South Africa. Purchase agreements are concluded with natural persons not acting in the course of a profession or business only. Therefore any VAT charged will not at any time be refunded.',
      ],
    },
    {
      name: 'Costs of Delivering the Items',
      lines: [
        'All prices of the items posted on the website are exclusive of delivery costs.',
        'Delivery costs will be stated separately when settling the order and may vary daily and for each order.',
      ],
    },
    {
      name: 'Delivery and Delivery Period',
      lines: [
        'OneDayOnly shall endeavour to supply the items ordered to the delivery address within 5 - 10  working days (excludes weekends and public holidays) of the order confirmation and the required receipt of payment unless otherwise stated. Prior to delivering an order, the customer may be contacted to verify the correctness of the order',
        "OneDayOnly shall arrange delivery by post or dispatch orders in any other way, at OneDayOnly's sole discretion. Orders will not be sent to a PO Box address. Note that a signature will be required for receipt of all residential deliveries.",
        'OneDayOnly may dispatch the delivery in parts, however, any extra costs for such additional deliveries will be borne by OneDayOnly unless otherwise stated.',
        'OneDayOnly uses third-party couriers to deliver goods. A valid proof of delivery or courier run-sheet will be conclusive proof that the parcel was delivered to the address provided on the order. It is the customer’s responsibility to ensure the accuracy of the delivery address.',
        'Addresses may be amended on a customer’s My Orders page. In the event that no amendment is possible from this page, the goods may already be in transit and an address change may not be possible. Address changes after goods have already been processed may incur additional shipping charges.',
        'The onus is on the Customer to inform OneDayOnly if an order or part of an order is undelivered within 30 calendar days from the date of sale. OneDayOnly will not entertain any claim for undelivered items outside of 30 calendar days from the date of sale where a valid dispatch reflects against the order.',
        "OneDayOnly cannot be held responsible for consequences arising from a delayed delivery due to circumstances out of the company's control.",
        'Where a person has given permission to have something delivered/collected to/from a 3rd party location such as a reception area or security annexe, this delivery/collection will be deemed to have been fulfilled where said package has been signed for.',
      ],
    },
    {
      name: 'Stock Availability',
      lines: [
        'Stock on offer is limited. OneDayOnly shall take all reasonable efforts to discontinue the offer as soon as stock is no longer available. However, should items still be offered after stocks are sold, OneDayOnly shall only be liable to refund monies where it is unable to fulfil orders at advertised prices.',
        'OneDayOnly shall endeavour to fulfil a customer’s order to the best of their abilities. However, circumstances outside of OneDayOnly’s control may arise where a customer’s order may not be fulfilled e.g. damaged stock or stock unavailability from OneDayOnly’s supplier. In cases like these, OneDayOnly shall only be liable to refund the customer’s monies paid.',
      ],
    },
    {
      name: 'Payment & Refunds',
      lines: [
        'Payment is accepted via credit card (Visa, Mastercard or American Express), Discovery Miles, eBucks, SnapScan, Zapper, Ozow, via store credit (a “wallet”), Vodapay, Payflex, Mobicred and direct EFT transfer',
        'EFT payments need to be made to one of OneDayOnly’s nominated bank accounts. The beneficiary reference (the reference that is going to reflect on OneDayOnly’s bank account) needs to be the customer order number.',
        'No forex or international EFT payments will be accepted. Any costs involved with the acceptance or refusal of forex payments will be for the account of the customer.',
        'Refunds will be processed in the form of store credit, a “wallet”, which can be used towards future purchases on OneDayOnly.',
      ],
    },
    {
      name: 'Agreements of Sale',
      lines: [
        'Placing an item in a shopping basket, or adding it to a wishlist without completing the purchase cycle, does not constitute an agreement of sale between OneDayOnly and the purchaser',
        'A customer is entitled to cancel their order, provided that it has not yet been processed.',
      ],
    },
    {
      name: 'Returns Policy',
      lines: [
        'OneDayOnly will only accept returns in accordance with this policy, the Consumer Protection Act 68 of 2008, the Electronic Communications & Transactions Act 25 of 2002 and any other applicable law.',
        'Items may only be returned if they are faulty, damaged on arrival, incorrectly delivered or where the customer changes their mind within the parameters set out below and as set out in the Consumer Protection Act 68 of 2008.',
        'Once a customer informs OneDayOnly of a return, it is the customer’s responsibility to ensure that the item is returned within 10 days after the first contact was received.',
        'All returns need to be in original packaging, with all original accessories, parts and documentation unless otherwise agreed upon. The customer is responsible for packaging the return so as to avoid being damaged in transit.',
      ],
    },
  ];

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'Terms and Condition'}
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
                <View
                  style={{
                    width: width * 0.95,
                    alignSelf: 'center',
                    marginTop: height * 0.04,
                  }}>
                  <Text className={'text-2xl text-black font-semibold mb-2'}>
                    {index + 1} {item.name}
                  </Text>
                  <FlatList
                    data={item.lines}
                    renderItem={({item}) => {
                      return (
                        <Text className={'text-base text-black font-medium'}>
                          {item}
                        </Text>
                      );
                    }}
                  />
                </View>
              );
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
