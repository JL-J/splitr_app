import React from 'react';
import { FlatList, Button } from 'react-native';
import { Container, Header, Content, Text, Body, Title } from 'native-base'
import SubmitButton from '../components/submitButton'
import NavigationButton from '../components/navigationButton'
import NameInput from '../components/nameInput'
import PriceInput from '../components/priceInput'
import ListTask from '../components/listTask'
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
        <ListTask
          taskName={ info.item.value.taskName }
          taskPrice={ info.item.value.taskPrice }
        />
      )}
      />
    )
  }

  render() {
   return (
    <Container>
      <Header>
        <Text>What needs to be done or bought for {this.props.currentTrip.tripName}?</Text>
      </Header>
      <Content>
        <NameInput
          nameHandler = { this.taskNameChangeHandler }
        />
        <PriceInput
          nameHandler = { this.taskPriceChangeHandler }
        />
        <SubmitButton
          submitHandler = { this.orderSubmitHandler }
        />
        { this.namesOutput() }
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

export default connect(mapStateToProps, mapDistpatchToProps)(AddTasks)
