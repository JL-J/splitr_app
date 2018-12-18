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

              <Form>
              <Text>{ info.item.value.dishName }  £{ info.item.value.dishPrice }</Text>
              <Picker
               style={{ width: 120, backgroundColor: "red" }}
               placeholder={this.state.selected}
               selectedValue={this.state.selected}
               onValueChange={ this.onValueChange.bind(this) }>
               <Picker.Item label="TBD" value="test"/>
                {
                this.props.peopleNames.map( (name) =>
                <Picker.Item key={name.key} label={name.value} value={name.value} />
                )}
              </Picker>
              </Form>
            }
            />
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
