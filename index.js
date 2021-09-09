import React from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';
import { name as appName } from './app.json';
import { persistor, store } from './src/store';
import theme from './src/styles/rn-elements_theme';


const AppProvider = () => (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </ReduxProvider>
);

AppRegistry.registerComponent(appName, () => AppProvider);
