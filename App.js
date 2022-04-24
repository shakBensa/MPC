import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Trigger from './components/Button'


export default props => {
  let [fontsLoaded] = useFonts({
    'SigmarOne-Regular': require('./assets/fonts/SigmarOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, paddingVertical: 50, alignItems: 'center' }}>
      <Text style={{ fontFamily: 'SigmarOne-Regular', fontSize: 40 }}>MPC</Text>
      <View style={styles.buttonRow}>
        <Trigger />
        <Trigger />
        <Trigger />
        <Trigger />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    padding: 5
  },
})