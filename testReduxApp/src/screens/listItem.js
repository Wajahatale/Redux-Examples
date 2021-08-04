import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const listItem = () => {
  const item = [null];
  //   const isDarkMode = useColorScheme() === 'dark';
  let i = 0;
  return (
    <SafeAreaView
    // style={backgroundStyle}
    >
      {item} ?
      <View>
        <Text>{item[i]}</Text>
        <Button title="X" onPress={() => this.removeItem()} />
      </View>
    </SafeAreaView>
  );
};
