import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ListReceipt from '../components/listReceipt';
import ListItem from '../components/listItem';
import { connect } from 'react-redux';

export class AddPeopleToDishes extends React.Component {

  dishOutput = () => {
    console.log(this.props.dishes)
    return (
      <FlatList
      data = { this.props.dishes }
      keyExtractor = {( item, index) => index.toString()}
      renderItem = { info => (
        <ListReceipt
          dishName={ info.item.value.dishName }
          price={ info.item.value.dishPrice }
          />
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
          onPress={ style = styles.nameColour }
          />
      )}
      />
    )
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.nameColour}>Who owes what?</Text>
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
})

export default connect(mapStateToProps)(AddPeopleToDishes);
