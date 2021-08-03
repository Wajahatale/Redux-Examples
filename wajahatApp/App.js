/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, Component} from 'react';
import {SafeAreaView, StyleSheet, View, Button, Text} from 'react-native';
import { connect } from 'react-redux';
import { changeCount } from './actions/counts';
import { bindActionCreators } from 'redux';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class App extends Component {
  // state = {count: 0};
  decrementCount() {
    let {count, actions } = this.props;
    count--;
    actions.changeCount(count);
  }
  incrementCount() {
    let {count, actions } = this.state;
    count++;
    actions.changeCount(count);
  }
  render() {
    const {count} = this.props;
    return (
      <SafeAreaView>
        <View styles={styles.container}>
          <Button title="increment" onPress={() => this.incrementCount()} />
          <Text>{count}</Text>
          <Button title="decrement" onPress={() => this.decrementCount()} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  count: state.count,
});

const ActionCreators = Object.assign(
  {},
  changeCount,
);
const mapDispatchToProps =dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
