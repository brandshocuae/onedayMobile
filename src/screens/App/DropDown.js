import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Dimensions, View, ScrollView} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import Header from '../../components/Header';
import MyStatusBar from '../../components/StatusBar';

//third party library
import {Picker} from '@react-native-picker/picker';

const Index = ({navigation, ...props}) => {
  const dropdown = [
    {
      name: 'size',
      options: [
        {
          value: 'sm',
          label: 'small t-shirt',
        },
        {
          value: 'md',
          label: 'medium t-shirt',
        },
        {
          value: 'lg',
          label: 'large t-shirt',
        },
      ],
    },
    {
      name: 'color',
      options: [
        {
          value: 'red',
          label: 'burnt red t-shirt',
        },
        {
          value: 'blue',
          label: 'sky blue t-shirt',
        },
        {
          value: 'green',
          label: 'hunter green t-shirt',
        },
      ],
    },
    {
      name: 'quality',
      options: [
        {
          value: 'cotton',
          label: 'cotton fabric',
        },
        {
          value: 'silk',
          label: 'silk fabric',
        },
        {
          value: 'Polo',
          label: 'Polo fabric',
        },
        {
          value: 'chicken',
          label: 'chicken fabric',
        },
      ],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleDropdownChange = (name, value) => {
    setSelectedOptions(prevState => ({...prevState, [name]: value}));
  };

  useEffect(() => {
    const defaultValues = {};
    dropdown.forEach(item => {
      defaultValues[item.name] = item.options[0].value;
    });
    setSelectedOptions(defaultValues);
  }, []);

  console.log('SelectedOptions ===>', selectedOptions.Electricwatt);

  return (
    <>
      <MyStatusBar backgroundColor={'#0283c3'} />
      <SafeAreaView className={'flex-1 bg-[#F9F9F9]'}>
        <Header
          title={'DropDown'}
          isBack
          _handleBack={() => navigation.goBack()}
          isTimer={false}
          CartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView contentContainerStyle={{paddingBottom: height * 0.3}}>
          <View>
            {dropdown.map((item, index) => (
              <View key={index}>
                <Text>{item.name}</Text>
                <Picker
                  selectedValue={
                    selectedOptions[item.name] || item.options[0].value
                  }
                  onValueChange={value =>
                    handleDropdownChange(item.name, value)
                  }>
                  {item.options.map((option, index) => (
                    <Picker.Item
                      key={index}
                      label={option.value}
                      value={option.value}
                    />
                  ))}
                </Picker>
              </View>
            ))}
            <Text>Selected Options:</Text>
            <Text>{JSON.stringify(selectedOptions)}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
