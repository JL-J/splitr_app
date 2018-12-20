import React from 'react';
import { Text, FlatList, View } from 'react-native';
import ListItem from './listItem';
import ListTask from  './listTask';

export default class NameTaskList extends React.Component {

  render() {
    return (
    <View>
      <ListItem
        personName = { this.props.data.name.value}
      />
      <FlatList
        data = {this.props.data.tasks}
        keyExtractor = {( item, index) => index.toString()}
        renderItem = { info => (
          <ListTask
            taskName={info.item.value.taskName}
            taskPrice={info.item.value.taskPrice}
          />
        )}
      />
    </View>
    )
  }
}
