import React from 'react';
import { Picker } from 'native-base';
import { FlatList } from 'react-native';

export default class PickerList extends React.Component {
  render() {
    return (
      <FlatList
      data = { this.props.list }
      keyExtractor = {( item, index) => index.toString()}
      renderItem = { info => (
        <Picker.Item
          label={ info.item.value.personName }
          value={ info.item.key}
        />
      )}
      />
    );
  }
}

