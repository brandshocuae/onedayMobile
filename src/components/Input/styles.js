import {StyleSheet, Dimensions, I18nManager} from 'react-native';

// local
import Colors from '../../constants/color';

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '93%',
    height: height * 0.055,
    // paddingHorizontal: width * 0.02,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
  },
  textInput: {
    fontSize: width * 0.04,
    // height: height * 0.058,
    width: width * 0.8,
    // backgroundColor: 'blue',
    color: 'black',
    marginLeft: width * 0.04,
  },
  errorMessage: {
    fontSize: width * 0.032,
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: height * 0.005,
    marginBottom: height * 0.01,
  },
  txt1: {
    fontSize: width * 0.035,
    color: 'black',
    fontWeight: 'bold',
  },
  titleTxt: {
    fontSize: width * 0.04,
    textTransform: 'uppercase',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: width * 0.05,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    color:'black'
  },
});
