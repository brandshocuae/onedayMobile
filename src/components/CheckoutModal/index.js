import React, {Component} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import {Images} from '../../assets/images';

const {width, height} = Dimensions.get('window');

const Index = ({
  navigation,
  isVisible,
  onPress,
  message,
  modalIsClosed,
  ...props
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <TouchableOpacity style={styles.centeredView} onPress={modalIsClosed}>
        <View style={styles.lModalView}>
          <Text style={styles.txt1}>Sweet! - This deal's in your cart!</Text>
          <Text style={styles.txt2} onPress={onPress}>
            {message}
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Index;

const styles = StyleSheet.create({
  centeredView: {
    height,
    width,
    backgroundColor: 'rgba(0,0,0,0.7)',
    // backgroundColor: 'red',
  },
  lModalView: {
    height: height * 0.13,
    width: width,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    alignItems: 'center',
  },

  imgStyleCont: {
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: 'red',
  },
  txt1: {
    fontSize: width * 0.04,
    color: '#5A5A5A',
  },
  txt2: {
    fontSize: width * 0.05,
    color: '#0283c3',
    fontWeight: '600',
  },
});
