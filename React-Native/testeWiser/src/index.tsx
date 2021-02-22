import React, {FunctionComponent} from 'react';
import {Routes} from './routes';
import {Provider} from 'react-redux';
import store from './store/';

const App: FunctionComponent = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
