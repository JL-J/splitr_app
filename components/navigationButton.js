import React from 'react';
import { Button, Text } from 'native-base';

export default class NavigationButton extends React.Component {

  render()  {
    return (
      <Button block
        onPress = { this.props.navigate }
      >
        <Text>Next</Text>
      </Button>
    )
  }

}
