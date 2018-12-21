import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import ListItem from './listItem';
import ListTask from  './listTask';

export default class NameTaskList extends React.Component {

  render() {
    return (
    <View style={styles.list}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>
          { this.props.data.name.value}
        </Text>
      </View>
      <View>
      <FlatList
        data = {this.props.data.tasks}
        keyExtractor = {( item, index) => index.toString()}
        renderItem = { info => (
          <Text style={styles.text}>
            {info.item.value.taskName}, £{info.item.value.taskPrice}
          </Text>
        )}
      />
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Arial',
    fontWeight: '200',
    fontSize: 20,
    padding: 5,
    paddingLeft: 5
  },
  titlecontainer: {
    backgroundColor: '#d3d3d3'
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 18,
    paddingLeft: 20
  }
})
