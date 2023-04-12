import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Dropdown = ({data}) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const uniqueSizes = [...new Set(data.map(item => item.values.size))];

  const handleSizeChange = itemValue => {
    setSelectedSize(itemValue);
    const selectedColors = data
      .filter(item => item.values.size === itemValue)
      .map(item => item.values.color);
    setSelectedColors(selectedColors);
  };

  return (
    <View>
      <Text>Size:</Text>
      <Picker selectedValue={selectedSize} onValueChange={handleSizeChange}>
        {uniqueSizes.map(size => (
          <Picker.Item key={size} label={size} value={size} />
        ))}
      </Picker>
      {selectedColors.length > 0 && (
        <View>
          <Text>Colors:</Text>
          {selectedColors.map(color => (
            <Text key={color}>{color}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
