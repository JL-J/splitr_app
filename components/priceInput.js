import React from 'react';
import { TextInput } from 'react-native';

export default class PriceInput extends React.Component {

  render() {
    return (
      <TextInput
      onChangeText = { this.props.nameHandler }
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      placeholder="Estimated cost"
      />
    )
  }
}
