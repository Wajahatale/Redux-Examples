import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

class textInput extends Component {
  constructor(props) {
    super(props);
    const {height, width} = Dimensions.get('screen');
    this.state = {
      INPUT_STATE: 'EMPTY',
      value: '',
      input_value_exist: true,
      error_exist: true,
      placeholder: string,
    };
  }

  clearInputField = () => {
    this.setState({value: '', INPUT_STATE: 'EMPTY'});
    this.props.onChangeText('');
    this.props.functionOnClearInput();
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
        />
      </View>
    );
  }
}

export default textInput;

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: 'center',
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    marginVertical: 10,
  },
  input: {
    padding: 15,
  },
});
