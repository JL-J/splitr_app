import React from 'react';
import { Text, View , FlatList } from 'react-native';
import SubmitButton from '../components/submitButton'
import NameInput from '../components/nameInput'
import PriceInput from '../components/priceInput'
import ListReceipt from '../components/listReceipt'
import { connect } from 'react-redux';
import { addDish } from '../redux/actions/dish'

state = {
  dishName: '',
  dishPrice: '',
  dish: {},
  dishes: []
}

class AddDishes extends React.Component {

  orderSubmitHandler = () => {
    if(this.state.dishName.trim() === '') {
      return;
    }
    let dish = { dishName: this.state.dishName, dishPrice: this.state.dishPrice };
    // this.props.addPerson(this.state.dishName);
    this.props.addDish(dish)
  }

  dishNameChangeHandler = (value) => {
    this.setState({
      dishName: value
    });
  }

  dishPriceChangeHandler = (value) => {
    this.setState({
      dishPrice: value
    });
  }

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
          <Text>Add your Dish:</Text>
          <NameInput
            nameHandler = { this.dishNameChangeHandler }
          />
          <PriceInput
            nameHandler = { this.dishPriceChangeHandler }
          />
          <SubmitButton
            submitHandler = { this.orderSubmitHandler }
          />
        </View>
        <View>
          { this.namesOutput() }
        </View>
        <View>
         <Button
           title=">"
           onPress={() => this.props.navigation.navigate('Picker')}
         />
       </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dishes.dishes
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    addDish: (dish) => {
      dispatch(addDish(dish))
    }
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(AddDishes)
