import React, {Component} from 'react';
import {TextInput, SafeAreaView} from 'react-native';

class input extends Component {
  render() {
    return (
      <SafeAreaView>
        <TextInput onChangeText={this.props.onChangeText} />
      </SafeAreaView>
    );
  }
}

export default input;
