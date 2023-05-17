import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {RootNavigator} from './src/navigators/stack.navigator';

//store
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';

//third party
// import messaging from '@react-native-firebase/messaging';
import { Settings } from 'react-native-fbsdk-next';

export default App = () => {
  console.disableYellowBox = true;

  // CDM

  Settings.setAppID('1440158213191276');
  Settings.initializeSDK()

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};
