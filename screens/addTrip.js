import React from 'react';
// import { Container, Header, Content, Text, Body, Title, Form, Picker } from 'native-base'
import { Text, View , FlatList, TextInput, Button } from 'react-native';
import { DatePicker} from 'native-base';
import ListTrip from '../components/listTrip';
import { connect } from 'react-redux';
import { addTrip } from '../redux/actions/trip'

state = {
  tripName: '',
	tripLocation: '',
  tripDate: new Date(),
  currentTrip: {},
  trips: []
}

class AddTrip extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tripName: '',
      tripLocation: '',
      tripDate: new Date(),
      currentTrip: {},
      trips: []
    };
  }

  tripSubmitHandler = () => {
    if(this.state.tripName.trim() === '') {
      return;
    }
    let trip = {
      tripName: this.state.tripName,
      tripLocation: this.state.tripLocation,
      tripDate: this.state.tripDate
    };
    this.props.addTrip(trip);
  }

  tripNameChangeHandler = (value) => {
    this.setState({
      tripName: value
    });
  }

  tripLocationChangeHandler = (value) => {
    this.setState({
      tripLocation: value
    });
  }

  tripDateChangeHandler = (value) => {
    this.setState({
      tripDate: value
    });
  }

  tripsOutput = () => {
    return (
      <FlatList
      data = { this.props.trips }
      keyExtractor = {( item, index) => index.toString()}
      renderItem = { info => (
        <ListTrip
          tripName={ info.item.value.tripName }
          tripLocation={ info.item.value.tripLocation }
          tripDate={ info.item.value.tripDate }
          />
      )}
      />
    )
  }

  render() {
    return (
        <View>
          <View>
            <Text>Add your trip details</Text>
            <TextInput
              onChangeText = { this.tripNameChangeHandler.bind(this)}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              placeholder="Trip Name"
            />
            <TextInput
              onChangeText = { this.tripLocationChangeHandler.bind(this)}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              placeholder="Location"
            />
            <Text>Date:</Text>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2020, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.tripDateChangeHandler.bind(this)}
            />
            <Button
              onPress = {this.tripSubmitHandler}
              title="Submit"
              color="#841584"
            />
          </View>
          <View>
            <Button
            title=">"
            onPress={() => this.props.navigation.navigate('AddNames')}
          />
          </View>
        </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips.trips,
    currentTrip: state.trips.currentTrip
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    addTrip: (trip) => {
      dispatch(addTrip(trip))
    }
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(AddTrip)
