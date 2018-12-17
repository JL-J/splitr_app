import React from 'react';
import { FlatList } from 'react-native';
import { Container, Header, Content, Text, Body, Title, Form, Item, Picker,Icon } from 'native-base'
import { connect } from 'react-redux';
import ListReceipt from '../components/listReceipt'
import PickerList from '../components/pickerList';

export class PickerPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
    console.log(this.props.peopleNames);
  }

  onValueChange2(value: string) {
     this.setState({
       selected2: value
     });
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
              <ListReceipt
                dishName={ info.item.value.dishName }
              />
              <Form>
              <Item picker>
                <Picker
                  mode="dropdown"
                  style={{ width: undefined }}
                  placeholder="FOOD"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
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
    reduxstate: state
  }
}

export default connect(mapStateToProps)(PickerPage);
