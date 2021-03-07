/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppRouters from './AppRouters'
import { Provider } from 'react-redux'
import Store from '../src/store'

export default App = () => {

  return (
    <Provider store={Store}>
      <AppRouters />
    </Provider>
  );

};



