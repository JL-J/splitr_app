import React from 'react';
import { Text, View , FlatList, Button } from 'react-native';
import { Header, Container} from 'native-base'
import SubmitButton from '../components/submitButton';
import NameInput from '../components/nameInput';
import ListItem from '../components/listItem';
import { connect } from 'react-redux';
import { addName } from '../redux/actions/name';

state = {
  personName: '',
  peopleNames: []
}

class Home extends React.Component {

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

  render() {
    return (
      <Container>
        <Header>
              <Text>{this.props.currentTrip.tripName}, </Text>
              <Text>{this.props.currentTrip.tripLocation}</Text>
        </Header>
        <View>
          <View>
            <Text>Add participiants</Text>
            <NameInput
              nameHandler = { this.personNameChangeHandler }
            />
            <SubmitButton
              submitHandler = { this.nameSubmitHandler }
            />
          </View>
          <View>
            { this.namesOutput() }
          </View>
          <View>
            <Button
              title=">"
              onPress={() => this.props.navigation.navigate('AddDishes')}
            />
          </View>
        </View>
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

export default connect(mapStateToProps, mapDistpatchToProps)(Home)
