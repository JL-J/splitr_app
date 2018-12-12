import React from 'react';
import { TextInput } from 'react-native';

export default class NameInput extends React.Component {


  render() {
    return (
      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      placeholder="Name"
      />
    )
  }
}
