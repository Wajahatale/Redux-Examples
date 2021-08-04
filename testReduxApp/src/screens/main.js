import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

const main = () => {
  //   const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
    // style={backgroundStyle}
    >
      <StatusBar
      //   barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={backgroundStyle}
      >
        <View
        //   style={{
        //     backgroundColor: isDarkMode ? Colors.black : Colors.white,
        //   }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
