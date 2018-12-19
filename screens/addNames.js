import React from 'react';
import { Text, View , FlatList } from 'react-native';
import { Header, Container, Content, Button, Title, Subtitle} from 'native-base'
import SubmitButton from '../components/submitButton';
import NavigationButton from '../components/navigationButton'
import NameInput from '../components/nameInput';
import ListItem from '../components/listItem';
import { connect } from 'react-redux';
import { addName } from '../redux/actions/name';

state = {
  personName: '',
  peopleNames: []
}

class AddNames extends React.Component {

  nameSubmitHandler = () => {
    if(this.state.personName.trim() === '') {
      return;
    }
    this.props.addPerson(this.state.personName);
  }

  personNameChangeHandler = (value) => {
    this.setState({
      personName: value
    });
  }

  namesOutput = () => {
    return (
      <FlatList
      data = { this.props.peopleNames }
      keyExtractor = {( item, index) => index.toString()}
      renderItem = { info => (
        <ListItem
          personName={ info.item.value }
          />
      )}
      />
    )
  }

  static navigationOptions = {
  headerTitle: "Guests",
  headerRight: (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
    ),
  };

  render() {
    return (
      <Container>
        <Header>
        <Text>Who's going to {this.props.currentTrip.tripName}?</Text>
        </Header>
        <Content>
          <NameInput
            nameHandler = { this.personNameChangeHandler }
          />
          <SubmitButton
            submitHandler = { this.nameSubmitHandler }
          />
          { this.namesOutput() }
          <NavigationButton
            navigate = {() => this.props.navigation.navigate('AddTasks')}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    peopleNames: state.peopleNames.peopleNames,
    trips: state.trips.trips,
    currentTrip: state.trips.currentTrip
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    addPerson: (name) => {
      dispatch(addName(name))
    }
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(AddNames)
