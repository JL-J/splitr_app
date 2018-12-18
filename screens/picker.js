import React from 'react';
import { FlatList } from 'react-native';
import { Container, Header, Content, Text, Body, Title, Form, Item, Picker,Icon } from 'native-base'
import { connect } from 'react-redux';
import ListItem from '../components/listItem';
import PickerList from '../components/pickerList';
import { nameSelected } from '../redux/actions/nameSelected';

export class PickerPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
    this.getSelectedValue = this.getSelectedValue.bind(this)
  }

  onValueChange2(key, value) {
    // console.log(this.props.reduxstate);
    this.props.nameSelectedRed(value, key); // redux
    this.setState({ //compoennet state
      [key]: value
    })
    console.log(this.props.reduxstate);
    // console.log(this.props.reduxstate);
    //console.log(this.props.reduxstate,key, value);
   }

   getSelectedValue(key) {
    // console.log(this.props.reduxstate);
    // console.log('key',this.state[key]);
    return this.props.nameSelectedState[key];
   }

  render() {
    return (
      <Container>
        <Header />
        <FlatList
          data = { this.props.dishes }
          keyExtractor = {( item, index) => index.toString()}
          renderItem = { info => (
            <Content>
              <ListItem
                personName={ info.item.value.dishName }
              />
              <Form>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-dropdown" />}
                  style={{ width: undefined }}
                  placeholder="Person"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.getSelectedValue(info.item.key)}//{this.state[info.item.key]}//
                  onValueChange={(value) => this.onValueChange2(info.item.key,value)}
                >
                <Picker.Item label="NAME" value="0"/>
                { this.props.peopleNames.map((item) =>
                  <Picker.Item
                    label={ item.value }
                    value={ item.value }
                    key={item.key}
                  />)
                }
                </Picker>
              </Item>
            </Form>
          </Content>
      )}
      />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    peopleNames: state.peopleNames.peopleNames,
    dishes: state.dishes.dishes,
    nameSelectedState: state.nameSelected.nameSelected,
    reduxstate: state
  }
}
const mapDistpatchToProps = dispatch => {
  return {
    nameSelectedRed: (nameId, dishId) => {
      dispatch(nameSelected(nameId, dishId))
    }
  }
}
export default connect(mapStateToProps,mapDistpatchToProps)(PickerPage);
