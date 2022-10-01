import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store} from "./src/state/Store"


export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Home/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    zIndex:-1,
    height:Dimensions.get("screen").height,
    width:Dimensions.get("window").width,
    backgroundColor: 'transparent',
  },
});
