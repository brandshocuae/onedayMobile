import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

//local import
import Header from '../../components/Header';
import MyStatusBar from '../../components/StatusBar';

//third party library
import SelectDropdown from 'react-native-select-dropdown';

const Index = ({navigation, ...props}) => {
  const dropdown = [
    {
      name: 'color',
      options: [
        {
          value: 'blue',
        },
        {
          value: 'purple',
        },
        {
          value: 'orange',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'color',
      options: [
        {
          value: 'blue',
        },
        {
          value: 'purple',
        },
        {
          value: 'orange',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'color',
      options: [
        {
          value: 'blue',
        },
        {
          value: 'purple',
        },
        {
          value: 'orange',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
    {
      name: 'size',
      options: [
        {
          value: 'SM',
        },
        {
          value: 'MD',
        },
        {
          value: 'XL',
        },
        {
          value: 'XXL',
        },
      ],
    },
  ];
  const newDropdown = dropdown.map(item => ({
    name: item.name,
    options: item.options.map(option => option.value),
  }));

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
    displayObject(defaultValues);
  }, []);

  const displayObject = obj => {
    let displayString = '';

    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        displayString += `${obj[prop]}-`;
      }
    }

    // Remove the last "-" separator if it exists
    if (displayString.endsWith('-')) {
      displayString = displayString.slice(0, -1);
    }
  };

  const displayOption = () => {
    displayObject(selectedOptions);
  };

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
            {newDropdown.map((item, index) => (
              <View key={index}>
                <Text className={'text-2xl text-black font-semibold mb-4'}>
                  {item.name}
                </Text>
                {/* <Picker
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
                </Picker> */}
                <SelectDropdown
                  data={item.options}
                  defaultValueByIndex={0}
                  onSelect={(selectedItem, index) => {
                    handleDropdownChange(item.name, selectedItem);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  buttonStyle={{
                    backgroundColor: 'white',
                    width: width * 0.9,
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'gray',
                  }}
                  dropdownStyle={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                  }}
                  // dropdownOverlayColor="transparent"
                />
              </View>
            ))}
            <Text>Selected Options:</Text>
            <Text>{JSON.stringify(selectedOptions)}</Text>
          </View>
          <TouchableOpacity
            onPress={() => displayOption()}
            className={
              'w-80 py-4 bg-blue-600 flex justify-center items-center self-center mt-12'
            }>
            <Text className={'text-white font-semibold text-lg'}>
              Generate Slug
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
