import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  centeredView: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  lModalView: {
    height: height * 0.4,
    width: width * 0.8,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: width * 0.05,
  },

  msgText: {
    fontSize: width * 0.04,
    width: width * 0.75,
    color: '#0283c3',
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  okBox: {
    paddingVertical: height * 0.015,
    width: width * 0.3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.025,
    borderWidth: 1,
    borderColor: '#0283c3',
  },
  okText: {
    fontSize: width * 0.03,
    color: '#0283c3',
  },
  notitext: {
    fontSize: width * 0.04,
    color: '#0283c3',
    textAlign: 'center',
  },
  imgStyleCont: {
    width: width * 0.3,
    height: width * 0.3,
  },
});
