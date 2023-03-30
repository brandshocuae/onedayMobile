import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: 'https://cosmic-nasturtium-e0d795.netlify.app/'}}
      />
    </SafeAreaView>
  );
};

export default App;
