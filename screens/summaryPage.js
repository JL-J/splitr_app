import React from 'react';
import { FlatList, Button , View} from 'react-native';
import { Container, Header, Content, Text, Body, Title, Subtitle, Item, Form, Picker, Icon } from 'native-base'
import { connect } from 'react-redux';
import NameTaskList from '../components/nameTaskList';


export class SummaryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.reduxstate)
    return (
      <Container>
        <Header>
          <Title>Summary</Title>
        </Header>
        <Title>Name: {this.props.currentTrip.tripName}</Title>
        <Title>Location: {this.props.currentTrip.tripLocation}</Title>
        <Title>Date: {this.props.currentTrip.tripStartDate.toString()}-{this.props.currentTrip.tripEndDate.toString()} </Title>
        <FlatList
          data = {this.props.assignedTasks}
          keyExtractor = {( item, index) => index.toString()}
          renderItem = { info => (
          <NameTaskList
            data={info.item}
          />
          )}
       />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    peopleNames: state.peopleNames.peopleNames,
    tasks: state.tasks.tasks,
    trips: state.trips.trips,
    currentTrip: state.trips.currentTrip,
    nameSelectedState: state.nameSelected.nameSelected,
    assignedTasks: state.assignTasks.assignTasks,
    reduxstate: state
  }
}

export default connect(mapStateToProps)(SummaryPage);
