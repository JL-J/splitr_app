import React from 'react';
import { FlatList } from 'react-native';
import { Container, Header, Content, Text, Body, Title, Button } from 'native-base'
import SubmitButton from '../components/submitButton'
import NavigationButton from '../components/navigationButton'
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
    <Container>
      <Header>
        <Body>
          <Title>Tasks</Title>
        </Body>
      </Header>
      <Content>
        <NameInput
          nameHandler = { this.dishNameChangeHandler }
        />
        <PriceInput
          nameHandler = { this.dishPriceChangeHandler }
        />
        <SubmitButton
          submitHandler = { this.orderSubmitHandler }
        />
        { this.namesOutput() }
         <NavigationButton
           navigate = {() => this.props.navigation.navigate('Picker')}
         />
      </Content>
    </Container>
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
