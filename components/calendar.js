import React from 'react';
import { DatePicker } from 'native-base';

export default class Calendar extends React.Component {
  render() {
    return (
      <DatePicker
        defaultDate={new Date()}
        minimumDate={new Date()}
        maximumDate={new Date(2020, 12, 31)}
        locale={"en"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        placeHolderText="Select date"
        textStyle={{ color: "green" }}
        placeHolderTextStyle={{ color: "#d3d3d3" }}
        onDateChange={ this.props.onDateChangeHandler }
      />
    );
  }
}
