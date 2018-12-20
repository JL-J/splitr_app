import React from 'react';
import { FlatList, Button , View, StyleSheet } from 'react-native';
import { Container, Header, Content, Text, Body, Title, Subtitle, Item, Form, Picker, Icon } from 'native-base'
import { connect } from 'react-redux';
import NameTaskList from '../components/nameTaskList';
import HeaderBanner from '../components/header';


export class SummaryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <HeaderBanner
          title = {"Summary"}
        />
        <Title style={styles.title}>Name: {this.props.currentTrip.tripName}</Title>
        <Title style={styles.title}>Location: {this.props.currentTrip.tripLocation}</Title>
        <Title style={styles.title}>Date: {this.props.currentTrip.tripStartDate.toString()}-{this.props.currentTrip.tripEndDate.toString()} </Title>
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

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontFamily: 'MuseoSansRounded-300',
    fontWeight: 'bold'
  }
});

export default connect(mapStateToProps)(SummaryPage);
