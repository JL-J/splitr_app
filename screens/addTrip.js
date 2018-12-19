import React from 'react';
import { FlatList, TextInput, Alert} from 'react-native';
import { Container, Header, Content, Text, Body, Title, Subtitle, Button, DatePicker, Item, Form, Icon} from 'native-base';
import SubmitButton from '../components/submitButton'
import NavigationButton from '../components/navigationButton'
import Calendar from '../components/calendar'
import ListTrip from '../components/listTrip';
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

  static navigationOptions = {
  headerTitle: 'New Trip',
  headerRight: (
    <Button title='Next' onPress={() => alert('This is a button!')} />
  )};

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
      Alert.alert(' Not submitted', 'Please enter trip name' )
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


  render() {
    return (
      <Container>
      <Header>
      <Title> 🌎 </Title>
      <Text>Enter the details of your event or trip:</Text>
      </Header>
        <Content>
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
          <Text>Start Date:</Text>
          <Calendar
            onDateChangeHandler = {this.tripStartDateChangeHandler.bind(this)}
          />
          <Text>End Date:</Text>
          <Calendar
            onDateChangeHandler = {this.tripEndDateChangeHandler.bind(this)}
          />
          <SubmitButton
            submitHandler =  {this.tripSubmitHandler}
          />
          <NavigationButton
            navigate = {() => this.props.navigation.navigate('AddNames')}
          />
        </Content>
      </Container>
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
