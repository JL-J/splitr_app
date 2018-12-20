import React from 'react';
import { FlatList, Button } from 'react-native';
import { Container, Header, Content, Text, Body, Title, Subtitle, Item, Form, Picker, Icon } from 'native-base'
import { connect } from 'react-redux';
import ListItem from '../components/listItem';
import PickerList from '../components/pickerList';
import { nameSelected } from '../redux/actions/nameSelected';

export class PickerPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.getSelectedValue = this.getSelectedValue.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(key, value) {
    this.props.nameSelectedRed(value, key);
    this.setState({
      [key]: value
    });
   }

   getSelectedValue(key) {
    return this.state[key];
   }

   static navigationOptions = ({ navigation, screenProps }) => ({
   headerTitle: 'Tasks',
   headerRight:
     <Button title='Next' onPress = {() => navigation.navigate('Summary')} />
   });

  render() {
    var out = (
      <Container>
          <Header>
            <Text>Who's responsible for each task for {this.props.currentTrip.tripName}?</Text>
          </Header>
        <FlatList
          data = { this.props.tasks }
          extraData={this.state}
          keyExtractor = {( item, index) => index.toString()}
          renderItem = { info => (
            <Content>
              <ListItem
                personName={ info.item.value.taskName }
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
                  selectedValue={this.getSelectedValue(info.item.key)}
                  onValueChange={(value) => this.onValueChange(info.item.key,value)}
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
    console.log(out);
    return out;
  }
}

const mapStateToProps = state => {
  return {
    peopleNames: state.peopleNames.peopleNames,
    tasks: state.tasks.tasks,
    trips: state.trips.trips,
    currentTrip: state.trips.currentTrip,
    nameSelectedState: state.nameSelected.nameSelected
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
