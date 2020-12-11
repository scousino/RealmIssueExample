/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getRealm} from './realm';
import {TestClass} from './TestClass';

const App: () => React$Node = () => {
  const testRealm = () => {
    let myRealm = getRealm();
    myRealm.write(() => {
      const test1 = myRealm.create('TestClass', TestClass.newTestClass());
      console.log('Test 1: ', test1.toJSON());
      const test = new TestClass();
      test.id = 'Hello';
      console.log('Test: ', test.toJSON());
      const test2 = myRealm.create(
        'TestClass',
        TestClass.newTestClass('Testing2'),
      );
      console.log('Test 2: ', test2.toJSON());
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title="Test Realm" onPress={testRealm} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
