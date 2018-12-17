import React from 'react';
import { FlatList } from 'react-native';
import { Container, Header, Content, Text, Body, Title, Form, Picker } from 'native-base'
import { connect } from 'react-redux';

export class PickerPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }

  onValueChange(value: string) {
     this.setState({
       selected: value
     });
   }

  dynamicPickerList() {
    return ( this.props.peopleNames.map(name => {
       <Picker.Item label={name} value={name} />
    }));
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Who owes what?</Title>
          </Body>
        </Header>
        <Content>
          <FlatList
            data = { this.props.dishes }
            keyExtractor = {( item, index) => index.toString()}
            renderItem = { info =>
              <Text>{ info.item.value.dishName }  £{ info.item.value.dishPrice }</Text>
            }
          />
          <Form>
           <Picker
             mode="dropdown"
             style={{ width: 120 }}
             selectedValue={this.state.selected}
             onValueChange={this.onValueChange.bind(this)}>
            { this.props.peopleNames.map( (name) => {
              <Picker.Item label={name} value={name} />
            })}
            </Picker>
            </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    peopleNames: state.peopleNames.peopleNames,
    dishes: state.dishes.dishes
  }
}

export default connect(mapStateToProps)(PickerPage);
