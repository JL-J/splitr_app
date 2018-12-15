import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ListReceipt from '../components/listReceipt';
import { connect } from 'react-redux';

export class AddPeopleToDishes extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dishes: ["chips £4"]
  //   };
  // }

  namesOutput = () => {
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

  render() {
    return (
      <View>
        <View>
          <Text>Who owes what?</Text>
        </View>
        <View>
          <Text>{ this.props.dishes }</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { dishes } = state
  return { dishes }
};

export default connect(mapStateToProps)(AddPeopleToDishes);
