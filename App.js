import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {RootNavigator} from './src/navigators/stack.navigator';

//store
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';

//third party
// import messaging from '@react-native-firebase/messaging';

export default App = () => {
  console.disableYellowBox = true;

  // CDM

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
