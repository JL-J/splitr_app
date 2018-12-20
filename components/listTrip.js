import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ListTrip = (props) => {
    return (
      <TouchableOpacity>
        <View>
          <Text>Name: { props.tripName }</Text>
          <Text>Location: { props.tripLocation }</Text>
          <Text>Start Date: { props.tripStartDate }</Text>
          <Text>End Date: { props.tripEndDate }</Text>
        </View>
      </TouchableOpacity>
    );
}

export default ListTrip;
