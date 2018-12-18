import React from 'react';
import { FlatList } from 'react-native';
import { Container, Header, Content, Text, Body, Title, Subtitle, Form, Picker } from 'native-base'
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
            <Title>{this.props.currentTrip.tripName}, {this.props.currentTrip.tripLocation}</Title>
          </Body>
        </Header>
        <Content>
          <Title style={{color:"black"}}>Who is responsible?</Title>
          <FlatList
            data = { this.props.tasks }
            keyExtractor = {( item, index) => index.toString()}
            renderItem = { info =>
              <Text>{ info.item.value.taskName }  £{ info.item.value.taskPrice }</Text>
            }
          />
          <Form>
           <Picker
             note
             mode="dropdown"
             style={{ width: 120 }}
             selectedValue={this.state.selected}
             onValueChange={this.onValueChange.bind(this)}
           >
            <Picker.Item label="Bill" value="bill"/>
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
    tasks: state.tasks.tasks,
    trips: state.trips.trips,
    currentTrip: state.trips.currentTrip
  }
}

export default connect(mapStateToProps)(PickerPage);
