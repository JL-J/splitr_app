import React from 'react';
import { Text, View } from 'react-native';
import SubmitButton from './submitButton'
import NameInput from './nameInput'
export default class Home extends React.Component {



  render() {
    return (
      <View>
        <Text>Hello World!</Text>
        <NameInput />
        <NameInput />
        <SubmitButton />
      </View>
    )
  }
}
