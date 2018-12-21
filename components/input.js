import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default class Input extends React.Component {

  render()  {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          onChangeText = { this.props.onChangeText}
          placeholder= {this.props.placeholder}
          value= {this.props.value}
        />
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1
    },
    container: {
      padding: 12,
    }
  })
