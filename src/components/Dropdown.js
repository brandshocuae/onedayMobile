import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const {width, height} = Dimensions.get('window');

const VariantSelector = ({variants}) => {
  const [selectedValues, setSelectedValues] = useState({});
  const [availableOptions, setAvailableOptions] = useState({});
  console.log('selectedValues ===>', selectedValues);
  console.log('availableOptions ===>', availableOptions);
  useEffect(() => {
    const options = {};
    variants.forEach(variant => {
      Object.entries(variant.values).forEach(([key, value]) => {
        if (!options[key]) {
          options[key] = [];
        }
        if (!options[key].includes(value)) {
          options[key].push(value);
        }
      });
    });
    setAvailableOptions(options);
  }, []);

  const handleValueChange = (value, key) => {
    setSelectedValues(prevValues => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const renderPicker = (key, options) => {
    const selectedValue = selectedValues[key] || '';
    return (
      <Picker
        selectedValue={selectedValue}
        onValueChange={itemValue => handleValueChange(itemValue, key)}
        style={{width: width * 0.94}}>
        <Picker.Item label={`Select ${key}`} value="" />
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>
    );
  };

  return (
    <View className={'mt-4'}>
      {Object.keys(availableOptions).map((key, index) => (
        <View key={index}>
          <Text className={'text-lg font-semibold text-black'}>
            {key.toUpperCase()}:
          </Text>
          {renderPicker(key, availableOptions[key])}
        </View>
      ))}
    </View>
  );
};

export default VariantSelector;
