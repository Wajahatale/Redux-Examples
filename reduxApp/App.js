/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { setConstantValue } from 'typescript';
import {INPUT} from './src/components/composer';

class App extends Component {
  // const isDarkMode = useColorScheme() === 'dark';
  const [value, setValue]= useState<string>(null);
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.containertop}>
            <Text>Ola</Text>
          </View>
        </ScrollView>
        <View style={styles.containercenter}>
          <Text>Ola</Text>
          <INPUT onChangeText={(text)=> setValue(text)}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containercenter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containertop: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 500,
  },
});

export default App;
