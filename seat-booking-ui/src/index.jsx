import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/store/store';
import App from './App';

const { store, persistor } = configureStore();
const root = document.getElementById('app');

// Render the preloader on initial load

render(<App store={store} persistor={persistor} />, root);

