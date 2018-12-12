import React from 'react';
import { Button } from 'react-native';

export default class SubmitButton extends React.Component {

  render()  {
    return (
      <Button
        onPress = { this.props.submitHandler }
        title="Submit"
        color="#841584"
      />
    )
  }

}
