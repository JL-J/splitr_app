import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListReceipt = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <Text style={styles.alignLeft}>{ props.dishName }</Text>
        <Text style={styles.alignRight}>£{ props.price }</Text>
      </View>
    </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  alignLeft: {
    textAlign: 'left',
  },
  alignRight: {
    textAlign: 'right',
  },
});

export default ListReceipt;
