import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
    return (
      <TouchableOpacity>
        <View>
          <Text>{ props.personName }</Text>
        </View>
      </TouchableOpacity>
    );
}

export default ListItem;
