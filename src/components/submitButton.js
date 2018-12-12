import React from 'react';
import { Button } from 'react-native';

export default class SubmitButton extends React.Component {

  render()  {
    return (
      <Button
        onPress={() => this.setState({dummy: 1})}
        title="Submit"
        color="#841584"
      />
    )
  }

}
