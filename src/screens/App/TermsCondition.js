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
  const data = [
    {
      title: '1. General',
      subtitle: [
        '1.1 These general terms and conditions govern without restriction the sales of products made between www.oneday.ae shop (Seller) and the Customers. Any order of a Product offered on the Site implies the Customer’s full acceptance of these Terms and conditions. They constitute, with the validation and confirmation of the order, the contract concluded between Seller and the Customer.',
        '1.2 Seller reserves the right to modify these Terms and Conditions at any time by publishing a new version on the site. The General Terms and Conditions of Sale are applicable for those, who placed an order on the site by adding items to card, accepting terms and conditions and clicking on “Checkout”, By visiting this website and or by placing any orders online, you agree to all terms and conditions listed here.',
        '1.3 In the event of mistakes in product pricing, descriptions, SKU codes, images or other website data, the relevant parties will be notified and a resolution sought, in the event that a resolution cannot be found, customers may be refunded.',
      ],
    },
    {
      title: '2. Purpose',
      subtitle: [
        '2.1. These General Terms and Conditions of Sale govern the rights and obligations of the Parties resulting from the sale of Products offered on the Site.',
        '2.2. The products purchased via the site www.oneday.ae are sold through the company “BRANDS HOC GROUP LLC FZ”',
        '2.3. The validation of these Terms and Conditions of Sale, the order summary sent to the Customer by email and the Customer’s payment constitute proof of the conclusion of a contract between Seller and the Customer, which will be governed by these Terms and Conditions. Customers must be of legal age and have the legal capacity to conclude such a contract; otherwise it will not be valid.',
      ],
    },
    {
      title: '3. Personal data processing',
      subtitle: [
        '3.1 Registration',
        '3.1.1 The accuracy of the personal data provided by the Customer falls within his exclusive responsibility;',
        '3.1.2. On the creation of his account, the Customer chooses a login and a password which will be specific to him to identify himself on the Site. He is responsible for keeping these elements confidential and do not provide it to any unauthorized third party individuals.',
        '3.1.3. Using his identifiers, the Customer can access his account at any time (outside of temporary periods of maintenance of the Site) and place an Order, follow his Orders or deliveries in progress or manage his personal information.',
        '3.2 Placing the order',
        '3.2.1. The Customer may place orders on the site when he has entered his identifiers. He may add all Products identified as available to his shopping cart using the corresponding button, which will be indicated on the Site.',
        '3.2.2. The shopping basket remains available and can be modified until the definitive validation of his purchase order by the Customer.',
        '3.2.3. Once the content of his shopping basket is validated, the Customer can confirm his Order by completing the following steps: ● ◦ Confirm the Products and the quantities selected;●◦ Complete all the information requested by the Site;●◦ Accept without reservation the General Terms and Conditions of Sale, by clicking on the button indicated;● ◦ Validate the payment, by clicking on the button indicated.',
        '3.2.4. The Customer is entirely responsible for the accuracy of the identification and delivery information he provides to Seller by placing an Order on the Site.',
      ],
    },
    {
      title: '4. Issuing of invoices',
      subtitle: [
        'After submitting an order in e-shop www.oneday.ae , Buyer will receive an automatic e-mail with a bill. After receiving a payment, Seller will generate an invoice and send it Customer’s e-mail address.',
      ],
    },
    {
      title: '5. Delivery of the order',
      subtitle: [
        '5.1. The Products will be delivered to the Customer after validation of the payment of the Order, whatever the method. The Customer will be informed of the shipment of the Products by email.',
        '5.2. In the event where the Order includes Products whose availability dates differ from the time when the Order was placed; it will be shipped when all the Products are available, in a single dispatch.',
        '5.3. The orders are being delivered within 1-3 business days (if exclusion is not provided). The delivery of Products is carried out for all the states of UAE.',
        '5.4. The Customer agrees that the order might be late because of undefined circumstances (such as public holidays, delivery company delay, etc.). If Customer did not receive his/her order, the seller should be informed about the latency not later than 1 day after expected delivery date.',
        '5.5. The products are delivered to the address indicated by the Customer when he places his Order on the Site. The Customer must check the completeness and the compliance of the information he provides to Seller. ',
        '5.6. In case of delays, damage, total or partial losses of Products and/or of the Order, it is the responsibility of the Customer to contact the Seller not later than 1 business day after delivery on info@oneday.ae The Seller takes all responsibility to correct the mistake and disturbance made by his or third party individuals fault.',
        '5.7 The seller reserves the right to cancel and refund the customer if the products are no longer available after the customer has placed their order.',
        '5.8 The seller reserves the right to cancel and refund the customer due to pricing errors on the website after the customer has placed their order.',
      ],
    },
    {
      title: '6. Policy of return and refund',
      subtitle: [
        'A customer is allowed to return an item within 7 days of receipt of the item if it is not faulty, subject to the following conditions:',
        "6.1. To receive a refund, the product needs to be returned (anything which is sold at www.oneday.ae stated few example categories below) with its original packaging, still sealed and unopened. If the product's original packaging has been opened or the seal has been broken, or if the product has been used, we will not accept the return or issue a refund unless there is a manufacturing defect. In the case of a manufacturing defect, all original accessories, information booklets, and the original box must also be returned. (This applies to electronics and mobile phones) ",
        '6.2. Hair and personal care items, dietary supplements, and sports nutrition products cannot be returned. Additionally, opened or used beauty products (such as cosmetics and skincare), fragrances, and health products cannot be accepted for return.',
        '6.3. Furniture and large household appliances cannot be returned. Home decor items can only be returned if they are unopened, undamaged, and in their original packaging. Bedding items that have been unwrapped are not eligible for return. Products that have been assembled, used, altered, or installed will not be accepted for return unless they are found to be defective.',
        '6.4. Undergarments including underwear, lingerie, swimwear, bras, socks, and tights cannot be returned. Apparel items can be returned only if they are in their original condition, with all labels and tags intact, and have not been worn, washed, or damaged. Footwear, eyewear, watches, bags, and luggage must also be returned in their original packaging with all tags intact.',
      ],
    },
    {
      title: '7. Personal Data',
      subtitle: [
        '7.1. In order to process Orders, the Seller collects certain personal information and data concerning the Customer.  Seller has taken all the necessary precautions to ensure the security of its files and the protection of its IT system, and to prevent in particular that the Personal Information of Customers is distorted, damaged or that an unauthorized third party can access it.',
        '7.2. In order to process Orders, the Customer agrees to provide identity proving document to Seller and (or) to third party individual during delivery process.',
        '7.3. By ticking option “Newsletter” on the Sellers site, Customer agrees for his personal information to be used for commercial or statistic purposes and not be provided to unauthorized third party individuals.',
        '7.4. In order to process Orders, the Customer agrees that he is aware of his rights not to provide his personal data, but also is aware; that this data is necessary for customer’s identification and insures the proper and legal procedure of buying and selling process.',
        '7.5. In order for information about Customer to be deleted, Customer should contact Seller on info@oneday.ae ',
      ],
    },
    {
      title: '8. Delivery information',
      subtitle: [
        '8.1. All information regarding order and delivery process, including shopping invoice will be sent to Customers e-mail address, provided during submission of Order;',
        '8.2. All information regarding order, including shopping invoice can also be found on the Sellers Site, if the order was completed by a registered Customer;',
        '8.3. All questions regarding order of delivery process can be submitted by the contact details, provided in “Contacts” on seller’s site www.oneday.ae',
      ],
    },
    {
      title: '9. Dispute',
      subtitle: [
        '9.1. Seller and Customer agree, that all information (including these Terms and Conditions, information about Seller, description about Products and its technical characteristics, Customer’s option s for payment and delivery, Product warranty (if applicable)), was provided to Customer in writing.',
        '9.5 We reserve the right to cancel orders due to website errors, product defects or for any unforeseen reasons. A full refund will be issued if we cancel your order.',
      ],
    },
  ];

  // Map and break lines at bullet points (●)
  const mappedData = data.map(item => ({
    title: item.title,
    subtitle: item.subtitle.flatMap(subtitleItem => subtitleItem.split('●')),
  }));
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
            data={mappedData}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: width * 0.95,
                    alignSelf: 'center',
                    marginTop: height * 0.04,
                  }}>
                  <Text className={'text-2xl text-black font-semibold mb-2'}>
                    {index + 1} {item.title}
                  </Text>
                  <FlatList
                    data={item.subtitle}
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
