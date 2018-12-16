
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ListReceipt from '../components/listReceipt';
import ListItem from '../components/listItem';
import { connect } from 'react-redux';

export class AddPeopleToDishes extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: false }
  }

  dishOutput = () => {
    return (
      <FlatList
      data = { this.props.dishes }
      keyExtractor = {( item, index) => index.toString()}
      renderItem = { info => (
        <TouchableOpacity
          style={[styles.item, this.state.selected &amp;&amp; styles.itemAlt]}
          onPress={()=> this.setState({selected: !this.state.selected})}
        >
          <View>
          <Text style={styles.alignLeft}>{ info.item.value.dishName }</Text>
          <Text style={styles.alignRight}>{ info.item.value.dishPrice }</Text>
          </View>
        </TouchableOpacity>
      )}
      />
    )
  }

  namesOutput = () => {
    return (
      <FlatList
      data = { this.props.peopleNames }
      keyExtractor = {( item, index) => index.toString()}
      renderItem = { info => (
        <ListItem
          personName={ info.item.value }
        />
      )}
      />
    )
  }

  render() {
    return (
      <View>
        <View>
          <Text>Who owes what?</Text>
        </View>
        <View>
          { this.namesOutput() }
        </View>
        <View>
          { this.dishOutput() }
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    peopleNames: state.peopleNames.peopleNames,
    dishes: state.dishes.dishes
  }
}

var styles = StyleSheet.create({
  alignLeft: {
    textAlign: 'left',
  },
  alignRight: {
    textAlign: 'right',
  },
  item: {
    backgroundColor: 'white',
  },
  itemAlt: {
    backgroundColor: 'red',
  },
});

export default connect(mapStateToProps)(AddPeopleToDishes);
