import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ListReceipt = (props) => {
    return (
      <TouchableOpacity>
        <View>
          <Text>{ props.dishName }</Text>
          <Text>£{ props.price }</Text>
        </View>
      </TouchableOpacity>
    );
}

export default ListReceipt;
