import React from 'react';
import { Text, View , FlatList } from 'react-native';
import SubmitButton from './submitButton'
import NameInput from './nameInput'
import ListItem from './listItem'
import { connect } from 'react-redux';
import { addName } from '../actions/name'

class Home extends React.Component {

  state = {
    personName: '',
    peopleNames: []
  }

  nameSubmitHandler = () => {
    if(this.state.personName.trim() === '') {
      return;
    }
    this.props.add(this.state.personName);
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
    add: (name) => {
      dispatch(addName(name))
    }
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Home)
