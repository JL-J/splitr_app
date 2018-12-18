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
  }

  onValueChange2(key, value) {
    console.log(this.reduxstate);
    this.props.nameSelected(value, key);
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
                  placeholder="FOOD"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.nameSelectedState}
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
    nameSelected: (nameId, dishId) => {
      dispatch(nameSelected(nameId, dishId))
    }
  }
}
export default connect(mapStateToProps,mapDistpatchToProps)(PickerPage);
