import React from 'react';
import { Button, Text } from 'native-base';

export default class SubmitButton extends React.Component {

  render()  {
    return (
      <Button block light
        onPress = { this.props.submitHandler }
      >
        <Text>Submit</Text>
      </Button>
    )
  }

}
