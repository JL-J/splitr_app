import React from 'react';
import { Button, Text, connectStyle } from 'native-base';

export default class SubmitButton extends React.Component {

  render()  {
    return (
      <Button block style={styles.button}
        onPress = { this.props.submitHandler }
      >
        <Text style={styles.text}>Submit</Text>
      </Button>
    )
  }
}

const styles = {
  button: {
    backgroundColor: '#e671a7'
  },
  text: {
    letterSpacing: 5,
    fontWeight: 'bold',
    fontFamily: 'Arial'
  }
}
