import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = (props) => {
    return (
      <TouchableOpacity>
        <View>
          <Text style={styles.text}>★ { props.item }</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MuseoSansRounded-300',
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
    paddingTop: 2
  }
})

export default ListItem;
