import React from 'react';
import { FlatList, TextInput, Alert, Button, StyleSheet } from 'react-native';
import { Container, Content, Text, Body, DatePicker, Item, Form, Icon} from 'native-base';
import SubmitButton from '../components/submitButton'
import NavigationButton from '../components/navigationButton'
import Calendar from '../components/calendar'
import Input from '../components/input';
import HeaderBanner from '../components/header';
import { connect } from 'react-redux';
import { addTrip } from '../redux/actions/trip';

state = {
  tripName: '',
	tripLocation: '',
  tripStartDate: new Date(),
  tripEndDate: new Date(),
  currentTrip: {},
  trips: []
}

class AddTrip extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tripName: '',
      tripLocation: '',
      tripStartDate: new Date(),
      tripEndDate: new Date(),
      currentTrip: {},
      trips: []
    };
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

  tripStartDateChangeHandler = (value) => {
    this.setState({
      tripStartDate: value
    });
  }

  tripEndDateChangeHandler = (value) => {
    this.setState({
      tripEndDate: value
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
          tripStartDate={ info.item.value.tripStartDate }
          tripEndDate={ info.item.value.tripEndDate }
          />
      )}
      />
    )
  }

  tripSubmitHandler = () => {
    if(this.state.tripName.trim() === '') {
      Alert.alert('Not submitted', 'Please enter trip name' )
      return;
    }
    let trip = {
      tripName: this.state.tripName,
      tripLocation: this.state.tripLocation,
      tripStartDate: this.state.tripStartDate,
      tripEndDate: this.state.tripEndDate,
    };
    this.props.addTrip(trip);
    Alert.alert('Submitted', trip.tripName )
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
  headerTitle: 'New Trip',
  headerRight:
    <Button title='Next' onPress = {() => navigation.navigate('AddNames')} />
  });

  render() {
    return (
      <Container style={styles.container}>
        <HeaderBanner
          title = {"Event details"}
        />
        <Content>
          <Input
            onChangeText = { this.tripNameChangeHandler.bind(this)}
            placeholder= {"Event Name"}
          />
          <Input
            onChangeText = { this.tripLocationChangeHandler.bind(this)}
            placeholder= {"Location"}
          />
        <Calendar
          placeholder = {"Start Date"}
          onDateChangeHandler = {this.tripStartDateChangeHandler.bind(this)}
        />
        <Calendar
          placeholder = {"End Date"}
          onDateChangeHandler = {this.tripEndDateChangeHandler.bind(this)}
        />
        <SubmitButton
          submitHandler =  {this.tripSubmitHandler}
        />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15
  },
  input: {
    padding: 12,
  }
});

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
