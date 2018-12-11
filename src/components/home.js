import React from 'react';
import { Text, View, Button } from 'react-native';
import SubmitButton from './submitButton'

export default class Home extends React.Component {

  render() {
    return (
      <View>
        <Text>Hello World!</Text>
        <SubmitButton />
      </View>

    )
  }
}
