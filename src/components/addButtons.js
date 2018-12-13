import React from 'react';
import { Button } from 'react-native';

export default class AddButton extends React.Component {

  render()  {
    return (
      <Button
        onPress = { this.props.submitHandler }
        title="Add"
        color="#841584"
      />
    )
  }

}
