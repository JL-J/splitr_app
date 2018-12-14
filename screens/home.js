import React from 'react';
import { Text, View , FlatList, Button } from 'react-native';
import SubmitButton from '../components/submitButton'
import NameInput from '../components/nameInput'
import ListItem from '../components/listItem'
import { connect } from 'react-redux';
import { addName } from '../redux/actions/name'

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
      <View>
        <View>
          <Text>Hello World!</Text>
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
    );
  }
}

const mapStateToProps = state => {
  return {
    peopleNames: state.peopleNames.peopleNames
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
