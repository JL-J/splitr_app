import React from 'react';
import { Text, View , FlatList, TextInput } from 'react-native';
import SubmitButton from '../components/submitButton'
import ListTrip from '../components/listTrip'
import { connect } from 'react-redux';
import { addTrip } from '../redux/actions/trip'

state = {
  tripName: '',
	tripLocation: '',
	tripDate: '',
  currentTrip: {},
  trips: []
}

class AddTrip extends React.Component {

  tripSubmitHandler = () => {
    if(this.state.tripName.trim() === '') {
      return;
    }
    let trip = {
      tripName: this.state.tripName,
      tripLocation: this.state.tripLocation,
      tripDate: this.state.tripDate
    };
    this.props.addTrip(trip)
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
            <TextInput
              onChangeText = { this.tripDateChangeHandler.bind(this)}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              placeholder="Date"
            />
            <SubmitButton
              submitHandler = { this.tripSubmitHandler }
            />
          </View>
          <View>
            { this.tripsOutput() }
          </View>
        </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips.trips
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
