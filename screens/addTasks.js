import React from 'react';
import { FlatList, Button, StyleSheet } from 'react-native';
import { Container, Header, Content, Text, Body, Title } from 'native-base'
import SubmitButton from '../components/submitButton'
import Input from '../components/input';
import ListItem from '../components/listItem'
import HeaderBanner from '../components/header';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions/task'

state = {
  taskName: '',
  taskPrice: '',
  task: {},
  tasks: []
}

class AddTasks extends React.Component {

  orderSubmitHandler = () => {
    if(this.state.taskName.trim() === '') {
      return;
    }
    let task = { taskName: this.state.taskName, taskPrice: this.state.taskPrice };
    this.props.addTask(task)
  }

  taskNameChangeHandler = (value) => {
    this.setState({
      taskName: value
    });
  }

  taskPriceChangeHandler = (value) => {
    this.setState({
      taskPrice: value
    });
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
  headerTitle: 'Tasks',
  headerRight:
    <Button title='Next' onPress = {() => navigation.navigate('Picker')} />
  });

  namesOutput = () => {
    return (
      <FlatList
      data = { this.props.tasks }
      keyExtractor = {( item, index) => index.toString()}
      renderItem = { info => (
        <ListItem
          item = {`${ info.item.value.taskName }    £${ info.item.value.taskPrice }`}
        />
      )}
      />
    )
  }

  render() {
   return (
    <Container>
    <HeaderBanner
      title = {`What needs to be done for ${this.props.currentTrip.tripName}?`}
    />
      <Content>
        <Content style={styles.container}>
        <Input
          onChangeText = { this.taskNameChangeHandler.bind(this) }
          placeholder = {"Task"}
        />
        <Input
          onChangeText = { this.taskPriceChangeHandler.bind(this)}
          placeholder = {"Estimated cost"}
        />
        </Content>
        <Content>
          <SubmitButton
            submitHandler = { this.orderSubmitHandler }
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
    tasks: state.tasks.tasks,
    trips: state.trips.trips,
    currentTrip: state.trips.currentTrip
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    addTask: (task) => {
      dispatch(addTask(task))
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
})

export default connect(mapStateToProps, mapDistpatchToProps)(AddTasks)
