import React from 'react';
import store from './store';
import { Provider } from 'react-redux'
import Localidade from './components/Localidades';


function App() {
  return (
    <Provider store={store}>
      <Localidade />
    </Provider>
  );
}

export default App;
