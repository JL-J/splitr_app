import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ListTask = (props) => {
    return (
      <TouchableOpacity>
        <View>
          <Text>{ props.taskName }</Text>
          <Text>£{ props.taskPrice }</Text>
        </View>
      </TouchableOpacity>
    );
}

export default ListTask;
