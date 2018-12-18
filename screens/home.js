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
         <Title>{this.props.currentTrip.tripName}, {this.props.currentTrip.tripLocation}</Title>
        </Header>
        <Content>
          <Title style={{color:"black"}}>Whos attending?</Title>
          <NameInput
            nameHandler = { this.personNameChangeHandler }
          />
          <SubmitButton
            submitHandler = { this.nameSubmitHandler }
          />
          { this.namesOutput() }
          <NavigationButton
            navigate = {() => this.props.navigation.navigate('AddDishes')}
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

export default connect(mapStateToProps, mapDistpatchToProps)(Home)
