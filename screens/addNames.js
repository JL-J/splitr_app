import React from 'react';
import { Text, View , FlatList, Button, StyleSheet } from 'react-native';
import { Header, Container, Content,Title, Subtitle} from 'native-base'
import SubmitButton from '../components/submitButton';
import NavigationButton from '../components/navigationButton'
import ListItem from '../components/listItem';
import HeaderBanner from '../components/header';
import Input from '../components/input';
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
          item={ info.item.value }
        />
      )}
      />
    )
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
  headerTitle: 'Guests',
  headerRight:
    <Button title='Next' onPress = {() => navigation.navigate('AddTasks')} />
  });

  render() {
    return (
      <Container>
        <HeaderBanner
          title = {`Who's attending`}
        />
        <Content>
          <Content style={styles.container}>
            <Input
              onChangeText = { this.personNameChangeHandler.bind(this) }
              placeholder= {"Name"}
            />
          </Content>
          <Content>
            <SubmitButton
              submitHandler = { this.nameSubmitHandler }
            />
          </Content>
          <Content style={styles.container}>
            { this.namesOutput() }
          </Content>
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

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
})

export default connect(mapStateToProps, mapDistpatchToProps)(AddNames)
