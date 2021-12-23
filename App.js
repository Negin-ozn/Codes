
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/store/reducer/index';
import MainScreen from './src/MainScreen';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

export default function App() {

  const store = createStore(reducers, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
