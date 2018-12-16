import React from 'react';
import { View, FlatList, StyleSheet, ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, SwipeRow, Body, Title } from 'native-base'
import { connect } from 'react-redux';

export class AddPeopleToDishes extends React.Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      showReceipt: false,
    };
  }

 _toggleShow = () => {
   this.setState({showReceipt: !this.state.showReceipt})
 }

 renderReceipt = () => {
   if (this.state.showReceipt) {
     return (
       <FlatList
       data = { this.props.dishes }
       keyExtractor = {( item, index) => index.toString()}
       renderItem = { info => (
          <ListItem>
           <Text>{ info.item.value.dishName }  £{ info.item.value.dishPrice }</Text>
          </ListItem>
       )}
       />
     );
    } else {
       return null;
    }
 }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header>
          <Body>
            <Title>Who owes what?</Title>
          </Body>
        </Header>
        <Content scrollEnabled={false}>
          <FlatList
          data = { this.props.peopleNames }
          keyExtractor = {( item, index) => index.toString()}
          renderItem = { info => <SwipeRow
              leftOpenValue={75}
              rightOpenValue={-75}
              left={
                <Button items onPress={() => this._toggleShow()} >
                   <Icon active name='paper' style={{color: 'white'}}/>
                </Button>
              }
              body={
                <View>
                  <Text style={{ paddingLeft: 100, fontWeight: 'bold' }}>{ info.item.value }</Text>
                  <List>{ this.renderReceipt()}</List>
                </View>
              }
              right={
                <Button trash style={{backgroundColor: 'red'}} onPress={() => alert('Delete')}>
                   <Icon active name="trash" style={{color: 'white'}}/>
                </Button>
              }
            />}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    peopleNames: state.peopleNames.peopleNames,
    dishes: state.dishes.dishes
  }
}

var styles = StyleSheet.create({
})

export default connect(mapStateToProps)(AddPeopleToDishes);
