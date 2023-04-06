import React, {Component} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import styles from './style';
import {Images} from '../../assets/images';

const Index = ({navigation, ...props}) => {
  const {isVisible, onPress, message} = props;
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.lModalView}>
          <Text className={'font-semibold text-base text-black'}>
            How to log a return
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>
            If you are not entirely satisfied with your order or product
            received, you can log a return on this page
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>
            1. Find your order and click through to the order detail
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>
            2 Click the big 'log a return' button at the bottom
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>
            3. Select the products(s) you would like to return and click
            'continue'{' '}
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>
            4. Follow the steps to submit{' '}
          </Text>
          <Text className={'text-sm text-slate-600 mt-2'}>
            Once your return is logged, our customer service team will evaluate
            and validate your return for eligibility before it is processed. No
            returns will be accepted without prior authorisation being obtained.{' '}
          </Text>

          <Text className={'text-sm text-slate-600 mt-2'}>Please note:</Text>
          <Text className={'text-sm text-slate-600 mt-2'}>
            • Standard returns must be submitted within 7 days of receipt of the
            item
          </Text>
          <Text className={'text-sm text-slate-600 mt-2'}>
            • Due to their nature, certain hygiene and other products are not
            eligible for return{' '}
          </Text>
          <Text className={'text-sm text-slate-600 mt-2'}>
            • Returns are subject to our T&C's which you can find here.
          </Text>
          <Text className={'text-sm text-slate-600 mt-2'}>
            • Please refer to our returns page for further information.
          </Text>

          <TouchableOpacity onPress={onPress} style={styles.okBox}>
            <Text style={styles.okText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Index;
